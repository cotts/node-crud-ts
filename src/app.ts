import dotenv from 'dotenv'
import express, { Router } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import api from './api'

dotenv.config()

const router = Router().use('/api', api)
export default express()
  .use(cors())
  .use(helmet())
  .use(express.json())
  .use(router)
