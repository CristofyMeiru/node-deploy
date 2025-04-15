import express, { Application, Request, Response } from 'express'
import adminRoutes from './routes/admin.routes'
import feiraRoutes from './routes/feira-profissao'
import path from 'path'

const app: Application = express()
const port = process.env.PORT ? Number(process.env.PORT) : 3333

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json())

app.use('/admin', adminRoutes)
app.get("/feira", (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.listen(port, ()=> {
    console.log("Server is running...")
})