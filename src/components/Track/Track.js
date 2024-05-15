function Track({track, type}) {
  return (
    <div key={track.id}>
      <h1>{track.song}</h1>
      <h3>{track.artist} | {track.album}</h3>
      <h3>{type === 'add' ? '➕' : '➖' }</h3>
    </div>
  ) 
}

export default Track;