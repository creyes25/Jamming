import Track from "../Track/Track"

function TrackLlist({resultsList, symbol}) {
  return (
    <div>
      {resultsList.map(result => (
        <Track track={result} symbol={symbol} />
      ))}
    </div>
  )
}

export default TrackLlist