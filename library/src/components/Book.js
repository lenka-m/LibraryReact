import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import {AiFillCheckCircle} from "react-icons/ai";
import {IoMdRemoveCircle} from "react-icons/io"
const Book = () => {
  return (
   <div className='book'> 
      <img className='book-image' src = 'https:/picsum.photos/300'></img>
      <div className='book-body'>
         <div className='book-title'><h1> Naslov knjige 1</h1></div>
         <div className = 'boook-bogy'><p>Opis neki o knjizi, pisemo opis buhubuhub</p> </div>
         <a className = "btn"> <AiFillCheckCircle size='30px' color = 'orange'></AiFillCheckCircle></a>
         <a className = "btn"> <IoMdRemoveCircle size = '33px' color = 'orange'></IoMdRemoveCircle></a>
      </div>

   </div>

  )
}

export default Book