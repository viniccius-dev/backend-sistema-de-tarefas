const knex = require("../database/knex");

class TaskRepository {
    async findById(identificador_da_tarefa) {
        const id = await knex("Tarefas").where({ identificador_da_tarefa }).first();

        return id;
    }

    async findByName(nome_da_tarefa) {
        const name = await knex("Tarefas").where({ nome_da_tarefa }).first();

        return name;
    }

    async newOrder() {
        const maxOrder = await knex("Tarefas").max("ordem_da_apresentacao as maxOrder");

        const newOrder = (maxOrder[0].maxOrder || 0) + 1;

        return newOrder; 
    }

    async createTask({ nome_da_tarefa, custo, data_limite, ordem_da_apresentacao }) {
        const [id] = await knex("Tarefas").insert({
            nome_da_tarefa,
            custo,
            data_limite,
            ordem_da_apresentacao
        });

        return { id };
    }

    async updateTask(task) {
        const taskUpdated = await knex("Tarefas").update(task).where({ identificador_da_tarefa: task.identificador_da_tarefa });

        return taskUpdated;
    }

    async getTasks() {
        const tasks = await knex("Tarefas");

        return tasks;
    }
}

module.exports = TaskRepository;