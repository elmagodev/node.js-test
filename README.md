# API QCM - Test node.js - Agnece des monts 



## endpoint
```
/api/quiz/questions ==> get all questions
/api/quiz/questions ==> add questions only admin role
{
    "description": "Node.js is _________ language",
    "alternatives": [
        {
            "text": "Server Side",
            "isCorrect": true
        },
        {
            "text": "Client Side"
        },
        {
            "text": "Both"
        }
    ]
}
/api/quiz/questions/:id ==> get one questions
/api/auth/signup ==> new user 
{
    "username": "usertest",
    "password": "1234567890"
}
/api/auth/signin ==> login user 
/api/answers/verify/:idanswer ==> check answer for question
/api/answers/save ==> save answer
{
    "user": "602581b66f9f000cb825874d",
    "answers": [{
        "answer" : "602581b66f9f000cb825874f"
    }]
}
/api/answers/totalscore/:iduser ==> get total score for user
```

## Project setup
```
npm install
```
## Create .env
```
DATABASE_URL=mongodb+srv://.....
PORT=3333
```

### Run
```
node server.js
```
