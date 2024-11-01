const routes = require("./routes");

const express = require("express");

(async () => {
    const app = express();

    app.use(express.json());
    app.use(routes);

    const PORT = 3333;
    app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
})();