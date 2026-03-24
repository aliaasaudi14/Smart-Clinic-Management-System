// ==========================================
//  Doctors(Users Collection)
// ==========================================
db.users.insertMany([
    { _id: 1, name: "Dr Mohamed", email: "mohamed@clinic.com", password: "123456", role: "doctor" },
    { _id: 2, name: "Dr Ahmed", email: "ahmed@clinic.com", password: "1234567", role: "doctor" },
    { _id: 3, name: "Dr Sara", email: "sara@clinic.com", password: "12345678", role: "doctor" },
    { _id: 4, name: "Dr Mahmoud", email: "mahmoud@clinic.com", password: "123456789", role: "doctor" },
    { _id: 5, name: "Dr Ali", email: "ali@clinic.com", password: "12345678910", role: "doctor" },
    { _id: 6, name: "Dr Fatma", email: "fatma@clinic.com", password: "12345678911", role: "doctor" },
    { _id: 7, name: "Dr Hassan", email: "hassan@clinic.com", password: "Hassan@Secure2024", role: "doctor" },
    { _id: 8, name: "Dr Mona", email: "mona@clinic.com", password: "Mona#Password!1", role: "doctor" },
    { _id: 9, name: "Dr Khaled", email: "khaled@clinic.com", password: "Kh@led_7788", role: "doctor" },
    { _id: 10, name: "Dr Laila", email: "laila@clinic.com", password: "Laila.Pass.99", role: "doctor" }
]);
// ==========================================
// (Doctors Collection)
// ==========================================
db.doctors.insertMany([
    { user_id: 1, specialization: "Cardiology", clinic_name: "Heart Care Center", consultation_fee: 400 },
    { user_id: 2, specialization: "Dermatology", clinic_name: "Skin Experts Clinic", consultation_fee: 350 },
    { user_id: 3, specialization: "Pediatrics", clinic_name: "Kids Health Clinic", consultation_fee: 300 },
    { user_id: 4, specialization: "Orthopedics", clinic_name: "Bone & Joint Center", consultation_fee: 450 },
    { user_id: 5, specialization: "Neurology", clinic_name: "Neuro Clinic", consultation_fee: 500 },
    { user_id: 6, specialization: "Ophthalmology", clinic_name: "Eye Vision Center", consultation_fee: 300 },
    { user_id: 7, specialization: "Dentistry", clinic_name: "Smile Dental Clinic", consultation_fee: 250 },
    { user_id: 8, specialization: "Psychiatry", clinic_name: "Mind Wellness Center", consultation_fee: 600 },
    { user_id: 9, specialization: "General Surgery", clinic_name: "Surgical Excellence Clinic", consultation_fee: 550 },
    { user_id: 10, specialization: "Gynecology", clinic_name: "Women Health Clinic", consultation_fee: 400 }
]);
// ==========================================
// Patients(Users Collection)
// ==========================================
db.getCollection("users").insertMany([
    { "_id": 21, "name": "ali ahmed", "email": "ali.ahmed@liptis.com", "password": "ali", "role": "patient" },
    { "_id": 22, "name": "sara mohamed", "email": "sara.mohamed@liptis.com", "password": "sara", "role": "patient" },
    { "_id": 23, "name": "omar khaled", "email": "omar.khaled@liptis.com", "password": "omar", "role": "patient" },
    { "_id": 24, "name": "nada ahmed", "email": "nada.ahmed@liptis.com", "password": "nada", "role": "patient" },
    { "_id": 25, "name": "mohamed ali", "email": "mohamed.ali@liptis.com", "password": "mohamed", "role": "patient" },
    { "_id": 26, "name": "fatma gamal", "email": "fatma.gamal@liptis.com", "password": "fatma", "role": "patient" },
    { "_id": 27, "name": "hassan ibrahim", "email": "hassan.ibrahim@liptis.com", "password": "hassan", "role": "patient" },
    { "_id": 28, "name": "mona adel", "email": "mona.adel@liptis.com", "password": "mona", "role": "patient" },
    { "_id": 29, "name": "youssef samy", "email": "youssef.samy@liptis.com", "password": "youssef", "role": "patient" },
    { "_id": 30, "name": "aya mohamed", "email": "aya.mohamed@liptis.com", "password": "aya", "role": "patient" },
    { "_id": 31, "name": "khaled hassan", "email": "khaled.hassan@liptis.com", "password": "khaled", "role": "patient" },
    { "_id": 32, "name": "reem ali", "email": "reem.ali@liptis.com", "password": "reem", "role": "patient" },
    { "_id": 33, "name": "tarek mahmoud", "email": "tarek.mahmoud@liptis.com", "password": "tarek", "role": "patient" },
    { "_id": 34, "name": "laila ibrahim", "email": "laila.ibrahim@liptis.com", "password": "laila", "role": "patient" },
    { "_id": 35, "name": "ibrahim adel", "email": "ibrahim.adel@liptis.com", "password": "ibrahim", "role": "patient" },
    { "_id": 36, "name": "dina walid", "email": "dina.walid@liptis.com", "password": "dina", "role": "patient" },
    { "_id": 37, "name": "hany said", "email": "hany.said@liptis.com", "password": "hany", "role": "patient" },
    { "_id": 38, "name": "mariam mostafa", "email": "mariam.mostafa@liptis.com", "password": "mariam", "role": "patient" },
    { "_id": 39, "name": "ahmed kareem", "email": "ahmed.kareem@liptis.com", "password": "ahmed", "role": "patient" },
    { "_id": 40, "name": "nour hassan", "email": "nour.hassan@liptis.com", "password": "nour", "role": "patient" },
    { "_id": 41, "name": "mazen adel", "email": "mazen.adel@liptis.com", "password": "mazen", "role": "patient" },
    { "_id": 42, "name": "hanan bakr", "email": "hanan.bakr@liptis.com", "password": "hanan", "role": "patient" },
    { "_id": 43, "name": "zeyad ali", "email": "zeyad.ali@liptis.com", "password": "zeyad", "role": "patient" },
    { "_id": 44, "name": "salma hany", "email": "salma.hany@liptis.com", "password": "salma", "role": "patient" },
    { "_id": 45, "name": "yassin omar", "email": "yassin.omar@liptis.com", "password": "yassin", "role": "patient" },
    { "_id": 46, "name": "rawda said", "email": "rawda.said@liptis.com", "password": "rawda", "role": "patient" },
    { "_id": 47, "name": "ashraf fawzy", "email": "ashraf.fawzy@liptis.com", "password": "ashraf", "role": "patient" },
    { "_id": 48, "name": "ghadir mahmoud", "email": "ghadir.mahmoud@liptis.com", "password": "ghadir", "role": "patient" },
    { "_id": 49, "name": "ahmed refaat", "email": "ahmed.refaat@liptis.com", "password": "ahmed", "role": "patient" },
    { "_id": 50, "name": "soha khaled", "email": "soha.khaled@liptis.com", "password": "soha", "role": "patient" }
]);
// ==========================================
// Patients Collection    
// ==========================================
db.getCollection("patients").insertMany([
    { user_id: 21, age: 25, gender: "male", phone: "01111111111", blood_type: "B+" },
    { user_id: 22, age: 29, gender: "female", phone: "01222222222", blood_type: "A+" },
    { user_id: 23, age: 34, gender: "male", phone: "01033333333", blood_type: "O+" },
    { user_id: 24, age: 21, gender: "female", phone: "01544444444", blood_type: "AB+" },
    { user_id: 25, age: 40, gender: "male", phone: "01155555555", blood_type: "B-" },
    { user_id: 26, age: 31, gender: "female", phone: "01266666666", blood_type: "O-" },
    { user_id: 27, age: 26, gender: "male", phone: "01077777777", blood_type: "A-" },
    { user_id: 28, age: 28, gender: "female", phone: "01588888888", blood_type: "B+" },
    { user_id: 29, age: 42, gender: "male", phone: "01199999999", blood_type: "AB-" },
    { user_id: 30, age: 23, gender: "female", phone: "01210101010", blood_type: "O+" },
    { user_id: 31, age: 30, gender: "male", phone: "01022222221", blood_type: "A+" },
    { user_id: 32, age: 24, gender: "female", phone: "01022222222", blood_type: "B-" },
    { user_id: 33, age: 45, gender: "male", phone: "01022222223", blood_type: "O+" },
    { user_id: 34, age: 28, gender: "female", phone: "01022222224", blood_type: "AB+" },
    { user_id: 35, age: 35, gender: "male", phone: "01022222225", blood_type: "O-" },
    { user_id: 36, age: 22, gender: "female", phone: "01022222226", blood_type: "A-" },
    { user_id: 37, age: 50, gender: "male", phone: "01022222227", blood_type: "B+" },
    { user_id: 38, age: 27, gender: "female", phone: "01022222228", blood_type: "O+" },
    { user_id: 39, age: 33, gender: "male", phone: "01022222229", blood_type: "AB-" },
    { user_id: 40, age: 29, gender: "female", phone: "01022222230", blood_type: "A+" },
    { user_id: 41, age: 28, gender: "male", phone: "01055555541", blood_type: "O+" },
    { user_id: 42, age: 33, gender: "female", phone: "01055555542", blood_type: "A-" },
    { user_id: 43, age: 19, gender: "male", phone: "01055555543", blood_type: "B+" },
    { user_id: 44, age: 41, gender: "female", phone: "01055555544", blood_type: "AB-" },
    { user_id: 45, age: 52, gender: "male", phone: "01055555545", blood_type: "O-" },
    { user_id: 46, age: 26, gender: "female", phone: "01055555546", blood_type: "B+" },
    { user_id: 47, age: 37, gender: "male", phone: "01055555547", blood_type: "A+" },
    { user_id: 48, age: 30, gender: "female", phone: "01055555548", blood_type: "O+" },
    { user_id: 49, age: 22, gender: "male", phone: "01055555549", blood_type: "AB+" },
    { user_id: 50, age: 48, gender: "female", phone: "01055555550", blood_type: "B-" }
]);
// ==========================================
//  Appointments Collection
// ==========================================
// ==========================================
// 3. Appointments Collection (Updated with new Patient ObjectIds)
// ==========================================
db.getCollection("appointments").insertMany([
  // --- Dr Mohamed (doctor_id: ...538) ---
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441538"), patient_id: ObjectId("69c056ef7cf28bd5e444152e"), day: "Sunday", time: "09:00", status: "booked" }, // Patient 21
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441538"), patient_id: ObjectId("69c056ef7cf28bd5e444152f"), day: "Sunday", time: "10:30", status: "booked" }, // Patient 22
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441538"), patient_id: ObjectId("69c05a007cf28bd5e4441592"), day: "Sunday", time: "09:45", status: "booked" }, // Patient 41
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441538"), patient_id: ObjectId("69c05a007cf28bd5e4441593"), day: "Tuesday", time: "11:15", status: "booked" }, // Patient 42
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441538"), patient_id: ObjectId("69c05a007cf28bd5e4441594"), day: "Thursday", time: "12:30", status: "booked" }, // Patient 43

  // --- Dr Ahmed (doctor_id: ...539) ---
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441539"), patient_id: ObjectId("69c056ef7cf28bd5e4441530"), day: "Monday", time: "08:30", status: "booked" }, // Patient 23
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441539"), patient_id: ObjectId("69c056ef7cf28bd5e4441531"), day: "Monday", time: "11:00", status: "booked" }, // Patient 24
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441539"), patient_id: ObjectId("69c05a007cf28bd5e4441595"), day: "Monday", time: "10:00", status: "booked" }, // Patient 44

  // --- Dr Sara (doctor_id: ...53a) ---
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153a"), patient_id: ObjectId("69c056ef7cf28bd5e4441532"), day: "Sunday", time: "09:00", status: "booked" }, // Patient 25
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153a"), patient_id: ObjectId("69c056ef7cf28bd5e4441533"), day: "Sunday", time: "10:00", status: "booked" }, // Patient 26
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153a"), patient_id: ObjectId("69c05a007cf28bd5e4441596"), day: "Sunday", time: "10:00", status: "booked" }, // Patient 45
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153a"), patient_id: ObjectId("69c05a007cf28bd5e4441597"), day: "Wednesday", time: "13:00", status: "booked" }, // Patient 46

  // --- Dr Mahmoud (doctor_id: ...53b) ---
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153b"), patient_id: ObjectId("69c056ef7cf28bd5e4441534"), day: "Tuesday", time: "11:00", status: "booked" }, // Patient 27
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153b"), patient_id: ObjectId("69c056ef7cf28bd5e4441535"), day: "Tuesday", time: "01:00", status: "booked" }, // Patient 28

  // --- Dr Ali (doctor_id: ...53c) ---
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153c"), patient_id: ObjectId("69c056ef7cf28bd5e4441536"), day: "Thursday", time: "10:30", status: "booked" }, // Patient 29
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153c"), patient_id: ObjectId("69c056ef7cf28bd5e4441537"), day: "Thursday", time: "12:00", status: "booked" }, // Patient 30
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153c"), patient_id: ObjectId("69c05a007cf28bd5e4441598"), day: "Tuesday", time: "09:30", status: "booked" }, // Patient 47
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153c"), patient_id: ObjectId("69c05a007cf28bd5e4441599"), day: "Thursday", time: "11:00", status: "booked" }, // Patient 48

  // --- Dr Fatma (doctor_id: ...53d) ---
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153d"), patient_id: ObjectId("69c056ef7cf28bd5e4441538"), day: "Monday", time: "09:30", status: "booked" }, // Patient 31
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153d"), patient_id: ObjectId("69c056ef7cf28bd5e4441539"), day: "Monday", time: "11:45", status: "booked" }, // Patient 32
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153d"), patient_id: ObjectId("69c05a007cf28bd5e444159a"), day: "Wednesday", time: "10:45", status: "booked" }, // Patient 49

  // --- Dr Hassan (doctor_id: ...53e) ---
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153e"), patient_id: ObjectId("69c056ef7cf28bd5e444153a"), day: "Thursday", time: "08:30", status: "booked" }, // Patient 33
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153e"), patient_id: ObjectId("69c056ef7cf28bd5e444153b"), day: "Thursday", time: "10:00", status: "booked" }, // Patient 34
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153e"), patient_id: ObjectId("69c05a007cf28bd5e444159b"), day: "Monday", time: "11:30", status: "booked" }, // Patient 50

  // --- Dr Mona (doctor_id: ...53f) ---
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153f"), patient_id: ObjectId("69c056ef7cf28bd5e444153c"), day: "Wednesday", time: "11:00", status: "booked" }, // Patient 35
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153f"), patient_id: ObjectId("69c056ef7cf28bd5e444153d"), day: "Wednesday", time: "01:00", status: "booked" }, // Patient 36

  // --- Dr Khaled (doctor_id: ...540) ---
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441540"), patient_id: ObjectId("69c056ef7cf28bd5e444153e"), day: "Sunday", time: "10:30", status: "booked" }, // Patient 37
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441540"), patient_id: ObjectId("69c056ef7cf28bd5e444153f"), day: "Sunday", time: "12:00", status: "booked" }, // Patient 38

  // --- Dr Laila (doctor_id: ...541) ---
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441541"), patient_id: ObjectId("69c056ef7cf28bd5e4441540"), day: "Monday", time: "09:00", status: "booked" }, // Patient 39
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441541"), patient_id: ObjectId("69c056ef7cf28bd5e4441541"), day: "Monday", time: "10:30", status: "booked" }  // Patient 40
]);

