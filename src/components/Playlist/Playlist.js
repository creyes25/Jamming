import { useState } from "react";

import TrackLlist from "../Tracklist/Tracklist";

function Playlist(props) {
  const [playlistName, setPlaylistName] = useState('')

  const [songList, setSongList] = useState([
    {id: '1-4', song: 'Bo', artist: 'rauw', album:'staturn'},
    {id: '1-6', song: 'Bonita', artist: 'yankee', album:'gasoline'},
    {id: '3-6', song: 'best', artist:'Karol-G', album:'Manana Sera Mas Bonito'}
  ])

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
          <TrackLlist list={songList} symbol='del' />
        </div>
        <button type="submit">SAVE TO SPOTIFY</button>
      </form>
    </div>
  )
}

export default Playlist;