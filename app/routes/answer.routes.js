const { authJwt } = require("../middlewares");
const controller = require("../controllers/answer.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/api/answers/verify/:idanswer", controller.verifyanswers);
  app.post("/api/answers/save", controller.saveanswer);
  app.get("/api/answers/totalscore/:iduser", controller.getscore);
};
