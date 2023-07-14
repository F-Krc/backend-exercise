import { Router } from 'express'

import { notFound } from "../controller/generalController.js";

const generalRouter = Router()

generalRouter.use('*', notFound)

export default generalRouter