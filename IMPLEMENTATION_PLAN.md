# PT Optima ITT - Employee Attendance Application (MVP)

## Objective
Customize the existing `absenci-app` to serve as an employee attendance system for **PT Optima ITT**.

## Phase 1: MVP Features

### 1. Database Schema Updates
- **New Model: `Presensi` (Daily Attendance)**
  - `userId`: Link to Employee.
  - `date`: Date of attendance.
  - `checkIn`: Timestamp.
  - `checkOut`: Timestamp.
  - `locationIn`: Lat/Long string.
  - `locationOut`: Lat/Long string.
  - `status`: Present, Late, Absent, Permit (Izin/Sakit).
  - `notes`: Optional notes.
- **Update Model: `User`**
  - Add `employeeId` (NIK).
  - Add `department` (Jabatan/Divisi).

### 2. Branding & UI (Premium Design)
- **Theme**: Corporate Blue & White with modern glassmorphism accents.
- **Logo/Title**: "PT Optima ITT".
- **Fonts**: Inter or similar modern sans-serif.

### 3. Core Functionalities
- **Dashboard (Employee)**:
  - **Clock In/Out Widget**: Big, easy-to-use button.
  - **Live Time**: Real-time clock.
  - **Location Check**: Verify user is within range (Mocked or flexible for MVP).
  - **Summary**: "Hadir Hari Ini", "Total Jam Kerja".
- **History (Employee)**:
  - List of past attendance records.
- **Admin Dashboard**:
  - View all employee attendance.

## Implementation Steps
1.  **Schema Migration**: Add `Presensi` model.
2.  **Backend Services**: Create server actions for Check-in/Check-out.
3.  **Frontend**:
    -   Update `globals.css` for new color palette.
    -   Revamp Login Page.
    -   Build Employee Dashboard (Clock In/Out).
    -   Build Attendance History Page.

## Technology
-   Next.js 15 (App Router)
-   Prisma ORM
-   TailwindCSS
-   Lucide Icons
