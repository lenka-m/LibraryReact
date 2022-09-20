import React from 'react'
import Book from './Book'

const ReadBooks = ({products}) => {
  return (
    <div>
        <h3>Procitane knjige vuhu</h3>
        {products.map( (prod) =>
        <Book product = {prod} key = {prod.id} inRead = {0}/>
      )}

    </div>
  )
}

export default ReadBooks