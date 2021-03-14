import Book, { IBook } from './book.model'
import mongoose from 'mongoose'

interface IParams {
  skip: number
  limit: number
}

/**
 * Format Query params to fetch book
 * @param skip - skip value
 * @param limit - limit value
 */
const parseQuery = (skip: string, limit: string): IParams => ({
  skip: parseInt(skip) || 0,
  limit: parseInt(limit) || 50,
})

/**
 * Fetch all books
 * @param skip - Skip value
 * @param limit - limit value
 */
export const fetchAll = async (
  skipParam: string,
  limitParam: string
): Promise<IBook[]> => {
  const { skip, limit } = parseQuery(skipParam, limitParam)

  return Book.find().skip(skip).limit(limit)
}

/**
 * Get Book By Id
 * @param id Book id
 */
export const getById = async (id: number): Promise<IBook> =>
  Book.findOne({ id }).lean()

/**
 *  Create Book Method
 * @param book Book Object to be created
 */
export const create = async (book: IBook): Promise<IBook> => Book.create(book)

/**
 * Update Book method
 * @param book Update book
 */
export const update = async (book: IBook) =>
  Book.findOneAndUpdate({ id: book.id }, book)
