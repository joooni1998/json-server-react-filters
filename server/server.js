const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

const fs = require("fs");
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/routes");
routes(app,fs)
const port = 3010;
const server = app.listen(port, () => {
  console.log(`listening on port ${server.address().port}`)
})