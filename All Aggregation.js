// ==========================================
// 1-Retrieve Doctors with User Information
// ==========================================
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
// ==========================================
// 2-Get Doctor Profile (Name, Specialization, Clinic & Fee)
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
// ==========================================
// 3-Count total doctors per specialization
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
// 4-Combine doctor info with total patients 
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
// 5-Identify low-utilization doctors (Less than 3 patients)
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
// 6-Count total patients per day
// ==========================================
db.appointments.aggregate([
  {
    $group: {
      _id: "$day",
      total_patients: { $sum: 1 }
    }
  }
])
// ==========================================
// 7-Identify peak day
// ==========================================
db.appointments.aggregate([
  {
    $group: {
      _id: "$day",
      total_patients: { $sum: 1 }
    }
  },
  {
    $sort: { total_patients: -1 }
  },
  {
    $limit: 1
  }
])
// ==========================================
// 8-Identify peak hour
// ==========================================
db.appointments.aggregate([
  {
    $group: {
      _id: "$time",
      total_patients: { $sum: 1 }
    }
  },
  {
    $sort: { total_patients: -1 }
  },
  {
    $limit: 1
  }
])
// ==========================================
// 9-Total Rep Visits per Day
// ==========================================
db.rep_visits.aggregate([
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: { $toDate: "$date" } } },
      totalRepVisits: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])
// ==========================================
// 10-Most active medical rep (Highest number of visits) 
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
      rep_name: "$user_info.name",
      company: "$rep_info.company_name",
      total_visits: 1,
      _id: 0
    }
  }
])
// ==========================================
// 11-Compare total patients vs total rep visits
// ==========================================
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
// ==========================================
// 12-Get Weekly Schedule for a Specific Doctor
// ==========================================
db.Schedules.aggregate([
  {
    $match: { doctor_id: ObjectId("69b80bbcc8dadb5abd441538") }
  },
  {
    $lookup: {
      from: "doctors",
      localField: "doctor_id",
      foreignField: "_id",
      as: "doctor_details"
    }
  }
]);
// ==========================================
// 13-Retrieve Doctor Clinic Days (Closed / Exceptions)
// ==========================================
db.clinic_days.aggregate([
  {
    $match: {
      doctor_id: ObjectId("69b80bbcc8dadb5abd441538")
    }
  },
  {
    $lookup: {
      from: "doctors",
      localField: "doctor_id",
      foreignField: "_id",
      as: "doctor_details"
    }
  }
])

// ==========================================
// 14- Calculate occupancy rate
// ==========================================
db.Schedules.aggregate([
  {
    $group: {
      _id: "$doctor_id",
      total_patient_slots: { $sum: "$max_patients" },
      total_rep_slots: { $sum: "$max_reps" }
    }
  },
  {
    $project: {
      _id: 0,
      doctor_id: "$_id",
      total_patient_slots: 1,
      total_rep_slots: 1,
      total_slots: { $add: ["$total_patient_slots", "$total_rep_slots"] },
      occupancy_rate_patients: {
        $multiply: [
          { $divide: ["$total_patient_slots", { $add: ["$total_patient_slots", "$total_rep_slots"] }] },
          100
        ]
      },
      occupancy_rate_reps: {
        $multiply: [
          { $divide: ["$total_rep_slots", { $add: ["$total_patient_slots", "$total_rep_slots"] }] },
          100
        ]
      }
    }
  },
  {
    $sort: { total_slots: -1 }
  }
])

// ==========================================
// 15-Detect idle days
// ==========================================
db.Schedules.aggregate([
  {
    $group: {
      _id: "$day"
    }
  },
  {
    $group: {
      _id: null,
      working_days: { $push: "$_id" }
    }
  },
  {
    $project: {
      _id: 0,
      working_days: 1,
      idle_days: {
        $setDifference: [
          ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "$working_days"
        ]
      }
    }
  }
])
// ==========================================
// 16-Detect scheduling conflicts
// ==========================================
db.clinic_days.aggregate([
  {
    $match: { is_open: false }
  },
  {
    $addFields: {
      day_name: {
        $switch: {
          branches: [
            { case: { $eq: [{ $dayOfWeek: "$date" }, 1] }, then: "Sunday" },
            { case: { $eq: [{ $dayOfWeek: "$date" }, 2] }, then: "Monday" },
            { case: { $eq: [{ $dayOfWeek: "$date" }, 3] }, then: "Tuesday" },
            { case: { $eq: [{ $dayOfWeek: "$date" }, 4] }, then: "Wednesday" },
            { case: { $eq: [{ $dayOfWeek: "$date" }, 5] }, then: "Thursday" },
            { case: { $eq: [{ $dayOfWeek: "$date" }, 6] }, then: "Friday" },
            { case: { $eq: [{ $dayOfWeek: "$date" }, 7] }, then: "Saturday" }
          ],
          default: "Unknown"
        }
      }
    }
  },
  {
    $lookup: {
      from: "Schedules",
      let: { did: "$doctor_id", dname: "$day_name" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$doctor_id", "$$did"] },
                { $eq: ["$day", "$$dname"] }
              ]
            }
          }
        }
      ],
      as: "conflicting_schedules"
    }
  },
  {
    $match: {
      conflicting_schedules: { $ne: [] }
    }
  },
  {
    $project: {
      _id: 0,
      date: 1,
      day_name: 1,
      doctor_id: 1,
      reason: 1,
      conflicting_schedules: 1
    }
  }
])
