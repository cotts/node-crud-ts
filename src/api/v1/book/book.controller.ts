import { request, Response } from 'express'
import { IBook } from './book.model'
import * as service from './book.service'

interface Params {
  skip: string
  limit: string
}

interface ExpressRequest {
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
export const fetchAll = (req: ExpressRequest, res: Response): void => {
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
export const getById = (req: ExpressRequest, res: Response): void => {
  const { id }: { id: string } = req.params
  service
    .getById(id)
    .then((data) => res.json(data))
    .catch((error) => res.send(error.message))
}

/**
 *
 * @param req Create Book
 * @param res
 */
export const create = (req: ExpressRequest, res: Response): void => {
  const book: IBook = req.body

  service
    .create(book)
    .then((data) => res.json(data))
    .catch((error) => res.send(error.message))
}

/**
 *
 * @param req Update book
 * @param res
 */
export const update = (req: ExpressRequest, res: Response): void => {
  const book: IBook = req.body
  service
    .update(book)
    .then((data) => res.json(data))
    .catch((error) => res.send(error.message))
}

/**
 *
 * @param req Remove book by id
 * @param res
 */
export const remove = (req: ExpressRequest, res: Response): void => {
  const { id }: { id: string } = req.params
  service
    .remove(id)
    .then((data) => res.json(data))
    .catch((error) => res.send(error.message))
}
