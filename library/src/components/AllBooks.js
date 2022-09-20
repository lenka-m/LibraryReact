import React from 'react'
import Book from './Book'

const AllBooks = ({BooksArray, onMarkAsRead}) => {
  

  return (
    <div className='BooksContainer'>


      {BooksArray.map( (book) =>
        <Book ABook = {book} key = {book.id} onMarkAsRead = {onMarkAsRead} inRead={1}/>
      )}


    </div>
  )
}

export default AllBooks