import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AllBooks from './components/AllBooks';
import {useState} from 'react';
import ReadBooks from './components/ReadBooks';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import BooksToRead from './components/BooksToRead';
import Filter from './components/Filter';
function App() {
  
  const [numOfReadBooks, setNumOfReadBooks] = useState(0);
  const [readBooks, setReadBooks] = useState([]);
  
  const [allBooksArray, setAllBooksArray] = useState([
    { id: 1,
      title: "Gone with the wind",
      pageNum: 103,
      imageLink: "https://en.wikipedia.org/wiki/Gone_with_the_Wind_%28novel%29#/media/File:Gone_with_the_Wind_cover.jpg",
      isRead: false, 
      genre: "horror",
      review: 0
    }, {
      id: 2,
      title: "The litle prince",
      pageNum: 45,
      isRead: false,
      genre: "novel",
      review: 0

    },{
      id: 3,
      title: "Beleske o jednoj ani",
      pageNum: 167,
      isRead: false,
      genre: "novel",
      review: 0
    },
  ]);
  const [booksToRead, setBooksToRead] = useState(allBooksArray);
  const[allFilterBooks, setAllFilterBooks] = useState(allBooksArray);
  function refreshReadBooks(){
    let newBooks = allBooksArray.filter((book) => book.isRead== true);
    setReadBooks(newBooks);
  }

  function refreshBooksToRead(){
    let newBooks = allBooksArray.filter((book) => book.isRead == false);
    setBooksToRead(newBooks);
  }

  function markAsRead(id){  
    console.log("Dodata je knjiga sa ID-jem:  " + id)
    allBooksArray.forEach((book) =>{
    if(book.id == id && book.isRead == false){
      book.isRead = true;
      setNumOfReadBooks(numOfReadBooks+1);
      //console.log(book);
    }
    setAllBooksArray(allBooksArray);
    refreshReadBooks();
    refreshBooksToRead();
    console.log(allBooksArray);
  });
  }
  function selectFilter(filter){
    console.log(filter);  
    if(filter == "any"){
      console.log(allFilterBooks);
      setAllFilterBooks(allBooksArray);
    } else {
      let newBooks = allBooksArray.filter((book) => book.genre == filter);
      setAllFilterBooks(newBooks)
    
    }

  }



  return (
    <BrowserRouter className="App">
      <NavBar numOfReadBooks = {numOfReadBooks}/>
      <Routes>
        <Route path="/" element={ <> <Filter onSelectFilter = {selectFilter}/><AllBooks BooksArray = {allFilterBooks} /> </>}/>
        <Route path="/ReadBooks" element={<ReadBooks readBooks = {readBooks}/>} />
        <Route path="/BooksToRead" element={<BooksToRead booksToRead = {booksToRead} onMarkAsRead= {markAsRead}/>} />
      </Routes>
      <Footer></Footer>
      
    </BrowserRouter>
  );
}

export default App;
