import { useState } from "react";

function Playlist(props) {
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
        <div>
          songs will go here
        </div>
        <button type="submit">SAVE TO SPOTIFY</button>
      </form>
    </div>
  )
}

export default Playlist;