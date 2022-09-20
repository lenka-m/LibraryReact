import React from 'react'
import Book from './Book'

const BooksToRead = ({booksToRead}) => {
  return (
    <div>
        <h3> Books on the reading list:</h3>
        {booksToRead.map( (book) =>
            
            <Book ABook = {book} key = {book.id} inRead = {0}/>
    
          )}
    </div>
  )
}

export default BooksToRead