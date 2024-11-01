const { Router } = require("express");

const routes = Router();

const tasksRouter = require("./tasks.routes");

routes.use("/tasks", tasksRouter);

module.exports = routes;