db.appointments.find()
db.patients.find()
db.Schedules.find()
db.clinic_days.find()
db.doctors.find()
db.medical_reps.find()
db.users.find()
db.rep_visits.find()

//-------7️-Total Rep Visits per Day-------//
//---------------------------------------//
db.rep_visits.aggregate([
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: { $toDate: "$date" } } },
      totalRepVisits: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

//-------8️- Most active medical rep-------//
//---------------------------------------//
db.rep_visits.aggregate([

  { $group: { _id: "$rep_id", total_visits: { $sum: 1 } } },

  { $sort: { total_visits: -1 } },
  { $limit: 1 },

  { $addFields: { rep_obj_id: { $toObjectId: "$_id" } } },

  {
    $lookup: {
      from: "medical_reps",
      localField: "rep_obj_id",
      foreignField: "_id",
      as: "rep_info"
    }
  },
  { $unwind: "$rep_info" },

  {
    $lookup: {
      from: "users",
      localField: "rep_info.user_id",
      foreignField: "_id",
      as: "user_info"
    }
  },
  { $unwind: "$user_info" },

  {
    $project: {
      rep_name: "$user_info.name",
      company: "$rep_info.company_name",
      total_visits: 1,
      _id: 0
    }
  }
])


//-------9️- Compare total patients vs rep visits-------//
//----------------------------------------------------//
db.appointments.aggregate([
  { $group: { _id: "$doctor_id", totalPatients: { $sum: 1 } } },
  { $addFields: { doctorIdStr: { $toString: "$_id" } } },
  {
    $lookup: {
      from: "rep_visits",
      localField: "doctorIdStr",
      foreignField: "doctor_id",
      as: "repVisits"
    }
  },
  { $addFields: { totalRepVisits: { $size: "$repVisits" } } },
  {
    $lookup: {
      from: "doctors",
      localField: "_id",
      foreignField: "_id",
      as: "doctor"
    }
  },
  { $unwind: "$doctor" },
  {
    $lookup: {
      from: "users",
      localField: "doctor.user_id",
      foreignField: "_id",
      as: "user"
    }
  },
  { $unwind: "$user" },
  {
    $project: {
      doctorName: "$user.name",
      totalPatients: 1,
      totalRepVisits: 1,
      _id: 0
    }
  }
])


