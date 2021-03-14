import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

dotenv.config()

export default express()
  .use(cors())
  .use(helmet())
  .use(express.json())
