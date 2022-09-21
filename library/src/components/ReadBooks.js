import React from 'react'
import Book from './Book'

const ReadBooks = ({readBooks}) => {
  return (
    <div className='BooksContainer'>
        
        {readBooks.map( (book) =>
            
        <Book ABook = {book} key = {book.id} page = {1}/>

      )}

    </div>
  )
}

export default ReadBooks

