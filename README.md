# 🏥 Clinic Management System — MongoDB Project

A multi-doctor SaaS platform built on **MongoDB Atlas** for managing clinic appointments, medical rep visits, and doctor schedules.

[![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-green?logo=mongodb)](https://cloud.mongodb.com)
[![Collections](https://img.shields.io/badge/Collections-8-blue)]()
[![Aggregations](https://img.shields.io/badge/Aggregations-16-orange)]()
[![Status](https://img.shields.io/badge/Status-Complete-brightgreen)]()

---

## 📌 Overview

This project is a **Clinic Management System** built using **MongoDB Atlas**, designed to manage doctors, patients, appointments, medical representatives, and clinic schedules.

The system demonstrates:
- ✅ Data Modeling — Embedded & Referenced relationships
- ✅ Aggregation Framework — 16 real-world queries
- ✅ Business Logic — booking validation, scheduling conflicts
- ✅ Multi-role Authentication — doctor, patient, medical rep, admin
- ✅ SaaS Architecture — multiple doctors on one platform

---

## 🎯 Features

| Feature | Description |
|---------|-------------|
| 🔐 Authentication | Users collection with 4 roles |
| 👨‍⚕️ Doctors | Profile + clinic info + consultation fee |
| 🧑‍🤝‍🧑 Patients | Profile + blood type + medical info |
| 📅 Appointments | Booking with day, time, status |
| 💊 Medical Reps | Company info + drug specialty |
| 🔄 Rep Visits | Full visit lifecycle + embedded summary |
| 🕒 Schedules | Weekly working hours per doctor |
| 🚫 Clinic Days | Closed dates + exception handling |

---

## 🗂️ Database Structure

### 1️⃣ users
Stores accounts for all system users.

| Field | Type | Description |
|-------|------|-------------|
| `_id` | int | Custom ID |
| `name` | string | Full name |
| `email` | string | Unique email |
| `password` | string | Hashed password |
| `role` | string | `doctor` · `patient` · `medical rep` · `admin` |

---

### 2️⃣ doctors
Doctor-specific profile data.

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `user_id` | int | **→ users._id** |
| `specialization` | string | e.g. Cardiology |
| `clinic_name` | string | Display name |
| `consultation_fee` | int | Fee in EGP |

---

### 3️⃣ patients
Patient profile and medical info.

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `user_id` | int | **→ users._id** |
| `age` | int | Patient age |
| `gender` | string | male / female |
| `phone` | string | Contact number |
| `blood_type` | string | A+, B-, O+, etc. |

---

### 4️⃣ appointments
Patient bookings linked to doctors.

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `doctor_id` | ObjectId | **→ doctors._id** |
| `patient_id` | ObjectId | **→ patients._id** |
| `day` | string | Sunday–Saturday |
| `time` | string | HH:MM format |
| `status` | string | booked / cancelled |

---

### 5️⃣ medical_reps
Medical representative data.

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `user_id` | int | **→ users._id** |
| `company_name` | string | Pharma company |
| `company_phone` | string | Company number |
| `drug_specialty` | string | Medical field |
| `phone` | string | Rep direct number |

---

### 6️⃣ rep_visits
Visit requests + embedded visit summary.

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `doctor_id` | ObjectId | **→ doctors._id** |
| `rep_id` | ObjectId | **→ medical_reps._id** |
| `date` | ISODate | Visit date |
| `status` | string | completed · cancelled · no-show · rescheduled |
| `visit_summary` | **embedded** | samples · duration · topic · feedback |

> **Embedded document example:**
> ```json
> "visit_summary": {
>   "samples": 3,
>   "duration_min": 22,
>   "discussion_topic": "Cardio drug",
>   "feedback": "Doctor accepted samples"
> }
> ```

---

### 7️⃣ Schedules
Weekly working hours per doctor.

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `doctor_id` | ObjectId | **→ doctors._id** |
| `day` | string | Working day |
| `patient_start_time` | string | e.g. "09:00" |
| `patient_end_time` | string | e.g. "13:00" |
| `rep_start_time` | string | e.g. "13:00" |
| `rep_end_time` | string | e.g. "14:00" |
| `max_patients` | int | Daily patient limit |
| `max_reps` | int | Daily rep limit |

---

### 8️⃣ clinic_days
Handles closed days and exceptions.

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated |
| `doctor_id` | ObjectId | **→ doctors._id** |
| `date` | ISODate | Specific date |
| `is_open` | boolean | false = closed |
| `reason` | string | e.g. "National Holiday" |

---

## 🔗 Relationships

```
users
 ├── doctors        (user_id  → users._id)
 ├── patients       (user_id  → users._id)
 └── medical_reps   (user_id  → users._id)

doctors
 ├── appointments   (doctor_id → doctors._id)
 ├── rep_visits     (doctor_id → doctors._id)
 ├── Schedules      (doctor_id → doctors._id)
 └── clinic_days    (doctor_id → doctors._id)

appointments
 └── patients       (patient_id → patients._id)

rep_visits
 └── medical_reps   (rep_id → medical_reps._id)
```

**Referenced** — all cross-collection links use `ObjectId` or `int` references.  
**Embedded** — `visit_summary` lives inside each `rep_visits` document.

---

## 📊 Aggregation Queries (14)

### 👤 Users & Doctors
| # | Query | Stages Used |
|---|-------|-------------|
| 1 | Count total doctors per specialization | `$group`, `$sum` |
| 2 | Combine doctor info with total patients | `$lookup`, `$unwind`, `$addFields`, `$size` |
| 3 | Identify low-utilization doctors | `$lookup`, `$addFields`, `$match` |

### 🧑‍🤝‍🧑 Patients & Appointments
| # | Query | Stages Used |
|---|-------|-------------|
| 4 | Count total patients per day | `$group`, `$sum` |
| 5 | Identify peak day | `$group`, `$sort`, `$limit` |
| 6 | Identify peak hour | `$group`, `$sort`, `$limit` |

### 💊 Medical Reps & Visits
| # | Query | Stages Used |
|---|-------|-------------|
| 7 | Total rep visits per day | `$group`, `$dateToString` |
| 8 | Most active medical rep | `$group`, `$sort`, `$limit`, `$lookup` |
| 9 | Compare patients vs rep visits per doctor | `$group`, `$lookup`, `$addFields` |

### 🕒 Schedules & Clinic Logic
| # | Query | Stages Used |
|---|-------|-------------|
| 10 | Weekly schedule for a specific doctor | `$match`, `$lookup` |
| 11 | Retrieve doctor closed days | `$match`, `$lookup` |
| 12 | Calculate occupancy rate | `$group`, `$project`, `$divide`, `$multiply` |
| 13 | Detect idle days | `$group`, `$push`, `$setDifference` |
| 14 | Detect scheduling conflicts | `$match`, `$addFields`, `$switch`, `$dayOfWeek`, `$lookup` |

---

## 🧠 Business Logic

```
Booking Request
      │
      ▼
┌─────────────────────────────────────────────────┐
│ 1. Is the clinic open?        → clinic_days      │
│ 2. Does a schedule exist?     → Schedules        │
│ 3. Is time within range?      → patient/rep hours│
│ 4. Is the slot available?     → appointments     │
│ 5. Is max capacity reached?   → max_patients     │
└─────────────────────────────────────────────────┘
      │
      ▼
   ✅ Booking Confirmed  /  ❌ Rejected
```

---

## 📦 Sample Data

| Collection | Records |
|-----------|---------|
| users | 50 (10 doctors + 10 reps + 30 patients) |
| doctors | 10 |
| patients | 30 |
| medical_reps | 10 |
| appointments | 31 |
| rep_visits | 100 |
| Schedules | 25 |
| clinic_days | 10 |

---

## 🚀 Setup

### 1. MongoDB Atlas
1. Create a free cluster at [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create database named `clinicDB`
3. **Database Access** → Add DB User → role: `readWrite` on `clinicDB`
4. **Network Access** → Add IP → `0.0.0.0/0` (development)
5. Copy your connection string

### 2. Run Scripts in Order
```
1.  users (doctors)       → db.users.insertMany([...])
2.  doctors               → db.doctors.insertMany([...])
3.  users (patients)      → db.users.insertMany([...])
4.  patients              → db.patients.insertMany([...])
5.  users (reps)          → db.users.insertMany([...])
6.  medical_reps          → db.medical_reps.insertMany([...])
7.  appointments          → db.appointments.insertMany([...])
8.  rep_visits            → db.rep_visits.insertMany([...])
9.  Schedules             → db.Schedules.insertMany([...])
10. clinic_days           → db.clinic_days.insertMany([...])
```

> ⚠️ Always insert `users` before any role-specific collection.

---

## ✅ Requirements Coverage

| Requirement | Status | How |
|------------|--------|-----|
| Secure Authentication | ✅ | `users` collection — 4 roles |
| Business Logic Cycle | ✅ | 5-step booking validation |
| Embedded Documents | ✅ | `visit_summary` in `rep_visits` |
| Referenced Relationships | ✅ | `user_id`, `doctor_id`, `patient_id`, `rep_id` |
| Aggregation Pipelines | ✅ | 14 queries — `$group`, `$lookup`, `$switch`... |
| DB Users + Permissions | ✅ | Atlas → `readWrite` on `clinicDB` |
| Network Access | ✅ | Atlas → IP Whitelist |
| MongoDB Atlas Deployment | ✅ | `clinicDB` on Atlas Cluster |

---

## 🛠️ Technologies

- **MongoDB Atlas** — Cloud database
- **MongoDB Aggregation Framework** — Data analysis
- **NoSQL Data Modeling** — Embedded + Referenced

---

## 💡 Key Insights

- Efficient use of references for scalability
- Separation of base schedules and exceptions
- Embedded `visit_summary` demonstrates real-world nested documents
- 14 aggregation queries cover the full analytics lifecycle
- Ready for Dashboard integration (Power BI / Tableau / Metabase)
