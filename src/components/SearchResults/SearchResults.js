import TrackLlist from "../Tracklist/Tracklist";

function SearchResults(props) {
  // will show the results of the search
  const results = [
    {id: '1-4', song: 'Bo', artist: 'rauw', album:'staturn'},
    {id: '1-6', song: 'Bonita', artist: 'yankee', album:'gasoline'},
    {id: '3-6', song: 'best', artist:'Karol-G', album:'Manana Sera Mas Bonito'}
  ]

  return (
    <div>
      <h1>Results</h1>
      <TrackLlist resultsList={results} symbol={'add'} />
    </div>
  )
}

export default SearchResults;