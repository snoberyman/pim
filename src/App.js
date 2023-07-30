import './App.css';


import HomeAdd from './Components/HomeAdd/HomeAdd';
import CollectionsList from './Components/CollectionsList/CollectionsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
       <div><HomeAdd /></div> 
       <div><CollectionsList/></div>


      </header>
    </div>
  );
}

export default App;
