import React from 'react'
import Book from './Book'

const ReadBooks = ({readBooks}) => {
  return (
    <div>
        <h3>Procitane knjige vuhu</h3>
        {readBooks.map( (book) =>
            
        <Book ABook = {book} key = {book.id} inRead = {0}/>

      )}

    </div>
  )
}

export default ReadBooks