// ==========================================
// medical rep(Users)
// ==========================================
db.users.insertMany([
  { "_id": 11, "name": "Ahmed Tarek", "email": "ahmed.tarek@advocure.com", "password": "ahmed", "role": "medical rep" },
  { "_id": 12, "name": "Sara Samir", "email": "sara.samir@marvelpharma.com", "password": "sara", "role": "medical rep" },
  { "_id": 13, "name": "Mostafa Mahmoud", "email": "mostafa.mahmoud@rameda.com", "password": "mostafa", "role": "medical rep" },
  { "_id": 14, "name": "Noha Kamal", "email": "noha.kamal@liptis.com", "password": "noha", "role": "medical rep" },
  { "_id": 15, "name": "Omar Youssef", "email": "omar.youssef@utopia.com", "password": "omar", "role": "medical rep" },
  { "_id": 16, "name": "Dina Magdy", "email": "dina.magdy@copad.com", "password": "dina", "role": "medical rep" },
  { "_id": 17, "name": "Karim Hassan", "email": "karim.hassan@rameda.com", "password": "karim", "role": "medical rep" },
  { "_id": 18, "name": "Reem Nabil", "email": "reem.nabil@liptis.com", "password": "reem", "role": "medical rep" },
  { "_id": 19, "name": "Hany Adel", "email": "hany.adel@utopia.com", "password": "hany", "role": "medical rep" },
  { "_id": 20, "name": "Mai Shawky", "email": "mai.shawky@copad.com", "password": "mai", "role": "medical rep" }
]);

