const { authJwt } = require("../middlewares");
const controller = require("../controllers/quiz.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/quiz/questions",[authJwt.verifyToken,authJwt.isAdmin],controller.addquestions);

  app.get("/api/quiz/questions",[authJwt.verifyToken], controller.getallquestions);
  
  app.get("/api/quiz/questions/:id", controller.getonequestion);
  
};
