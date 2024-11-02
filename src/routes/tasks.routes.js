const { Router } = require("express");

const tasksRoutes = Router();

const TaksController = require("../controllers/TasksController");
const tasksController = new TaksController();

tasksRoutes.post("/", tasksController.create);
tasksRoutes.put("/:identificador_da_tarefa", tasksController.update);
tasksRoutes.get("/", tasksController.index);

module.exports = tasksRoutes;