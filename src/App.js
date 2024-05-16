import { useState } from 'react';
import './App.css';

// components
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

import Playlist from './components/Playlist/Playlist';

const results = [
  {id: '1-4', song: 'Bo', artist: 'rauw', album:'staturn'},
  {id: '1-6', song: 'Bonita', artist: 'yankee', album:'gasoline'},
  {id: '3-6', song: 'best', artist:'Karol-G', album:'Manana Sera Mas Bonito'}
]

function App() {
  const [searchVal, setSearchVal] = useState('')

  const [searchResults, setSearchResults] = useState(results)

  const [playlistName, setPlaylistName] = useState('')
  const [songPlayList, setSongPlayList] = useState([])

  const handleSearchVal = (val) => {
    setSearchVal(val)
  }

  const addToPlaylist = (track) => {
    console.log(track)
    setSongPlayList((prevSongList) => {
      const list = prevSongList.filter(song => song.id !== track.id)
      return [...list, track]
    })
  } 

  const removeFromPlaylist = (id) => {
    setSongPlayList((prevList) => {
      return prevList.filter(song => song.id !== id)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming</h1>
        <SearchBar handleSearchVal={handleSearchVal} />
      </header>
      <SearchResults 
        searchResults={searchResults}
        addToPlaylist={addToPlaylist} 
      />
      <Playlist 
        playlist={songPlayList} 
        removeFromPlaylist={removeFromPlaylist}
        playlistName={playlistName}
        setPlaylistName={setPlaylistName} 
      />
    </div>
  );
}

export default App;
