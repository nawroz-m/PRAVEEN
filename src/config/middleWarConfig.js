const userRout = require("../routes/userRout");
const bodyParser = require("body-parser");
const PATH = {
  ROOT: "/",
  API: "/api",
};

const middleWarConfig = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(PATH.ROOT, userRout);
};

module.exports = middleWarConfig;
