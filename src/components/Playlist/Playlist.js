import { useState, useEffect } from "react";

import TrackLlist from "../Tracklist/Tracklist";

function Playlist({playlist, removeFromPlaylist}) {
  const [playlistName, setPlaylistName] = useState('')

  const handlePlaylistNameChange = ({target}) => {
    setPlaylistName(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name='playlistName'
          value={playlistName}
          onChange={handlePlaylistNameChange}
        />
        <TrackLlist 
            list={playlist} 
            symbol='del'
            removeFromPlaylist={removeFromPlaylist}
        />
        <button 
          type="submit"
        >
          SAVE TO SPOTIFY
        </button>
      </form>
    </div>
  )
}

export default Playlist;