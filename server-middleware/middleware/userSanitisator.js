export const sanitizeName = (req, res, next) => {
  let { firstName, lastName } = req.body;
  firstName =firstName.trim()
  lastName=lastName.trim()
  req.body.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  req.body.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  next();
};

export const sanitizeBrand = (req, res, next) => {
  req.body.favoriteBands.sort();
  next();
};

export const sanitizeAgeAndFbw = (req, res, next) => {
  req.body.age = Number(req.body.age);
  req.body.fbw = Number(req.body.fbw);
  next();
};

export const sanitizeUserInput = (req, res, next) =>{
  req.body.profession = req.body.profession.trim();
  req.body.email = req.body.email.trim();

  next();
}
