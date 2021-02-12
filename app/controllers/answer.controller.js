const db = require("../models");
const Question = db.question;
const Answer = db.answer;



exports.verifyanswers =  (req, res) => {
    try {
		const idanswer = req.params.idanswer

         Question.find({alternatives: {$elemMatch: {_id: idanswer, isCorrect: true }}}, (err, response) => { 
            if(response){
 if(response.length==0){
             return res.status(404).json({message: "wrong answer!"})
            
        }else{
           return res.status(200).json({message: "correct answer"})
        }
            }
            if(err){
                return res.status(500).json({message: "please check your answer ID"})
            }
    })   
		
      } catch (error) {
          return res.status(500).json({"error":error})
      }
};

exports.saveanswer = (req, res) => {
  const answer = new Answer({
    user: req.body.user,
    answers: req.body.answers
  });

  answer.save((err, answer) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
 return res.status(201).json({message: "Answer was inserted successfully!."})
   
  });
};

exports.getscore = (req, res) => {

  res.status(200).json({Totalscore: 0})
};