// ==========================================
// medical rep
// ==========================================
db.medical_reps.insertMany([
  { "user_id": 11, "company_name": "Advocure", "company_phone": "01011111111", "drug_specialty": "Cardiology", "phone": "01220000001" },
  { "user_id": 12, "company_name": "Marvel Pharma", "company_phone": "01022222222", "drug_specialty": "Dermatology", "phone": "01220000002" },
  { "user_id": 13, "company_name": "Rameda", "company_phone": "01033333333", "drug_specialty": "Pediatrics", "phone": "01220000003" },
  { "user_id": 14, "company_name": "Liptis", "company_phone": "01044444444", "drug_specialty": "Orthopedics", "phone": "01220000004" },
  { "user_id": 15, "company_name": "Utopia", "company_phone": "01055555555", "drug_specialty": "Neurology", "phone": "01220000005" },
  { "user_id": 16, "company_name": "Copad", "company_phone": "01066666666", "drug_specialty": "Ophthalmology", "phone": "01220000006" },
  { "user_id": 17, "company_name": "Rameda", "company_phone": "01077777777", "drug_specialty": "Dentistry", "phone": "01220000007" },
  { "user_id": 18, "company_name": "Liptis", "company_phone": "01088888888", "drug_specialty": "Psychiatry", "phone": "01220000008" },
  { "user_id": 19, "company_name": "Utopia", "company_phone": "01099999999", "drug_specialty": "General Surgery", "phone": "01220000009" },
  { "user_id": 20, "company_name": "Copad", "company_phone": "01010101010", "drug_specialty": "Gynecology", "phone": "01220000010" }
]);


