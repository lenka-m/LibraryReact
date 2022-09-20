import React from 'react'
import Book from './Book'

const Books = ({products, onAdd}) => {
  

  return (
    <div className='BooksContainer'>


      {products.map( (prod) =>
        <Book product = {prod} key = {prod.id} onAdd = {onAdd} inRead={1}/>
      )}


    </div>
  )
}

export default Books