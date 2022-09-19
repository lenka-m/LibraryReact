import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import {AiFillCheckCircle} from "react-icons/ai";
import {IoMdRemoveCircle} from "react-icons/io"
const Book = ({ product, onAdd }) => {
  // function onAdd(title){
   //   console.log('Dodaj proivod' + title  );
  // }
  return (
   <div className='book'> 
      <img className='book-image' src = 'https:/picsum.photos/300'></img>
      <div className='book-body'>
         <div className='book-title'><h1> {product.title}</h1></div>
         <div className = 'boook-body'><p>{product.pageNum}</p> </div>
         <a className = "btn" onClick={()=>onAdd(product.title)}> <AiFillCheckCircle size='30px' color = 'orange'></AiFillCheckCircle></a>
         <a className = "btn"> <IoMdRemoveCircle size = '33px' color = 'orange'></IoMdRemoveCircle></a>
      </div>

   </div>

  )
}

export default Book