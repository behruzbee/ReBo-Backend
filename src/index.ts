import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { productsRouter } from './routes/products'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000
const dbUrl = process.env.DB_URL as string

app.use(express.json())

app.use(productsRouter)

const start = async () => {
  try {
    await mongoose.connect(dbUrl).then(() => {
      console.log(`[database]: database is connected!!!`);
    })
    
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
