import { Router } from 'express'
import * as controller from './book.controller'

export default Router()
  .get('/', controller.fetchAll)
  .get('/:id', controller.getById)
  .post('/', controller.create)
