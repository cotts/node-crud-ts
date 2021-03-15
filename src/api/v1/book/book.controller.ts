import { request, Response } from 'express'
import { IBook } from './book.model'
import * as service from './book.service'

interface Params {
  skip: string
  limit: string
}

interface Request {
  query: {
    skip: string
    limit: string
  }
  params: {
    id: string
  }
  body: IBook
}
/**
 * Get All book
 * @param req Request from API
 * @param res Response to API
 */
export const fetchAll = (req: Request, res: Response): void => {
  const { skip, limit }: Params = req.query

  service
    .fetchAll(skip, limit)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error.message }))
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

export const create = (req: Request, res: Response): void => {
  const book: IBook = req.body

  service
    .create(book)
    .then((data) => res.json(data))
    .catch((error) => res.send(error.message))
}
