/** @format */

const ConfigApiRoutes = (app) => {
  require('../routes/index')(app);
  require('../routes/structure')(app);
};

module.exports = ConfigApiRoutes;
