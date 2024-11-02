const TaskRepository = require("../repositories/TaskRepository");
const AppError = require("../utils/AppError");

class TasksService {
    constructor(tasksRepository) {
        this.tasksRepository = tasksRepository;
    }

    async taskCreate({ nome_da_tarefa, custo, data_limite }) {
        if(!nome_da_tarefa || !custo || !data_limite) {
            throw new AppError("Favor inserir todas as informações");
        }

        const taskRepository = new TaskRepository();
        const name = await taskRepository.findByName(nome_da_tarefa);

        if(name) {
            throw new AppError("Já existe uma tarefa com esse nome");
        }

        const ordem_da_apresentacao = await taskRepository.newOrder();
        const taskCreate = await taskRepository.createTask({
            nome_da_tarefa,
            custo,
            data_limite,
            ordem_da_apresentacao
        })

        return taskCreate;
    }
}

module.exports = TasksService;