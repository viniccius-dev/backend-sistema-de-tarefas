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

    async update(request, response) {
        const { 
            nome_da_tarefa, 
            custo, 
            data_limite 
        } = request.body;
        const { identificador_da_tarefa } = request.params;
        
        const taskRepository = new TaskRepository();
        const tasksService = new TasksService(taskRepository);
        await tasksService.taskUpdate({
            identificador_da_tarefa,
            nome_da_tarefa,
            custo,
            data_limite
        });

        return response.status(201).json({ message: "Tarefa atualizada com sucesso." });
    }

    async index(request, response) {
        const taskRepository = new TaskRepository();
        const tasks = await taskRepository.getTasks();

        return response.json(tasks);
    }
}

module.exports = TasksController;