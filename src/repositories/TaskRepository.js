const knex = require("../database/knex");

class TaskRepository {
    async findByName(nome_da_tarefa) {
        const name = await knex("tarefas").where({ nome_da_tarefa }).first();

        return name;
    }

    async newOrder() {
        const maxOrder = await knex("tarefas").max("ordem_da_apresentacao as maxOrder");

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
}

module.exports = TaskRepository;