import { Router } from 'express'
import book from './book'

export default Router().use('/book', book)
