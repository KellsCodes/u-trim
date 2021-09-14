import './App.css';
import ShortUrl from './components/Url.js'

function App() {
  return (
    <div className="App">
        <div className="App-header">
          <h1>URL Shortner MicroService</h1>
          <ShortUrl />
        </div>
    </div>
  );
}

export default App;
