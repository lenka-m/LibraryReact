import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Books from './components/Books';
import {useState} from 'react';

function App() {
  //let numOfBooks=0;
  const [numOfBooks, setNumOfBooks] = useState(0);
  const products = [
    { id: 1,
      title: "Gone with the wind",
      pageNum: 103
    }, {
      id: 2,
      title: "The litle prince",
      pageNum: 45
    },{
      id: 3,
      title: "Beleske o jednoj ani",
      pageNum: 167
    },
  ];
function addBook(title){
  setNumOfBooks(numOfBooks+1);
  
  console.log("Dodaj knjiug" + title)
}

  return (
    <div className="App">
      <NavBar numOfBooks = {numOfBooks}/>
      <Books products = {products} onAdd= {addBook}/>
    </div>
  );
}

export default App;
