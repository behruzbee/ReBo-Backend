import express, { Express } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

import { productsRouter } from './routes/products'
import { sliderRouter } from './routes/slider'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 3000
const dbUrl = process.env.DB_URL as string

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))

app.use(productsRouter)
app.use(sliderRouter)

const start = async () => {
  try {
    await mongoose.connect(dbUrl).then(() => {
      console.log(`[database]: database is connected!!!`)
    })

    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
