import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Books from './components/Books';
import {useState} from 'react';
import ReadBooks from './components/ReadBooks';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
function App() {
  //let numOfBooks=0;
  const [numOfBooks, setNumOfBooks] = useState(0);
  const products = [
    { id: 1,
      title: "Gone with the wind",
      pageNum: 103,
      amount: 0
    }, {
      id: 2,
      title: "The litle prince",
      pageNum: 45,
      amount: 0

    },{
      id: 3,
      title: "Beleske o jednoj ani",
      pageNum: 167,
      amount: 0
    },
  ];
function addBook(title){
  setNumOfBooks(numOfBooks+1);
  
  console.log("Dodaj knjiug" + title)
}

  return (
    <BrowserRouter className="App">
      <NavBar numOfBooks = {numOfBooks}/>
      <Routes>
        <Route path="/" element={<Books products = {products} onAdd= {addBook}/>}/>
        <Route path="/ReadBooks" element={<ReadBooks products = {products}/>} />
      </Routes>
      <Footer></Footer>
      
    </BrowserRouter>
  );
}

export default App;
