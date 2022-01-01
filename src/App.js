
import './App.css';
// import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {


  
  
  // let colorBook = ['#caf0f8', '#eae4e9', '#fff1e6', '#fde2e4', '#fad2e1', '#bee1e6', '#ced4da', '#b9fbc0', '#ccfaf0', '#e8def8'];
  // let cardColor =  colorBook[Math.floor(Math.random() * 10)];
  
  // cardColor = "'" + cardColor + "'";
  // // document.body.style.backgroundColor = cardColor;

  
  document.body.style.backgroundColor = 'white';
  // document.body.style.backgroundImage = a;
  document.body.style.fontFamily = 'Fira Sans';









  return (
    <div className="App">
      

     
      <TodoList/>


    </div>
  );
}

export default App;
