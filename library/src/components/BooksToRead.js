import React from 'react'
import Book from './Book'

const BooksToRead = ({booksToRead, onMarkAsRead}) => {
  return (
    <div className='BooksContainer'>

        {booksToRead.map( (book) =>
            
            <Book ABook = {book} key = {book.id} page = {2} onMarkAsRead = {onMarkAsRead}/>
    
          )}
    </div>
  )
}

export default BooksToRead