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

    async taskUpdate({
        identificador_da_tarefa,
        nome_da_tarefa, 
        custo, 
        data_limite 
    }) {
        const task = await this.tasksRepository.findById(identificador_da_tarefa);

        if(!task) {
            throw new AppError("Tarefa não encontrada.", 404);
        };

        if(nome_da_tarefa) {
            const taskWithUpdateName = await this.tasksRepository.findByName(nome_da_tarefa);

            if(taskWithUpdateName && taskWithUpdateName.identificador_da_tarefa !== task.identificador_da_tarefa) {
                throw new AppError("Já existe uma tarefa com esse nome.");
            } else {
                task.nome_da_tarefa = nome_da_tarefa;
            }
        }

        task.custo = custo ?? task.custo;
        task.data_limite = data_limite ?? task.data_limite;

        const taskUpdated = await this.tasksRepository.updateTask(task);

        return taskUpdated;
    }

    async taskDelete(identificador_da_tarefa) {
        const task = await this.tasksRepository.findById(identificador_da_tarefa);

        if(!task) {
            throw new AppError("Tarefa não encontrada.", 404);
        }

        await this.tasksRepository.deleteTask(task.identificador_da_tarefa);
    }
}

module.exports = TasksService;