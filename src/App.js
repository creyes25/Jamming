import { useState } from 'react';
import './App.css';

// components
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

function App() {
  const [searchVal, setSearchVal] = useState('')

  const handleSearchVal = (val) => {
    setSearchVal(val)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming</h1>
        <SearchBar handleSearchVal={handleSearchVal} />
      </header>
      <SearchResults />
    </div>
  );
}

export default App;
