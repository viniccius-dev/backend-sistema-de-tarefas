class TasksController {
    async create(request, response) {
        const { task_name, cost, deadline } = request.body;

        return response.status(201).json({ task_name, cost, deadline });
    }
}

module.exports = TasksController;