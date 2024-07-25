import React, { useEffect, useState } from 'react';
import Editor from './Editor';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the FastAPI backend
    fetch('http://127.0.0.1:8000/data/markdown_content')
      .then(response => response.json())
      .then(data => setData(data.value))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>My Application</h1>
      {data ? <div>{data}</div> : <p>Loading...</p>}
      <Editor />
    </div>
  );
}

export default App;
