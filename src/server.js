require("express-async-errors");

const routes = require("./routes");
const AppError = require("./utils/AppError");

const express = require("express");

(async () => {
    const app = express();

    app.use(express.json());
    app.use(routes);

    app.use((error, request, response, next) => {
        if(error instanceof AppError) {
            return response.status(error.statusCode).json({
                status: "Erro",
                message: error.message
            });
        }

        console.error(error);

        return response.status(500).json({
            status: "Erro",
            message: "Erro interno do servidor"
        })
    })

    const PORT = 3333;
    app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
})();