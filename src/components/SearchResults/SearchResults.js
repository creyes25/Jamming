import TrackLlist from "../Tracklist/Tracklist";

function SearchResults({addToPlaylist, searchResults}) {
  return (
    <div>
      <h1>Results</h1>
      <TrackLlist list={searchResults} type={'add'} addToPlaylist={addToPlaylist} />
    </div>
  )
}

export default SearchResults;