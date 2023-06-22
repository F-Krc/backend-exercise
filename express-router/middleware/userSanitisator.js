export const sanitizeName = (req, res, next) => {
  let { firstname, lastname } = req.body;

  firstname = firstname.trim();
  lastname = lastname.trim();

  req.body.firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1).toLowerCase();

  req.body.lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();
  next();
};
