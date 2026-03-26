db.Schedules.find()
db.clinic_days.find()
db.doctors.find()
db.medical_reps.find()
db.users.find()
db.rep_visits.find()


show collections

//--------CREATION OF REP_VISITS COLLECTION --------
db.createCollection("rep_visits")

db.rep_visits.insertMany([
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-01-01T13:32:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 5,
      "duration_min": 22,
      "discussion_topic": "Women’s health",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441539",
    "rep_id": "69b813ffe1271f5d7544153f",
    "date": "2025-01-01T13:46:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 1,
      "duration_min": 31,
      "discussion_topic": "Pediatric vaccine",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153d",
    "rep_id": "69b813ffe1271f5d75441543",
    "date": "2025-01-01T13:29:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 6,
      "duration_min": 24,
      "discussion_topic": "Orthopedic device",
      "feedback": "Doctor showed interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153f",
    "rep_id": "69b813ffe1271f5d75441545",
    "date": "2025-01-01T15:11:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 3,
      "duration_min": 27,
      "discussion_topic": "Dental product",
      "feedback": "Doctor requested literature"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-01-02T13:14:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 2,
      "duration_min": 14,
      "discussion_topic": "Cardio drug",
      "feedback": "Doctor showed interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-01-02T14:25:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 2,
      "duration_min": 20,
      "discussion_topic": "Cardio drug",
      "feedback": "Doctor requested more samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153b",
    "rep_id": "69b813ffe1271f5d75441541",
    "date": "2025-01-02T13:20:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 5,
      "duration_min": 19,
      "discussion_topic": "Psychiatry",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441540",
    "rep_id": "69b813ffe1271f5d75441546",
    "date": "2025-01-05T14:07:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 3,
      "duration_min": 34,
      "discussion_topic": "Neurology",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441538",
    "rep_id": "69b813ffe1271f5d7544153e",
    "date": "2025-01-05T13:21:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 3,
      "duration_min": 18,
      "discussion_topic": "Pediatric vaccine",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-01-06T12:22:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 0,
      "duration_min": 28,
      "discussion_topic": "Psychiatry",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441539",
    "rep_id": "69b813ffe1271f5d7544153f",
    "date": "2025-01-06T13:16:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 0,
      "duration_min": 22,
      "discussion_topic": "Pediatric vaccine",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153a",
    "rep_id": "69b813ffe1271f5d75441540",
    "date": "2025-01-06T11:44:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 6,
      "duration_min": 19,
      "discussion_topic": "Orthopedic device",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-01-06T14:40:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 6,
      "duration_min": 26,
      "discussion_topic": "Pediatric vaccine",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441538",
    "rep_id": "69b813ffe1271f5d7544153e",
    "date": "2025-01-07T14:53:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 3,
      "duration_min": 27,
      "discussion_topic": "Dental product",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153b",
    "rep_id": "69b813ffe1271f5d75441541",
    "date": "2025-01-07T15:50:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 1,
      "duration_min": 10,
      "discussion_topic": "Neurology",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-01-07T13:49:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 2,
      "duration_min": 27,
      "discussion_topic": "Pediatric vaccine",
      "feedback": "Doctor requested literature"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153f",
    "rep_id": "69b813ffe1271f5d75441545",
    "date": "2025-01-08T15:41:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 0,
      "duration_min": 31,
      "discussion_topic": "Neurology",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153a",
    "rep_id": "69b813ffe1271f5d75441540",
    "date": "2025-01-08T15:51:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 6,
      "duration_min": 16,
      "discussion_topic": "Orthopedic device",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153d",
    "rep_id": "69b813ffe1271f5d75441543",
    "date": "2025-01-08T13:16:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 5,
      "duration_min": 17,
      "discussion_topic": "Cardio drug",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-01-08T13:38:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 3,
      "duration_min": 32,
      "discussion_topic": "Dental product",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441539",
    "rep_id": "69b813ffe1271f5d7544153f",
    "date": "2025-01-08T13:59:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 1,
      "duration_min": 18,
      "discussion_topic": "Cardio drug",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-01-09T13:11:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 1,
      "duration_min": 29,
      "discussion_topic": "Dental product",
      "feedback": "Doctor showed interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-01-12T11:42:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 3,
      "duration_min": 6,
      "discussion_topic": "Cardio drug",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-01-12T14:32:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 0,
      "duration_min": 17,
      "discussion_topic": "Cardio drug",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441540",
    "rep_id": "69b813ffe1271f5d75441546",
    "date": "2025-01-12T14:01:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 0,
      "duration_min": 9,
      "discussion_topic": "Surgery tools",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153a",
    "rep_id": "69b813ffe1271f5d75441540",
    "date": "2025-01-12T12:36:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 5,
      "duration_min": 21,
      "discussion_topic": "Orthopedic device",
      "feedback": "Doctor requested literature"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441538",
    "rep_id": "69b813ffe1271f5d7544153e",
    "date": "2025-01-12T13:45:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 0,
      "duration_min": 28,
      "discussion_topic": "Dermatology",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-01-13T14:14:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 0,
      "duration_min": 26,
      "discussion_topic": "Neurology",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153a",
    "rep_id": "69b813ffe1271f5d75441540",
    "date": "2025-01-13T12:15:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 1,
      "duration_min": 5,
      "discussion_topic": "Psychiatry",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441539",
    "rep_id": "69b813ffe1271f5d7544153f",
    "date": "2025-01-13T13:20:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 6,
      "duration_min": 17,
      "discussion_topic": "Ophthalmology",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153d",
    "rep_id": "69b813ffe1271f5d75441543",
    "date": "2025-01-13T14:38:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 4,
      "duration_min": 34,
      "discussion_topic": "Neurology",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-01-13T12:13:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 4,
      "duration_min": 15,
      "discussion_topic": "Surgery tools",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441538",
    "rep_id": "69b813ffe1271f5d7544153e",
    "date": "2025-01-14T14:21:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 4,
      "duration_min": 34,
      "discussion_topic": "Neurology",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153b",
    "rep_id": "69b813ffe1271f5d75441541",
    "date": "2025-01-14T15:24:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 4,
      "duration_min": 21,
      "discussion_topic": "Dermatology",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-01-14T13:27:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 4,
      "duration_min": 5,
      "discussion_topic": "Pediatric vaccine",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153d",
    "rep_id": "69b813ffe1271f5d75441543",
    "date": "2025-01-15T13:21:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 3,
      "duration_min": 13,
      "discussion_topic": "Neurology",
      "feedback": "Doctor showed interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153f",
    "rep_id": "69b813ffe1271f5d75441545",
    "date": "2025-01-15T15:57:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 5,
      "duration_min": 15,
      "discussion_topic": "Pediatric vaccine",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-01-15T13:23:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 6,
      "duration_min": 37,
      "discussion_topic": "Orthopedic device",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441539",
    "rep_id": "69b813ffe1271f5d7544153f",
    "date": "2025-01-15T13:38:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 0,
      "duration_min": 39,
      "discussion_topic": "Ophthalmology",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153b",
    "rep_id": "69b813ffe1271f5d75441541",
    "date": "2025-01-16T13:07:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 6,
      "duration_min": 13,
      "discussion_topic": "Dermatology",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-01-16T13:53:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 6,
      "duration_min": 10,
      "discussion_topic": "Psychiatry",
      "feedback": "Doctor requested literature"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-01-16T15:16:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 2,
      "duration_min": 10,
      "discussion_topic": "Dental product",
      "feedback": "Doctor showed interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-01-16T14:06:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 4,
      "duration_min": 7,
      "discussion_topic": "Cardio drug",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-01-19T14:32:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 1,
      "duration_min": 20,
      "discussion_topic": "Dental product",
      "feedback": "Doctor requested literature"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441538",
    "rep_id": "69b813ffe1271f5d7544153e",
    "date": "2025-01-19T13:57:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 4,
      "duration_min": 8,
      "discussion_topic": "Dental product",
      "feedback": "Doctor requested more samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153a",
    "rep_id": "69b813ffe1271f5d75441540",
    "date": "2025-01-19T12:13:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 3,
      "duration_min": 27,
      "discussion_topic": "Ophthalmology",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441540",
    "rep_id": "69b813ffe1271f5d75441546",
    "date": "2025-01-19T14:39:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 6,
      "duration_min": 31,
      "discussion_topic": "Pediatric vaccine",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-01-19T12:27:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 6,
      "duration_min": 20,
      "discussion_topic": "Dental product",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-01-20T14:34:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 3,
      "duration_min": 13,
      "discussion_topic": "Orthopedic device",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-01-20T12:16:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 2,
      "duration_min": 37,
      "discussion_topic": "Cardio drug",
      "feedback": "Doctor requested more samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153f",
    "rep_id": "69b813ffe1271f5d75441545",
    "date": "2025-01-21T13:35:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 6,
      "duration_min": 40,
      "discussion_topic": "Surgery tools",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153b",
    "rep_id": "69b813ffe1271f5d75441541",
    "date": "2025-01-21T15:45:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 4,
      "duration_min": 11,
      "discussion_topic": "Pediatric vaccine",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441538",
    "rep_id": "69b813ffe1271f5d7544153e",
    "date": "2025-01-21T14:50:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 2,
      "duration_min": 15,
      "discussion_topic": "Dental product",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153f",
    "rep_id": "69b813ffe1271f5d75441545",
    "date": "2025-01-22T15:06:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 6,
      "duration_min": 20,
      "discussion_topic": "Surgery tools",
      "feedback": "Doctor requested literature"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-01-22T13:18:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 0,
      "duration_min": 25,
      "discussion_topic": "Dermatology",
      "feedback": "Doctor requested literature"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441539",
    "rep_id": "69b813ffe1271f5d7544153f",
    "date": "2025-01-22T13:08:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 5,
      "duration_min": 33,
      "discussion_topic": "Women’s health",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153d",
    "rep_id": "69b813ffe1271f5d75441543",
    "date": "2025-01-22T13:33:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 3,
      "duration_min": 14,
      "discussion_topic": "Ophthalmology",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-01-23T13:13:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 6,
      "duration_min": 16,
      "discussion_topic": "Cardio drug",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-01-23T14:11:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 0,
      "duration_min": 15,
      "discussion_topic": "Dermatology",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441540",
    "rep_id": "69b813ffe1271f5d75441546",
    "date": "2025-01-23T14:48:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 0,
      "duration_min": 10,
      "discussion_topic": "Neurology",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153a",
    "rep_id": "69b813ffe1271f5d75441540",
    "date": "2025-01-23T12:00:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 5,
      "duration_min": 29,
      "discussion_topic": "Cardio drug",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153d",
    "rep_id": "69b813ffe1271f5d75441543",
    "date": "2025-01-23T13:33:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 1,
      "duration_min": 25,
      "discussion_topic": "Women’s health",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-01-26T14:52:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 1,
      "duration_min": 16,
      "discussion_topic": "Orthopedic device",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441538",
    "rep_id": "69b813ffe1271f5d7544153e",
    "date": "2025-01-26T13:28:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 3,
      "duration_min": 33,
      "discussion_topic": "Ophthalmology",
      "feedback": "Doctor showed interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153d",
    "rep_id": "69b813ffe1271f5d75441543",
    "date": "2025-01-26T14:14:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 6,
      "duration_min": 25,
      "discussion_topic": "Orthopedic device",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441539",
    "rep_id": "69b813ffe1271f5d7544153f",
    "date": "2025-01-26T13:41:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 2,
      "duration_min": 37,
      "discussion_topic": "Neurology",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441540",
    "rep_id": "69b813ffe1271f5d75441546",
    "date": "2025-01-27T14:15:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 1,
      "duration_min": 5,
      "discussion_topic": "Dermatology",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153a",
    "rep_id": "69b813ffe1271f5d75441540",
    "date": "2025-01-27T12:08:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 1,
      "duration_min": 17,
      "discussion_topic": "Dental product",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-01-27T13:40:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 1,
      "duration_min": 11,
      "discussion_topic": "Pediatric vaccine",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153b",
    "rep_id": "69b813ffe1271f5d75441541",
    "date": "2025-01-27T13:25:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 6,
      "duration_min": 31,
      "discussion_topic": "Psychiatry",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441539",
    "rep_id": "69b813ffe1271f5d7544153f",
    "date": "2025-01-27T13:23:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 0,
      "duration_min": 25,
      "discussion_topic": "Ophthalmology",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-01-28T14:48:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 5,
      "duration_min": 11,
      "discussion_topic": "Neurology",
      "feedback": "Doctor shown interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-01-28T14:15:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 0,
      "duration_min": 15,
      "discussion_topic": "Surgery tools",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-01-28T13:58:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 6,
      "duration_min": 24,
      "discussion_topic": "Cardio drug",
      "feedback": "Doctor showed interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441538",
    "rep_id": "69b813ffe1271f5d7544153e",
    "date": "2025-01-28T13:06:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 5,
      "duration_min": 28,
      "discussion_topic": "Women’s health",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441540",
    "rep_id": "69b813ffe1271f5d75441546",
    "date": "2025-01-29T14:43:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 4,
      "duration_min": 35,
      "discussion_topic": "Dermatology",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153a",
    "rep_id": "69b813ffe1271f5d75441540",
    "date": "2025-01-29T11:45:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 2,
      "duration_min": 36,
      "discussion_topic": "Surgery tools",
      "feedback": "Doctor showed interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-01-29T13:17:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 1,
      "duration_min": 18,
      "discussion_topic": "Women’s health",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-01-30T13:42:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 2,
      "duration_min": 21,
      "discussion_topic": "Psychiatry",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153b",
    "rep_id": "69b813ffe1271f5d75441541",
    "date": "2025-01-30T13:58:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 1,
      "duration_min": 17,
      "discussion_topic": "Orthopedic device",
      "feedback": "Doctor Showed Interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153f",
    "rep_id": "69b813ffe1271f5d75441545",
    "date": "2025-01-30T15:21:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 5,
      "duration_min": 36,
      "discussion_topic": "Neurology",
      "feedback": "Doctor Showed Interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441539",
    "rep_id": "69b813ffe1271f5d7544153f",
    "date": "2025-01-30T13:50:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 3,
      "duration_min": 14,
      "discussion_topic": "Orthopedic device",
      "feedback": "Doctor showed interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153d",
    "rep_id": "69b813ffe1271f5d75441543",
    "date": "2025-02-02T14:47:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 4,
      "duration_min": 25,
      "discussion_topic": "Women’s health",
      "feedback": "Doctor Showed Interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441538",
    "rep_id": "69b813ffe1271f5d7544153e",
    "date": "2025-02-02T13:31:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 5,
      "duration_min": 34,
      "discussion_topic": "Cardio drug",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153a",
    "rep_id": "69b813ffe1271f5d75441540",
    "date": "2025-02-02T11:43:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 3,
      "duration_min": 14,
      "discussion_topic": "Psychiatry",
      "feedback": "Doctor requested literature"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-02-02T13:30:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 4,
      "duration_min": 28,
      "discussion_topic": "Ophthalmology",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441540",
    "rep_id": "69b813ffe1271f5d75441546",
    "date": "2025-02-02T14:04:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 2,
      "duration_min": 6,
      "discussion_topic": "Surgery tools",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153b",
    "rep_id": "69b813ffe1271f5d75441541",
    "date": "2025-02-03T13:30:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 6,
      "duration_min": 33,
      "discussion_topic": "Orthopedic device",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153d",
    "rep_id": "69b813ffe1271f5d75441543",
    "date": "2025-02-03T14:49:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 5,
      "duration_min": 16,
      "discussion_topic": "Women’s health",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441539",
    "rep_id": "69b813ffe1271f5d7544153f",
    "date": "2025-02-03T13:46:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 6,
      "duration_min": 6,
      "discussion_topic": "Dermatology",
      "feedback": "Doctor requested more samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-02-03T13:08:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 0,
      "duration_min": 34,
      "discussion_topic": "Psychiatry",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-02-03T12:08:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 0,
      "duration_min": 21,
      "discussion_topic": "Cardio drug",
      "feedback": "Doctor Showed Interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-02-04T13:04:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 2,
      "duration_min": 33,
      "discussion_topic": "Pediatric vaccine",
      "feedback": "Doctor unavailable"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441538",
    "rep_id": "69b813ffe1271f5d7544153e",
    "date": "2025-02-04T13:46:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 5,
      "duration_min": 26,
      "discussion_topic": "Orthopedic device",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441540",
    "rep_id": "69b813ffe1271f5d75441546",
    "date": "2025-02-04T14:38:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 5,
      "duration_min": 40,
      "discussion_topic": "Neurology",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153a",
    "rep_id": "69b813ffe1271f5d75441540",
    "date": "2025-02-05T15:45:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 4,
      "duration_min": 12,
      "discussion_topic": "Cardio drug",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153d",
    "rep_id": "69b813ffe1271f5d75441543",
    "date": "2025-02-05T13:21:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 1,
      "duration_min": 23,
      "discussion_topic": "Women’s health",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153b",
    "rep_id": "69b813ffe1271f5d75441541",
    "date": "2025-02-05T13:58:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 2,
      "duration_min": 35,
      "discussion_topic": "Surgery tools",
      "feedback": "Doctor requested literature"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441539",
    "rep_id": "69b813ffe1271f5d7544153f",
    "date": "2025-02-05T13:27:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 4,
      "duration_min": 16,
      "discussion_topic": "Dental product",
      "feedback": "Doctor Showed Interest"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153f",
    "rep_id": "69b813ffe1271f5d75441545",
    "date": "2025-02-05T15:00:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 0,
      "duration_min": 35,
      "discussion_topic": "Ophthalmology",
      "feedback": "Reschedule requested"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153c",
    "rep_id": "69b813ffe1271f5d75441542",
    "date": "2025-02-06T13:25:00.000Z",
    "status": "no-show",
    "visit_summary": {
      "samples": 3,
      "duration_min": 34,
      "discussion_topic": "Psychiatry",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441541",
    "rep_id": "69b813ffe1271f5d75441547",
    "date": "2025-02-06T12:00:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 0,
      "duration_min": 24,
      "discussion_topic": "Women’s health",
      "feedback": "Doctor accepted samples"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441538",
    "rep_id": "69b813ffe1271f5d7544153e",
    "date": "2025-02-06T13:58:00.000Z",
    "status": "completed",
    "visit_summary": {
      "samples": 5,
      "duration_min": 36,
      "discussion_topic": "Orthopedic device",
      "feedback": "Clinic postponed"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd441540",
    "rep_id": "69b813ffe1271f5d75441546",
    "date": "2025-02-06T14:40:00.000Z",
    "status": "cancelled",
    "visit_summary": {
      "samples": 2,
      "duration_min": 17,
      "discussion_topic": "Neurology",
      "feedback": "Clinic cancelled"
    }
  },
  {
    "doctor_id": "69b80bbcc8dadb5abd44153e",
    "rep_id": "69b813ffe1271f5d75441544",
    "date": "2025-02-06T13:21:00.000Z",
    "status": "rescheduled",
    "visit_summary": {
      "samples": 1,
      "duration_min": 14,
      "discussion_topic": "Women’s health",
      "feedback": "Clinic cancelled"
    }
  }
])