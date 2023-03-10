require("dotenv").config({override: true});
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const router = require("./app/router/index");
const cors = require("cors");
const {errorCollector, notFound} = require("./app/utils/errorHandler");
const expressSwagger = require("express-swagger-generator")(app);
const swaggerOptions = require("./app/utils/swaggerOptions");

app.use(cors());

expressSwagger(swaggerOptions);

app.use(router);

app.use(notFound);

app.use(errorCollector);

app.listen(PORT, () => {
    console.log(`API server started on http://localhost:${PORT}`);
})