const { Router } = require("express");

const tasksRoutes = Router();

const TaksController = require("../controllers/TasksController");
const tasksController = new TaksController();

tasksRoutes.post("/", tasksController.create);

module.exports = tasksRoutes;