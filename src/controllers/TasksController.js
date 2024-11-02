const TaskRepository = require("../repositories/TaskRepository");
const TasksService = require("../services/TasksService");

class TasksController {
    async create(request, response) {
        const { nome_da_tarefa, custo, data_limite } = request.body;

        const taskRepository = new TaskRepository();
        const tasksService = new TasksService(taskRepository);
        const task = await tasksService.taskCreate({
            nome_da_tarefa,
            custo,
            data_limite
        });

        return response.status(201).json({ task, message: "Tarefa cadastrada com sucesso." });
    }
}

module.exports = TasksController;