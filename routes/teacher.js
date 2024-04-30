const express = require("express");

// import all the controllers
const {
  getAllTeacher,
  getOneTeacher,
  createTeacher,
  updateTeacher,
  deleteOneTeacher,
  createManyTeachers,
} = require("../controllers/teacher");

// create a new instance or express router
const api = express.Router();

// decide which controllers to execute on the specific actions
api.route("/").get(getAllTeacher).post(createTeacher).post(createManyTeachers);

api
  .route("/:id")
  .get(getOneTeacher)
  .put(updateTeacher)
  .delete(deleteOneTeacher);

module.exports = api;
