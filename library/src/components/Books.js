import React from 'react'
import Book from './Book'

const Books = ({products, onAdd}) => {
  

  return (
    <div className='all-books'>
      {/*
      <Book product  ={products[0]} />
      <Book product  ={products[1]}/>
  <Book product  ={products[2]}/> */}

      {products.map( (prod) =>
        <Book product = {prod} key = {prod.id} onAdd = {onAdd}/>
      )}


    </div>
  )
}

export default Books