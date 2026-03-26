show collections
db.users.find()
db.doctors.find()
db.medical_reps.find()



//------ISERT MEDICAL REPS IN USERS COLLECTION------

db.users.insertMany
([
    {"_id":11,
    "name": "Ahmed Tarek",
    "email": "ahmed.tarek@advocure.com",
    "password": "ahmed",
    "role": "medical rep"},
    
    {"_id":12,
    "name": "Sara Samir",
    "email": "sara.samir@marvelpharma.com",
    "password": "sara",
    "role": "medical rep"},
    
    {"_id":13,
    "name": "Mostafa Mahmoud",
    "email": "mostafa.mahmoud@rameda.com",
    "password": "mostafa",
    "role": "medical rep"},
    
    {"_id":14,
    "name": "Noha Kamal",
    "email": "noha.kamal@liptis.com",
    "password": "noha",
    "role": "medical rep"},
    
    {"_id":15,
    "name": "Omar Youssef",
    "email": "omar.youssef@utopia.com",
    "password": "omar",
    "role": "medical rep"},
    
    {"_id":16,
    "name": "Dina Magdy",
    "email": "dina.magdy@copad.com",
    "password": "dina",
    "role": "medical rep"},
    
    {"_id":17,
    "name": "Karim Hassan",
    "email": "karim.hassan@rameda.com",
    "password": "karim",
    "role": "medical rep"},
    
    {"_id":18,
    "name": "Reem Nabil",
    "email": "reem.nabil@liptis.com",
    "password": "reem",
    "role": "medical rep"},
    
    {"_id":19,
    "name": "Hany Adel",
    "email": "hany.adel@utopia.com",
    "password": "hany",
    "role": "medical rep"},
    
    {"_id":20,
    "name": "Mai Shawky",
    "email": "mai.shawky@copad.com",
    "password": "mai",
    "role": "medical rep"}
])

//------CREATION & INSETION MEDICAL REPS COLLECCTION------
db.createCollection("medical_reps")
db.medical_reps.insertMany
([
    {"user_id": 11, "company_name": "Advocure",
    "company_phone": "01011111111", "drug_specialty": "Cardiology",
    "phone": "01220000001"},
    
    {"user_id": 12, "company_name": "Marvel Pharma",
    "company_phone": "01022222222", "drug_specialty": "Dermatology",
    "phone": "01220000002"},
    
    {"user_id": 13, "company_name": "Rameda",
    "company_phone": "01033333333", "drug_specialty": "Pediatrics",
    "phone": "01220000003"},
    
    {"user_id": 14, "company_name": "Liptis",
    "company_phone": "01044444444", "drug_specialty": "Orthopedics",
    "phone": "01220000004"},
    
    {"user_id": 15, "company_name": "Utopia", 
    "company_phone": "01055555555", "drug_specialty": "Neurology", 
    "phone": "01220000005"},
    
    {"user_id": 16, "company_name": "Copad",
    "company_phone": "01066666666", "drug_specialty": "Ophthalmology", 
    "phone": "01220000006"},
    
    {"user_id": 17, "company_name": "Rameda",
    "company_phone": "01077777777", "drug_specialty": "Dentistry", 
    "phone": "01220000007"},
    
    {"user_id": 18, "company_name": "Liptis",
    "company_phone": "01088888888", "drug_specialty": "Psychiatry", 
    "phone": "01220000008"},
    
    {"user_id": 19, "company_name": "Utopia", 
    "company_phone": "01099999999", "drug_specialty": "General Surgery", 
    "phone": "01220000009"},
    
    {"user_id": 20, "company_name": "Copad",
    "company_phone": "01010101010", "drug_specialty": "Gynecology",
    "phone": "01220000010"}
])

