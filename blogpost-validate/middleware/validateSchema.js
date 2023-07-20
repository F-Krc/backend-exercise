import { validationResult } from "express-validator";

export const validateSchema = (req, res, next) => {

    const validationErrors = validationResult(req);
  
    if( validationErrors.isEmpty() ) { 
      next();
    } else {
      res.status(400).json( {errors: validationErrors.array() } )
    }
  }