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

    async getTasks({ nome_da_tarefa, tarefas_filtradas }) {

        let tasks;

        if(tarefas_filtradas) {
            const filterTasks = tarefas_filtradas.split(',').map(task => task.trim());

            tasks = await knex("Tarefas")
            .whereLike("nome_da_tarefa", `%${nome_da_tarefa}%`)
            .whereIn("data_limite", filterTasks)
            .orderBy("ordem_da_apresentacao", "desc");
        } else {
            tasks = await knex("Tarefas")
            .whereLike("nome_da_tarefa", `%${nome_da_tarefa}%`)
            .orderBy("ordem_da_apresentacao", "desc");
        }

        return tasks;
    }

    async deleteTask(identificador_da_tarefa) {
        return await knex("Tarefas").where({ identificador_da_tarefa }).delete();
    }

    async getTasksOrderByDate() {
        const tasks = await knex("Tarefas")
        .select("*");

        const orderedTasks = tasks.sort((a, b) => {
            const [dayA, monthA, yearA] = a.data_limite.split("/");
            const [dayB, monthB, yearB] = b.data_limite.split("/");

            const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
            const dateB = new Date(`${yearB}-${monthB}-${dayB}`);

            return dateA - dateB;
        });

        return orderedTasks;
    }
}

module.exports = TaskRepository;