const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  last_name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please use a valid email",
    ],
  },
});
module.exports = mongoose.model("Teacher", TeacherSchema);
