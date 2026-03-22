# 🏥 Clinic Management System (MongoDB Project)

## 📌 Overview
This project is a **Clinic Management System** built using **MongoDB Atlas**, designed to manage doctors, patients, appointments, medical representatives, and clinic schedules.

The system demonstrates:
- Data Modeling (Embedded & Referenced)
- Aggregation Framework
- Business Logic Simulation
- Real-world Database Design

---

## 🎯 Project Features

- 🔐 Secure Authentication System (Users & Roles)
- 👨‍⚕️ Doctors Management
- 🧑‍🤝‍🧑 Patients Management
- 📅 Appointments Booking System
- 💊 Medical Representatives Visits Tracking
- 🕒 Weekly Schedules Management
- 🚫 Clinic Days (Exceptions Handling)
- 📊 Advanced Data Analysis using Aggregation

---

## 🗂️ Database Structure

### 1️⃣ Users
Stores system users (Doctors, Patients, Medical Reps)

**Fields:**
- `_id`
- `name`
- `email`
- `password`
- `role`

---

### 2️⃣ Doctors
Stores doctor-specific data

**Fields:**
- `_id`
- `user_id` (Reference → Users)
- `specialization`
- `clinic_name`
- `consultation_fee`

---

### 3️⃣ Patients

**Fields:**
- `_id`
- `user_id` (Reference → Users)
- `age`
- `gender`
- `phone`

---

### 4️⃣ Appointments

**Fields:**
- `_id`
- `doctor_id` (Reference → Doctors)
- `patient_id` (Reference → Patients)
- `day`
- `time`
- `status`

---

### 5️⃣ Medical_Reps

**Fields:**
- `_id`
- `user_id` (Reference → Users)
- `company_name`

---

### 6️⃣ Rep_Visits

**Fields:**
- `_id`
- `rep_id` (Reference → Medical_Reps)
- `doctor_id` (Reference → Doctors)
- `day`
- `time`
- `status`

---

### 7️⃣ Schedules

Defines weekly working plan

**Fields:**
- `doctor_id`
- `day`
- `patient_start_time`
- `patient_end_time`
- `max_patients`
- `rep_start_time`
- `rep_end_time`
- `max_reps`

---

### 8️⃣ Clinic_Days

Handles exceptions (closed days)

**Fields:**
- `doctor_id`
- `date`
- `is_open`
- `reason`

---

## 🔗 Relationships

- Doctors → Users (Reference)
- Patients → Users (Reference)
- Medical_Reps → Users (Reference)
- Appointments → Doctors & Patients
- Rep_Visits → Doctors & Medical_Reps

---

## 📊 Aggregation Queries

### 👤 Users & Doctors
1. Count total doctors per specialization  
2. Combine doctor info with total patients  
3. Identify low-utilization doctors  

---

### 👤 Patients & Appointments
4. Count total patients per day  
5. Identify peak day  
6. Identify peak hour  

---

### 👤 Medical Reps & Visits
7. Count total rep visits per day  
8. Most active medical rep  
9. Rep visits per doctor  

---

### 👤 Schedules & Clinic Logic
10. Calculate occupancy rate  
11. Detect idle days  
12. Detect scheduling conflicts  

---

## 🧠 Business Logic

- **Schedules** → Define weekly working hours  
- **Clinic_Days** → Override schedules (exceptions)  
- **Appointments** → Patient bookings  
- **Rep_Visits** → Medical rep visits  

---

## 🚀 Technologies Used

- MongoDB Atlas
- MongoDB Aggregation Framework
- NoSQL Data Modeling

---

## 📦 Deliverables

- ✔ Aggregation Queries  
- ✔ Query Results  
- ✔ Data Modeling Design  
- ✔ Ready for Dashboard Integration (Power BI / Tableau)  

---

## 💡 Key Insights

- Efficient use of references for scalability  
- Separation of base schedules and exceptions  
- Real-world simulation of clinic workflow  
- Advanced analytics using MongoDB Aggregation  


