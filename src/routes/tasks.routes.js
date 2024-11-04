const { Router } = require("express");

const tasksRoutes = Router();

const TaksController = require("../controllers/TasksController");
const tasksController = new TaksController();

tasksRoutes.post("/", tasksController.create);
tasksRoutes.put("/:identificador_da_tarefa", tasksController.update);
tasksRoutes.get("/", tasksController.index);
tasksRoutes.get("/date", tasksController.orderByDate);
tasksRoutes.delete("/:identificador_da_tarefa", tasksController.delete);

module.exports = tasksRoutes;