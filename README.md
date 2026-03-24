# 🏥 Smart Clinic Management System

A multi-doctor SaaS platform built on **MongoDB Atlas** for managing clinic appointments, medical rep visits, and doctor schedules.

---

## 📋 Project Overview

| Item | Details |
|------|---------|
| Database | MongoDB Atlas |
| DB Name | `clinicDB` |
| Collections | 8 |
| Team Members | 4 |
| Aggregation Queries | 14 |

---

## 🗂️ Collections

| # | Collection | Owner | Purpose |
|---|-----------|-------|---------|
| 1 | `users` | Member 1 | Authentication + roles for all users |
| 2 | `doctors` | Member 1 | Doctor profile + clinic info |
| 3 | `patients` | Member 2 | Patient additional data |
| 4 | `appointments` | Member 2 | Patient bookings with validation |
| 5 | `medical_reps` | Member 3 | Medical rep profile + company |
| 6 | `rep_visits` | Member 3 | Rep visit requests + approval flow |
| 7 | `Schedules` | Member 4 | Doctor weekly working hours |
| 8 | `clinic_days` | Member 4 | Closed / holiday dates |

---

## 👥 Roles

```
doctor · patient · medical rep · admin
```

---

## ⚙️ Setup

### 1. MongoDB Atlas

1. Create a free cluster at [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a database named `clinicDB`
3. Go to **Database Access** → Add DB User → role: `readWrite` on `clinicDB`
4. Go to **Network Access** → Add IP Address → `0.0.0.0/0` (development)
5. Get your connection string

### 2. Run the Scripts

Open **MongoDB Shell** or **MongoDB Compass** and run the files in this order:

```
1. users (doctors)
2. doctors
3. users (patients)
4. patients
5. users (medical reps)
6. medical_reps
7. appointments
8. rep_visits
9. Schedules
10. clinic_days
```

> ⚠️ Always insert `users` before any role-specific collection — every profile references a `user_id`.

---

## 🔗 Data Relationships

```
users
 ├── doctors        (user_id → users._id)
 ├── patients       (user_id → users._id)
 └── medical_reps   (user_id → users._id)

doctors
 ├── appointments   (doctor_id → doctors._id)
 ├── rep_visits     (doctor_id → doctors._id)
 ├── Schedules      (doctor_id → doctors._id)
 └── clinic_days    (doctor_id → doctors._id)
```

**Referenced relationship** — all links use `ObjectId` references.

**Embedded documents** — `rep_visits` contains an embedded `visit_summary` object:
```json
{
  "visit_summary": {
    "samples": 3,
    "duration_min": 22,
    "discussion_topic": "Cardio drug",
    "feedback": "Doctor accepted samples"
  }
}
```

---

## 📊 Aggregation Queries (14)

| # | Query | Collection |
|---|-------|-----------|
| 1 | Count total doctors per specialization | `doctors` |
| 2 | Combine doctor info with total patients | `doctors` + `appointments` |
| 3 | Identify low-utilization doctors | `doctors` + `appointments` |
| 4 | Count total patients per day | `appointments` |
| 5 | Identify peak day | `appointments` |
| 6 | Identify peak hour | `appointments` |
| 7 | Total rep visits per day | `rep_visits` |
| 8 | Most active medical rep | `rep_visits` + `medical_reps` |
| 9 | Compare patients vs rep visits per doctor | `appointments` + `rep_visits` |
| 10 | Weekly schedule for a specific doctor | `Schedules` |
| 11 | Doctor closed days | `clinic_days` |
| 12 | Calculate occupancy rate | `Schedules` |
| 13 | Detect idle days | `Schedules` |
| 14 | Detect scheduling conflicts | `clinic_days` + `Schedules` |

---

## 📁 File Structure

```
clinic-management-system/
├── data/
│   ├── 01_users_doctors.js
│   ├── 02_doctors.js
│   ├── 03_users_patients.js
│   ├── 04_patients.js
│   ├── 05_users_reps.js
│   ├── 06_medical_reps.js
│   ├── 07_appointments.js
│   ├── 08_rep_visits.js
│   ├── 09_schedules.js
│   └── 10_clinic_days.js
└── aggregations/
    ├── 01_doctors_per_specialization.js
    ├── 02_doctor_with_patients.js
    ├── 03_low_utilization_doctors.js
    ├── 04_patients_per_day.js
    ├── 05_peak_day.js
    ├── 06_peak_hour.js
    ├── 07_rep_visits_per_day.js
    ├── 08_most_active_rep.js
    ├── 09_patients_vs_rep_visits.js
    ├── 10_doctor_schedule.js
    ├── 11_clinic_closed_days.js
    ├── 12_occupancy_rate.js
    ├── 13_idle_days.js
    └── 14_scheduling_conflicts.js
```

---

## ✅ Project Requirements Coverage

| Requirement | Status | How |
|------------|--------|-----|
| Secure Authentication | ✅ | `users` collection — roles + hashed passwords |
| Business Logic Cycle | ✅ | Booking validation — clinic open → schedule → time → slot → max limit |
| Embedded Documents | ✅ | `visit_summary` embedded in `rep_visits` |
| Referenced Relationships | ✅ | `user_id`, `doctor_id`, `patient_id`, `rep_id` via ObjectId |
| Aggregation Pipelines | ✅ | 14 queries using `$group`, `$lookup`, `$match`, `$sort`, `$switch` |
| DB Users + Permissions | ✅ | Atlas → `readWrite` on `clinicDB` per team member |
| Network Access | ✅ | Atlas → IP Whitelist configured |
| MongoDB Atlas Deployment | ✅ | `clinicDB` hosted on Atlas cluster |

---

## 👨‍💻 Team

| Member | Module | Collections |
|--------|--------|-------------|
| Member 1 | Authentication | `users` · `doctors` |
| Member 2 | Patients | `patients` · `appointments` |
| Member 3 | Medical Reps | `medical_reps` · `rep_visits` |
| Member 4 | Clinic Management | `Schedules` · `clinic_days` |

---

## 📌 Sample Data Summary

- **10 Doctors** — 10 specializations
- **30 Patients** — ages 19–52
- **10 Medical Reps** — 6 companies
- **31 Appointments** — distributed across all doctors
- **100 Rep Visits** — Jan–Feb 2025
- **25 Schedules** — covering Sun–Thu
- **10 Clinic Closed Days** — holidays + leaves
