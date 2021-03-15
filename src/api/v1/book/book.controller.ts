import { request, Request, Response } from 'express'
import { IBook } from './book.model'
import * as service from './book.service'

/**
 * Get All book
 * @param req Request from API
 * @param res Response to API
 */
export const fetchAll = (req: Request, res: Response): void => {
  const { skip, limit } = req.query

  service
    .fetchAll(skip, limit)
    .then((data) => res.json(data))
    .catch((error) => res.send(error.message))
}

/**
 * Get Book By Id
 * @param req
 * @param res
 */
export const getById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id)
  service
    .getById(id)
    .then((data) => res.json(data))
    .catch((error) => res.send(error.message))
}
