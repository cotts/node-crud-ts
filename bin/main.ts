import dotenv from 'dotenv'
import app from '../src'

dotenv.config()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.info(`Server Running on Port ${PORT}`)
  
})