// ==========================================
//  (rep_visits)
// ==========================================
db.rep_visits.insertMany([
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-01-01T13:32:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 5, "duration_min": 22, "discussion_topic": "Women’s health", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441539"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153f"),
    "date": ISODate("2025-01-01T13:46:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 1, "duration_min": 31, "discussion_topic": "Pediatric vaccine", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153d"),
    "rep_id": ObjectId("69b813ffe1271f5d75441543"),
    "date": ISODate("2025-01-01T13:29:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 6, "duration_min": 24, "discussion_topic": "Orthopedic device", "feedback": "Doctor showed interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153f"),
    "rep_id": ObjectId("69b813ffe1271f5d75441545"),
    "date": ISODate("2025-01-01T15:11:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 3, "duration_min": 27, "discussion_topic": "Dental product", "feedback": "Doctor requested literature" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-01-02T13:14:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 2, "duration_min": 14, "discussion_topic": "Cardio drug", "feedback": "Doctor showed interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-01-02T14:25:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 2, "duration_min": 20, "discussion_topic": "Cardio drug", "feedback": "Doctor requested more samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153b"),
    "rep_id": ObjectId("69b813ffe1271f5d75441541"),
    "date": ISODate("2025-01-02T13:20:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 5, "duration_min": 19, "discussion_topic": "Psychiatry", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441540"),
    "rep_id": ObjectId("69b813ffe1271f5d75441546"),
    "date": ISODate("2025-01-05T14:07:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 3, "duration_min": 34, "discussion_topic": "Neurology", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441538"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153e"),
    "date": ISODate("2025-01-05T13:21:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 3, "duration_min": 18, "discussion_topic": "Pediatric vaccine", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-01-06T12:22:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 0, "duration_min": 28, "discussion_topic": "Psychiatry", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441539"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153f"),
    "date": ISODate("2025-01-06T13:16:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 0, "duration_min": 22, "discussion_topic": "Pediatric vaccine", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153a"),
    "rep_id": ObjectId("69b813ffe1271f5d75441540"),
    "date": ISODate("2025-01-06T11:44:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 6, "duration_min": 19, "discussion_topic": "Orthopedic device", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-01-06T14:40:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 6, "duration_min": 26, "discussion_topic": "Pediatric vaccine", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441538"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153e"),
    "date": ISODate("2025-01-07T14:53:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 3, "duration_min": 27, "discussion_topic": "Dental product", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153b"),
    "rep_id": ObjectId("69b813ffe1271f5d75441541"),
    "date": ISODate("2025-01-07T15:50:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 1, "duration_min": 10, "discussion_topic": "Neurology", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-01-07T13:49:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 2, "duration_min": 27, "discussion_topic": "Pediatric vaccine", "feedback": "Doctor requested literature" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153f"),
    "rep_id": ObjectId("69b813ffe1271f5d75441545"),
    "date": ISODate("2025-01-08T15:41:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 0, "duration_min": 31, "discussion_topic": "Neurology", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153a"),
    "rep_id": ObjectId("69b813ffe1271f5d75441540"),
    "date": ISODate("2025-01-08T15:51:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 6, "duration_min": 16, "discussion_topic": "Orthopedic device", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153d"),
    "rep_id": ObjectId("69b813ffe1271f5d75441543"),
    "date": ISODate("2025-01-08T13:16:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 5, "duration_min": 17, "discussion_topic": "Cardio drug", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-01-08T13:38:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 3, "duration_min": 32, "discussion_topic": "Dental product", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441539"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153f"),
    "date": ISODate("2025-01-08T13:59:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 1, "duration_min": 18, "discussion_topic": "Cardio drug", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-01-09T13:11:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 1, "duration_min": 29, "discussion_topic": "Dental product", "feedback": "Doctor showed interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-01-12T11:42:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 3, "duration_min": 6, "discussion_topic": "Cardio drug", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-01-12T14:32:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 0, "duration_min": 17, "discussion_topic": "Cardio drug", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441540"),
    "rep_id": ObjectId("69b813ffe1271f5d75441546"),
    "date": ISODate("2025-01-12T14:01:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 0, "duration_min": 9, "discussion_topic": "Surgery tools", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153a"),
    "rep_id": ObjectId("69b813ffe1271f5d75441540"),
    "date": ISODate("2025-01-12T12:36:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 5, "duration_min": 21, "discussion_topic": "Orthopedic device", "feedback": "Doctor requested literature" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441538"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153e"),
    "date": ISODate("2025-01-12T13:45:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 0, "duration_min": 28, "discussion_topic": "Dermatology", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-01-13T14:14:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 0, "duration_min": 26, "discussion_topic": "Neurology", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153a"),
    "rep_id": ObjectId("69b813ffe1271f5d75441540"),
    "date": ISODate("2025-01-13T12:15:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 1, "duration_min": 5, "discussion_topic": "Psychiatry", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441539"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153f"),
    "date": ISODate("2025-01-13T13:20:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 6, "duration_min": 17, "discussion_topic": "Ophthalmology", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153d"),
    "rep_id": ObjectId("69b813ffe1271f5d75441543"),
    "date": ISODate("2025-01-13T14:38:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 4, "duration_min": 34, "discussion_topic": "Neurology", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-01-13T12:13:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 4, "duration_min": 15, "discussion_topic": "Surgery tools", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441538"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153e"),
    "date": ISODate("2025-01-14T14:21:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 4, "duration_min": 34, "discussion_topic": "Neurology", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153b"),
    "rep_id": ObjectId("69b813ffe1271f5d75441541"),
    "date": ISODate("2025-01-14T15:24:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 4, "duration_min": 21, "discussion_topic": "Dermatology", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-01-14T13:27:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 4, "duration_min": 5, "discussion_topic": "Pediatric vaccine", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153d"),
    "rep_id": ObjectId("69b813ffe1271f5d75441543"),
    "date": ISODate("2025-01-15T13:21:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 3, "duration_min": 13, "discussion_topic": "Neurology", "feedback": "Doctor showed interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153f"),
    "rep_id": ObjectId("69b813ffe1271f5d75441545"),
    "date": ISODate("2025-01-15T15:57:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 5, "duration_min": 15, "discussion_topic": "Pediatric vaccine", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-01-15T13:23:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 6, "duration_min": 37, "discussion_topic": "Orthopedic device", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441539"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153f"),
    "date": ISODate("2025-01-15T13:38:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 0, "duration_min": 39, "discussion_topic": "Ophthalmology", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153b"),
    "rep_id": ObjectId("69b813ffe1271f5d75441541"),
    "date": ISODate("2025-01-16T13:07:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 6, "duration_min": 13, "discussion_topic": "Dermatology", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-01-16T13:53:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 6, "duration_min": 10, "discussion_topic": "Psychiatry", "feedback": "Doctor requested literature" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-01-16T15:16:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 2, "duration_min": 10, "discussion_topic": "Dental product", "feedback": "Doctor showed interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-01-16T14:06:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 4, "duration_min": 7, "discussion_topic": "Cardio drug", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-01-19T14:32:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 1, "duration_min": 20, "discussion_topic": "Dental product", "feedback": "Doctor requested literature" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441538"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153e"),
    "date": ISODate("2025-01-19T13:57:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 4, "duration_min": 8, "discussion_topic": "Dental product", "feedback": "Doctor requested more samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153a"),
    "rep_id": ObjectId("69b813ffe1271f5d75441540"),
    "date": ISODate("2025-01-19T12:13:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 3, "duration_min": 27, "discussion_topic": "Ophthalmology", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441540"),
    "rep_id": ObjectId("69b813ffe1271f5d75441546"),
    "date": ISODate("2025-01-19T14:39:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 6, "duration_min": 31, "discussion_topic": "Pediatric vaccine", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-01-19T12:27:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 6, "duration_min": 20, "discussion_topic": "Dental product", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-01-20T14:34:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 3, "duration_min": 13, "discussion_topic": "Orthopedic device", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-01-20T12:16:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 2, "duration_min": 37, "discussion_topic": "Cardio drug", "feedback": "Doctor requested more samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153f"),
    "rep_id": ObjectId("69b813ffe1271f5d75441545"),
    "date": ISODate("2025-01-21T13:35:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 6, "duration_min": 40, "discussion_topic": "Surgery tools", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153b"),
    "rep_id": ObjectId("69b813ffe1271f5d75441541"),
    "date": ISODate("2025-01-21T15:45:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 4, "duration_min": 11, "discussion_topic": "Pediatric vaccine", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441538"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153e"),
    "date": ISODate("2025-01-21T14:50:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 2, "duration_min": 15, "discussion_topic": "Dental product", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153f"),
    "rep_id": ObjectId("69b813ffe1271f5d75441545"),
    "date": ISODate("2025-01-22T15:06:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 6, "duration_min": 20, "discussion_topic": "Surgery tools", "feedback": "Doctor requested literature" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-01-22T13:18:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 0, "duration_min": 25, "discussion_topic": "Dermatology", "feedback": "Doctor requested literature" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441539"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153f"),
    "date": ISODate("2025-01-22T13:08:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 5, "duration_min": 33, "discussion_topic": "Women’s health", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153d"),
    "rep_id": ObjectId("69b813ffe1271f5d75441543"),
    "date": ISODate("2025-01-22T13:33:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 3, "duration_min": 14, "discussion_topic": "Ophthalmology", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-01-23T13:13:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 6, "duration_min": 16, "discussion_topic": "Cardio drug", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-01-23T14:11:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 0, "duration_min": 15, "discussion_topic": "Dermatology", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441540"),
    "rep_id": ObjectId("69b813ffe1271f5d75441546"),
    "date": ISODate("2025-01-23T14:48:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 0, "duration_min": 10, "discussion_topic": "Neurology", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153a"),
    "rep_id": ObjectId("69b813ffe1271f5d75441540"),
    "date": ISODate("2025-01-23T12:00:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 5, "duration_min": 29, "discussion_topic": "Cardio drug", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153d"),
    "rep_id": ObjectId("69b813ffe1271f5d75441543"),
    "date": ISODate("2025-01-23T13:33:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 1, "duration_min": 25, "discussion_topic": "Women’s health", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-01-26T14:52:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 1, "duration_min": 16, "discussion_topic": "Orthopedic device", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441538"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153e"),
    "date": ISODate("2025-01-26T13:28:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 3, "duration_min": 33, "discussion_topic": "Ophthalmology", "feedback": "Doctor showed interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153d"),
    "rep_id": ObjectId("69b813ffe1271f5d75441543"),
    "date": ISODate("2025-01-26T14:14:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 6, "duration_min": 25, "discussion_topic": "Orthopedic device", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441539"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153f"),
    "date": ISODate("2025-01-26T13:41:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 2, "duration_min": 37, "discussion_topic": "Neurology", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441540"),
    "rep_id": ObjectId("69b813ffe1271f5d75441546"),
    "date": ISODate("2025-01-27T14:15:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 1, "duration_min": 5, "discussion_topic": "Dermatology", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153a"),
    "rep_id": ObjectId("69b813ffe1271f5d75441540"),
    "date": ISODate("2025-01-27T12:08:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 1, "duration_min": 17, "discussion_topic": "Dental product", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-01-27T13:40:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 1, "duration_min": 11, "discussion_topic": "Pediatric vaccine", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153b"),
    "rep_id": ObjectId("69b813ffe1271f5d75441541"),
    "date": ISODate("2025-01-27T13:25:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 6, "duration_min": 31, "discussion_topic": "Psychiatry", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441539"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153f"),
    "date": ISODate("2025-01-27T13:23:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 0, "duration_min": 25, "discussion_topic": "Ophthalmology", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-01-28T14:48:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 5, "duration_min": 11, "discussion_topic": "Neurology", "feedback": "Doctor shown interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-01-28T14:15:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 0, "duration_min": 15, "discussion_topic": "Surgery tools", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-01-28T13:58:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 6, "duration_min": 24, "discussion_topic": "Cardio drug", "feedback": "Doctor showed interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441538"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153e"),
    "date": ISODate("2025-01-28T13:06:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 5, "duration_min": 28, "discussion_topic": "Women’s health", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441540"),
    "rep_id": ObjectId("69b813ffe1271f5d75441546"),
    "date": ISODate("2025-01-29T14:43:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 4, "duration_min": 35, "discussion_topic": "Dermatology", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153a"),
    "rep_id": ObjectId("69b813ffe1271f5d75441540"),
    "date": ISODate("2025-01-29T11:45:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 2, "duration_min": 36, "discussion_topic": "Surgery tools", "feedback": "Doctor showed interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-01-29T13:17:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 1, "duration_min": 18, "discussion_topic": "Women’s health", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-01-30T13:42:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 2, "duration_min": 21, "discussion_topic": "Psychiatry", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153b"),
    "rep_id": ObjectId("69b813ffe1271f5d75441541"),
    "date": ISODate("2025-01-30T13:58:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 1, "duration_min": 17, "discussion_topic": "Orthopedic device", "feedback": "Doctor Showed Interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153f"),
    "rep_id": ObjectId("69b813ffe1271f5d75441545"),
    "date": ISODate("2025-01-30T15:21:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 5, "duration_min": 36, "discussion_topic": "Neurology", "feedback": "Doctor Showed Interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441539"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153f"),
    "date": ISODate("2025-01-30T13:50:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 3, "duration_min": 14, "discussion_topic": "Orthopedic device", "feedback": "Doctor showed interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153d"),
    "rep_id": ObjectId("69b813ffe1271f5d75441543"),
    "date": ISODate("2025-02-02T14:47:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 4, "duration_min": 25, "discussion_topic": "Women’s health", "feedback": "Doctor Showed Interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441538"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153e"),
    "date": ISODate("2025-02-02T13:31:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 5, "duration_min": 34, "discussion_topic": "Cardio drug", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153a"),
    "rep_id": ObjectId("69b813ffe1271f5d75441540"),
    "date": ISODate("2025-02-02T11:43:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 3, "duration_min": 14, "discussion_topic": "Psychiatry", "feedback": "Doctor requested literature" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-02-02T13:30:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 4, "duration_min": 28, "discussion_topic": "Ophthalmology", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441540"),
    "rep_id": ObjectId("69b813ffe1271f5d75441546"),
    "date": ISODate("2025-02-02T14:04:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 2, "duration_min": 6, "discussion_topic": "Surgery tools", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153b"),
    "rep_id": ObjectId("69b813ffe1271f5d75441541"),
    "date": ISODate("2025-02-03T13:30:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 6, "duration_min": 33, "discussion_topic": "Orthopedic device", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153d"),
    "rep_id": ObjectId("69b813ffe1271f5d75441543"),
    "date": ISODate("2025-02-03T14:49:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 5, "duration_min": 16, "discussion_topic": "Women’s health", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441539"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153f"),
    "date": ISODate("2025-02-03T13:46:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 6, "duration_min": 6, "discussion_topic": "Dermatology", "feedback": "Doctor requested more samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-02-03T13:08:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 0, "duration_min": 34, "discussion_topic": "Psychiatry", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-02-03T12:08:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 0, "duration_min": 21, "discussion_topic": "Cardio drug", "feedback": "Doctor Showed Interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-02-04T13:04:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 2, "duration_min": 33, "discussion_topic": "Pediatric vaccine", "feedback": "Doctor unavailable" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441538"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153e"),
    "date": ISODate("2025-02-04T13:46:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 5, "duration_min": 26, "discussion_topic": "Orthopedic device", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441540"),
    "rep_id": ObjectId("69b813ffe1271f5d75441546"),
    "date": ISODate("2025-02-04T14:38:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 5, "duration_min": 40, "discussion_topic": "Neurology", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153a"),
    "rep_id": ObjectId("69b813ffe1271f5d75441540"),
    "date": ISODate("2025-02-05T15:45:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 4, "duration_min": 12, "discussion_topic": "Cardio drug", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153d"),
    "rep_id": ObjectId("69b813ffe1271f5d75441543"),
    "date": ISODate("2025-02-05T13:21:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 1, "duration_min": 23, "discussion_topic": "Women’s health", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153b"),
    "rep_id": ObjectId("69b813ffe1271f5d75441541"),
    "date": ISODate("2025-02-05T13:58:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 2, "duration_min": 35, "discussion_topic": "Surgery tools", "feedback": "Doctor requested literature" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441539"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153f"),
    "date": ISODate("2025-02-05T13:27:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 4, "duration_min": 16, "discussion_topic": "Dental product", "feedback": "Doctor Showed Interest" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153f"),
    "rep_id": ObjectId("69b813ffe1271f5d75441545"),
    "date": ISODate("2025-02-05T15:00:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 0, "duration_min": 35, "discussion_topic": "Ophthalmology", "feedback": "Reschedule requested" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153c"),
    "rep_id": ObjectId("69b813ffe1271f5d75441542"),
    "date": ISODate("2025-02-06T13:25:00.000Z"),
    "status": "no-show",
    "visit_summary": { "samples": 3, "duration_min": 34, "discussion_topic": "Psychiatry", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441541"),
    "rep_id": ObjectId("69b813ffe1271f5d75441547"),
    "date": ISODate("2025-02-06T12:00:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 0, "duration_min": 24, "discussion_topic": "Women’s health", "feedback": "Doctor accepted samples" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441538"),
    "rep_id": ObjectId("69b813ffe1271f5d7544153e"),
    "date": ISODate("2025-02-06T13:58:00.000Z"),
    "status": "completed",
    "visit_summary": { "samples": 5, "duration_min": 36, "discussion_topic": "Orthopedic device", "feedback": "Clinic postponed" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd441540"),
    "rep_id": ObjectId("69b813ffe1271f5d75441546"),
    "date": ISODate("2025-02-06T14:40:00.000Z"),
    "status": "cancelled",
    "visit_summary": { "samples": 2, "duration_min": 17, "discussion_topic": "Neurology", "feedback": "Clinic cancelled" }
  },
  {
    "doctor_id": ObjectId("69b80bbcc8dadb5abd44153e"),
    "rep_id": ObjectId("69b813ffe1271f5d75441544"),
    "date": ISODate("2025-02-06T13:21:00.000Z"),
    "status": "rescheduled",
    "visit_summary": { "samples": 1, "duration_min": 14, "discussion_topic": "Women’s health", "feedback": "Clinic cancelled" }
  }
]);

// ==========================================
//  Doctor Weekly Schedules (Schedules Collection)
// ==========================================
db.Schedules.insertMany([
  // Doctor 1 → Sunday, Tuesday, Thursday
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441538"), day: "Sunday", patient_start_time: "08:00", patient_end_time: "12:00", rep_start_time: "13:00", rep_end_time: "15:00", max_patients: 20, max_reps: 5 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441538"), day: "Tuesday", patient_start_time: "09:00", patient_end_time: "13:00", rep_start_time: "14:00", rep_end_time: "16:00", max_patients: 18, max_reps: 4 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441538"), day: "Thursday", patient_start_time: "10:00", patient_end_time: "14:00", rep_start_time: "15:00", rep_end_time: "17:00", max_patients: 15, max_reps: 3 },

  // Doctor 2 → Monday, Wednesday
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441539"), day: "Monday", patient_start_time: "08:00", patient_end_time: "12:00", rep_start_time: "13:00", rep_end_time: "15:00", max_patients: 20, max_reps: 5 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441539"), day: "Wednesday", patient_start_time: "09:00", patient_end_time: "12:00", rep_start_time: "13:00", rep_end_time: "15:00", max_patients: 12, max_reps: 3 },

  // Doctor 3 → Sunday, Monday, Wednesday
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153a"), day: "Sunday", patient_start_time: "08:30", patient_end_time: "11:30", rep_start_time: "12:00", rep_end_time: "14:00", max_patients: 25, max_reps: 6 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153a"), day: "Monday", patient_start_time: "08:00", patient_end_time: "11:00", rep_start_time: "11:30", rep_end_time: "13:30", max_patients: 20, max_reps: 5 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153a"), day: "Wednesday", patient_start_time: "11:00", patient_end_time: "14:00", rep_start_time: "15:00", rep_end_time: "17:00", max_patients: 10, max_reps: 2 },

  // Doctor 4 → Tuesday, Thursday
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153b"), day: "Tuesday", patient_start_time: "10:00", patient_end_time: "14:00", rep_start_time: "15:00", rep_end_time: "17:00", max_patients: 15, max_reps: 3 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153b"), day: "Thursday", patient_start_time: "09:00", patient_end_time: "12:00", rep_start_time: "13:00", rep_end_time: "15:00", max_patients: 18, max_reps: 5 },

  // Doctor 5 → Sunday, Tuesday, Thursday
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153c"), day: "Sunday", patient_start_time: "09:00", patient_end_time: "13:00", rep_start_time: "14:00", rep_end_time: "16:00", max_patients: 18, max_reps: 4 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153c"), day: "Tuesday", patient_start_time: "08:00", patient_end_time: "12:00", rep_start_time: "13:00", rep_end_time: "15:00", max_patients: 16, max_reps: 4 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153c"), day: "Thursday", patient_start_time: "10:00", patient_end_time: "13:00", rep_start_time: "14:00", rep_end_time: "16:00", max_patients: 22, max_reps: 4 },

  // Doctor 6 → Monday, Wednesday
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153d"), day: "Monday", patient_start_time: "09:00", patient_end_time: "13:00", rep_start_time: "14:00", rep_end_time: "16:00", max_patients: 18, max_reps: 4 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153d"), day: "Wednesday", patient_start_time: "08:00", patient_end_time: "12:00", rep_start_time: "13:00", rep_end_time: "15:00", max_patients: 20, max_reps: 5 },

  // Doctor 7 → Sunday, Monday, Thursday
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153e"), day: "Sunday", patient_start_time: "08:00", patient_end_time: "11:00", rep_start_time: "11:30", rep_end_time: "13:30", max_patients: 20, max_reps: 5 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153e"), day: "Monday", patient_start_time: "10:00", patient_end_time: "13:00", rep_start_time: "14:00", rep_end_time: "16:00", max_patients: 22, max_reps: 4 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153e"), day: "Thursday", patient_start_time: "08:00", patient_end_time: "12:00", rep_start_time: "13:00", rep_end_time: "15:00", max_patients: 20, max_reps: 5 },

  // Doctor 8 → Tuesday, Wednesday
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153f"), day: "Tuesday", patient_start_time: "09:00", patient_end_time: "12:00", rep_start_time: "13:00", rep_end_time: "15:00", max_patients: 18, max_reps: 5 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd44153f"), day: "Wednesday", patient_start_time: "10:00", patient_end_time: "14:00", rep_start_time: "15:00", rep_end_time: "17:00", max_patients: 15, max_reps: 3 },

  // Doctor 9 → Sunday, Tuesday
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441540"), day: "Sunday", patient_start_time: "10:00", patient_end_time: "13:00", rep_start_time: "14:00", rep_end_time: "16:00", max_patients: 22, max_reps: 4 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441540"), day: "Tuesday", patient_start_time: "08:00", patient_end_time: "11:00", rep_start_time: "11:30", rep_end_time: "13:30", max_patients: 20, max_reps: 5 },

  // Doctor 10 → Monday, Wednesday, Thursday
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441541"), day: "Monday", patient_start_time: "08:30", patient_end_time: "11:30", rep_start_time: "12:00", rep_end_time: "14:00", max_patients: 25, max_reps: 6 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441541"), day: "Wednesday", patient_start_time: "09:00", patient_end_time: "12:00", rep_start_time: "13:00", rep_end_time: "15:00", max_patients: 12, max_reps: 3 },
  { doctor_id: ObjectId("69b80bbcc8dadb5abd441541"), day: "Thursday", patient_start_time: "11:00", patient_end_time: "14:00", rep_start_time: "15:00", rep_end_time: "17:00", max_patients: 10, max_reps: 2 }
]);

// ==========================================
//  Specific Clinic Exceptions (clinic_days Collection)
// ==========================================
db.clinic_days.insertMany([
  { date: ISODate("2025-01-01"), is_open: false, reason: "New Year's Day", doctor_id: ObjectId("69b80bbcc8dadb5abd441538") },
  { date: ISODate("2025-01-07"), is_open: false, reason: "Coptic Christmas", doctor_id: ObjectId("69b80bbcc8dadb5abd441539") },
  { date: ISODate("2025-04-20"), is_open: false, reason: "Easter Sunday", doctor_id: ObjectId("69b80bbcc8dadb5abd44153a") },
  { date: ISODate("2025-06-30"), is_open: false, reason: "Clinic Annual Maintenance", doctor_id: ObjectId("69b80bbcc8dadb5abd44153b") },
  { date: ISODate("2025-07-23"), is_open: false, reason: "Revolution Day", doctor_id: ObjectId("69b80bbcc8dadb5abd44153c") },
  { date: ISODate("2025-03-10"), is_open: false, reason: "Doctor on Leave", doctor_id: ObjectId("69b80bbcc8dadb5abd44153d") },
  { date: ISODate("2025-05-15"), is_open: false, reason: "Emergency Closure", doctor_id: ObjectId("69b80bbcc8dadb5abd44153e") },
  { date: ISODate("2025-08-10"), is_open: false, reason: "Public Holiday", doctor_id: ObjectId("69b80bbcc8dadb5abd44153f") },
  { date: ISODate("2025-09-22"), is_open: false, reason: "Clinic Maintenance", doctor_id: ObjectId("69b80bbcc8dadb5abd441540") },
  { date: ISODate("2025-11-05"), is_open: false, reason: "Doctor on Leave", doctor_id: ObjectId("69b80bbcc8dadb5abd441541") }
]);
// ==========================================
// Database Commands
// ==========================================
db.users.find();
db.patients.find();
db.doctors.find();
db.Schedules.find();
db.appointments.find();
db.rep_visits.find();