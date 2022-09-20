import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import {AiFillCheckCircle, AiFillStar} from "react-icons/ai";
const Book = ({ ABook, onMarkAsRead, inRead }) => {

  return (
   <div className='BookItem'> 
      <img className='book-image' src = 'https:/picsum.photos/300'></img>
      <div className='book-body'>
         <div className='book-title'><h1><i> {ABook.title}</i></h1></div>
         <div className = 'boook-body'><p> 
            <b>Number Of pages:</b>{ABook.pageNum} <br></br>
            <b>Genre:</b> {ABook.genre}
            </p> </div>
         

         {( ABook.isRead== false) ? <>
            <a className = "MarkButton" onClick={()=>onMarkAsRead(ABook.id)}> Mark as read</a>
         </> : 
             <p><AiFillStar color='gold' /> {ABook.review}</p>}
      </div>

   </div>

  )
}

export default Book