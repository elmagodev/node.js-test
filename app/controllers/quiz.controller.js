const config = require("../config/auth.config");
const db = require("../models");
const Question = db.question;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

exports.addquestions =  (req, res) => {
   
       

        const question =  new Question ({
            description : req.body.description,
            alternatives: req.body.alternatives
        })
question.save((err, question) => {
	if (err){
		res.status(500).send({ message: err });
      return;
	}
	
	 return res.status(201).json(question)
});
       
    
};

exports.getallquestions = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
        try {
        const questions = await Question.find()
		.limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();
		
		// get total documents in the Question collection 
    const count = await Question.countDocuments();
        // return response with Question, total pages, and current page
    res.json({
      questions,
      totalPages: Math.ceil(count / limit),
      currentPage: page
    });
    } catch (error) {
        return res.status(500).json({"error":error})
    }
    
};

exports.getonequestion = async (req, res) => {
  try {
        const _id = req.params.id 
        const question = await Question.findOne({_id})        
        if(!question){
            return res.status(404).json({})
        }else{
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
};
