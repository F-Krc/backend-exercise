import express from "express";
import { validateUser, sanitizeUser, getUserData } from './controller/userController.js';
import { userValidate, ageValidate, emailValidate } from './middleware/userValidators.js';
import { sanitizeName, sanitizeAgeAndFbw, sanitizeBrand, sanitizeUserInput } from './middleware/userSanitisator.js';

const app = express();

app.use(express.json())

const PORT = 3000

app.post('/validateUser', userValidate, ageValidate, emailValidate, validateUser);
app.post('/sanitizeUser', sanitizeName, sanitizeAgeAndFbw, sanitizeBrand, sanitizeUserInput, sanitizeUser);
app.get('/getUserData', getUserData)



app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      message: err.message,
    },
  });
});

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
})