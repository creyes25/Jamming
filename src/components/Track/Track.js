function Track({track, symbol}) {
  return (
    <div key={track.id}>
      <h1>{track.song}</h1>
      <h3>{track.artist} | {track.album}</h3>
      <h3>{symbol === 'add' ? '➕' : '➖' }</h3>
    </div>
  ) 
}

export default Track;