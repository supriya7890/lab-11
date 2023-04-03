import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Axios from 'axios';

function App() {
  
  const [joke, setJoke] = useState("");

  
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/randomjoke").then(response => {
      console.log(response);
      setJoke(response.data.setup + "..." + response.data.punchline);
    });
  }

 
  return (
    <>
      {/* Render Navbar component */}
      <Navbar />

      {/* Render main content */}
      <div>
        Hello <button onClick={getJoke}>Get Joke</button>
        {joke}
        <Container />
      </div>
    </>
  );
}
export default App;


