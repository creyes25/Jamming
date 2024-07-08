import { useState } from 'react';
import './App.css';

// components
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

import Playlist from './components/Playlist/Playlist';

const results = [
  {id: '1-4', song: 'Bo', artist: 'rauw', album:'staturn', uri:'this is a uri 1'},
  {id: '1-6', song: 'Bonita', artist: 'yankee', album:'gasoline', uri:'this is a uri 2'},
  {id: '3-6', song: 'best', artist:'Karol-G', album:'Manana Sera Mas Bonito', uri:'this is a uri 3'}
]

function App() {
  const [searchVal, setSearchVal] = useState('')

  const [searchResults, setSearchResults] = useState(results)

  const [playlistName, setPlaylistName] = useState('')
  const [songPlaylist, setSongPlaylist] = useState([])

  const handleSearchVal = (val) => {
    setSearchVal(val)
  }

  const addToPlaylist = (track) => {
    setSongPlaylist((prevSongList) => {
      const list = prevSongList.filter(song => song.id !== track.id)
      return [...list, track]
    })
  } 

  const removeFromPlaylist = (id) => {
    setSongPlaylist((prevList) => {
      return prevList.filter(song => song.id !== id)
    })
  }

  const savePlaylist = () => {
    const trackURIs = songPlaylist.map((t) => t.uri)

    console.log('Playlist is saving', trackURIs)
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
        playlist={songPlaylist} 
        setPlaylist = {setSongPlaylist}
        removeFromPlaylist={removeFromPlaylist}
        playlistName={playlistName}
        setPlaylistName={setPlaylistName} 
        onSave={savePlaylist}
      />
    </div>
  );
}

export default App;
