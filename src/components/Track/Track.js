function Track({track, type, removeFromPlaylist, addToPlaylist}) {

  const handleClick = ({target}) => {
    if(target.value === '➖') {
      removeFromPlaylist(track.id)
    }
    
    if (target.value === '➕') {
      addToPlaylist(track)
    }
  }

  return (
    <div key={track.id}>
      <h1>{track.song}</h1>
      <h3>{track.artist} | {track.album}</h3>
      <button 
        onClick={handleClick}
        value={type === 'add' ? '➕' : '➖'}
      >
        {type === 'add' ? '➕' : '➖'}
      </button>
    </div>
  ) 
}

export default Track;