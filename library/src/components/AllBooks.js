import React from 'react'
import Book from './Book'

const AllBooks = ({BooksArray}) => {
  

  return (
    <div className='BooksContainer'>

      {BooksArray.map( (book) =>
        <Book ABook = {book} key = {book.id}  page={0}/>
      )}


    </div>
  )
}

export default AllBooks