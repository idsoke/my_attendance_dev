-- Run this BEFORE `npm run db:push` (or `prisma migrate dev`) on any database
-- that already has data, so existing rows survive the Role enum change
-- (ADMIN/EDITOR/USER/PENGGUNA/SEKRETARIS -> ADMIN/MANAGER/EMPLOYEE) and the
-- removal of the Upa/Jenjang/Dpc tables.
--
-- Usage:
--   mysql -u root -p your_database < prisma/migrate-roles-pre-push.sql
--   npm run db:push
--
-- Safe to re-run (idempotent).

START TRANSACTION;

-- 1. Map old roles to the new 3-role model on `User`.
UPDATE `User` SET `role` = 'MANAGER'  WHERE `role` = 'EDITOR';
UPDATE `User` SET `role` = 'EMPLOYEE' WHERE `role` IN ('USER', 'PENGGUNA', 'SEKRETARIS');

-- 2. Map old roles on `RoleAccess`, then drop duplicates that the mapping
--    creates (e.g. USER + PENGGUNA + SEKRETARIS rows for the same menu all
--    become EMPLOYEE, which would violate the (role, menuId) unique constraint).
UPDATE `RoleAccess` SET `role` = 'MANAGER'  WHERE `role` = 'EDITOR';
UPDATE `RoleAccess` SET `role` = 'EMPLOYEE' WHERE `role` IN ('USER', 'PENGGUNA', 'SEKRETARIS');

DELETE ra1 FROM `RoleAccess` ra1
INNER JOIN `RoleAccess` ra2
  ON ra1.`role` = ra2.`role`
 AND ra1.`menuId` = ra2.`menuId`
 AND ra1.`id` > ra2.`id`;

-- 3. Clear LISTBOX questions that pointed at the now-removed UPA/DPC/Jenjang
--    master data, so the admin UI doesn't show a dangling source.
UPDATE `Pertanyaan` SET `sourceList` = NULL WHERE `sourceList` IN ('UPA', 'DPC', 'JENJANG');

COMMIT;

-- After this completes successfully, run `npm run db:push` to:
--   - alter the Role enum to ADMIN/MANAGER/EMPLOYEE
--   - drop the Upa, Jenjang, Dpc tables
--   - drop User.upaId, User.jenjangId, Activity.upaId columns
--
-- Note: existing NextAuth sessions (JWT) still carry the old role string.
-- Ask logged-in users to log out and back in after deploying this change.
