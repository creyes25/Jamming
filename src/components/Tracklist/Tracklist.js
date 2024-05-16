import Track from "../Track/Track"

function TrackLlist({list, type, removeFromPlaylist, addToPlaylist}) {
  return (
    <div>
      {list && list.map(result => (
        <Track 
          track={result} 
          type={type} 
          removeFromPlaylist={removeFromPlaylist} 
          addToPlaylist={addToPlaylist}
        />
      ))}
    </div>
  )
}

export default TrackLlist