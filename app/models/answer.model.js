const mongoose = require("mongoose");

const Answer = mongoose.model(
  "Answer",
  new mongoose.Schema({
    user:  {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    answers: [
        {
            answer:   mongoose.Schema.Types.ObjectId
    
        }
    ],
    totalscore: String
  })
);

module.exports = Answer;



