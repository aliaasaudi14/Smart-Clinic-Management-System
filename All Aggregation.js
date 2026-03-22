// ==========================================
// 1-Count total doctors per specialization
// ==========================================
db.doctors.aggregate([
  {
    $group: {
      _id: "$specialization",
      total_doctors: { $sum: 1 }
    }
  }
]);
// ==========================================
// 2-Combine doctor info with total patients 
// ==========================================
db.doctors.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "doctor_info"
    }
  },
  { $unwind: "$doctor_info" },
  {
    $lookup: {
      from: "appointments",
      localField: "_id",  
      foreignField: "doctor_id",
      as: "appointments"
    }
  },
  {
    $addFields: {
      total_patients: { $size: "$appointments" }
    }
  },
  {
    $project: {
      _id: 0,
      doctor_name: "$doctor_info.name",
      specialization: 1,
      total_patients: 1
    }
  }
]);
// ==========================================
// 3-Identify low-utilization doctors (Less than 3 patients)
// ==========================================
db.doctors.aggregate([
  {
    $lookup: {
      from: "appointments",
      localField: "_id",  
      foreignField: "doctor_id",
      as: "appointments"
    }
  },
  {
    $addFields: {
      total_patients: { $size: "$appointments" }
    }
  },
  {
    $match: {
      total_patients: { $lt: 3 }
    }
  },
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "doctor_info"
    }
  },
  { $unwind: "$doctor_info" },
  {
    $project: {
      _id: 0,
      doctor_name: "$doctor_info.name",
      specialization: 1,
      total_patients: 1
    }
  }
]);

// ==========================================
// 7-Total Rep Visits per Day
// ==========================================
db.rep_visits.aggregate([
  { $match: { date: { $exists: true, $ne: null } } },
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: { $toDate: "$date" } } },
      totalVisits: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);
// ==========================================
// 8-Most active medical rep (Highest number of visits) 
// ==========================================

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
      _id: 0,
      rep_name: "$user_info.name",
      company: "$rep_info.company_name",
      total_visits: 1
    }
  }
]);

// ==========================================
// 9-Compare total patients vs total rep visits
// ==========================================
db.users.aggregate([
  { $match: { role: "patient" } },
  { $group: { _id: null, total_patients: { $sum: 1 } } },
  {
    $lookup: {
      from: "rep_visits",
      localField: "none",
      foreignField: "none",
      as: "all_visits"
    }
  },
  {
    $project: {
      _id: 0,
      total_patients: 1,
      total_visits: { $size: "$all_visits" }
    }
  }
]);