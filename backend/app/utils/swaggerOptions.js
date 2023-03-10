require("dotenv").config({override: true});
const PORT = process.env.PORT;

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            description: "Serveur API d'O'Four",
            title: "O'Four",
            version: "1.0.0",
        },
        host: `localhost:${PORT}`,
        basePath: "/",
        produces: ["application/json"],
        schemes: ["http"],
    },
    basedir: __dirname,
    files: ["./../router/routes/recipeRoute.js"]
}

module.exports = swaggerOptions;