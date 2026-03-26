//users
db.createCollection("users")
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


db.users.find()
db.users.find({ role: "doctor" })


//doctors
db.createCollection("doctors")
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

db.doctors.find()

db.doctors.aggregate([
{
 $lookup: {
   from: "users",
   localField: "user_id",
   foreignField: "_id",
   as: "doctor_info"
 }
}
])



db.doctors.aggregate([
{
 $lookup: {
   from: "users",
   localField: "user_id",
   foreignField: "_id",
   as: "doctor_info"
 }
},
{
 $unwind: "$doctor_info"
},
{
 $project: {
   doctor_name: "$doctor_info.name",
   specialization: 1,
   clinic_name: 1,
   consultation_fee: 1
 }
}
])



db.users.createIndex({ email: 1 }, { unique: true })
db.users.getIndexes()




