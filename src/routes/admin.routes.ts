import { Router, Request, Response } from 'express'
import { adminController } from '../controllers/adminController';

const adminRoutes = Router()

adminRoutes.get('/', adminController.home)

export default adminRoutes