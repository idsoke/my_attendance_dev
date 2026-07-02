#!/bin/bash
cd /home/idris/my_attendance_dev
npx prisma db push && npx prisma db seed
