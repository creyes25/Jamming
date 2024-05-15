import Track from "../Track/Track"

function TrackLlist({list, type}) {
  return (
    <div>
      {list.map(result => (
        <Track track={result} type={type} />
      ))}
    </div>
  )
}

export default TrackLlist