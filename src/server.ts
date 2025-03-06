import express, { Application, Request, Response } from 'express'
import adminRoutes from './routes/admin.routes'

const app: Application = express()
const port = process.env.PORT ? Number(process.env.PORT) : 3333

app.use(express.json())

app.use('/admin', adminRoutes)

app.listen(port, ()=> {
    console.log("Server is running...")
})