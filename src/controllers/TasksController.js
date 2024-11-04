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
        const { title, date } = request.query;

        const taskRepository = new TaskRepository();
        const tasks = await taskRepository.getTasks({ nome_da_tarefa: title, tarefas_filtradas: date });

        return response.json(tasks);
    }

    async delete(request, response) {
        const { identificador_da_tarefa } = request.params;

        const taskRepository = new TaskRepository();
        const tasksService = new TasksService(taskRepository);
        await tasksService.taskDelete(identificador_da_tarefa);

        return response.json({ message: "Tarefa deletada com sucesso!" });
    }

    async orderByDate(request, response) {
        const taskRepository = new TaskRepository();
        const tasks = await taskRepository.getTasksOrderByDate();

        return response.json(tasks);
    }

    async updateOrder(request, response) {
        const { idTask1, idTask2 } = request.body;

        const taskRepository = new TaskRepository();
        const tasksService = new TasksService(taskRepository);

        await tasksService.swapOrder(idTask1, idTask2);

        return response.json({ message: "Ordem das tarefas atualizada com sucesso!" });
    }
}

module.exports = TasksController;