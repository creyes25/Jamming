import { useState } from 'react';
import './App.css';

// components
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [searchVal, setSearchVal] = useState('')

  const handleSearchVal = (val) => {
    setSearchVal(val)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming</h1>
      </header>
      <SearchBar handleSearchVal={handleSearchVal} />
      <h1>{searchVal}</h1>
    </div>
  );
}

export default App;
