import './App.css';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Axios from 'axios';

// Define App component
function App() {
  // Set up state variable for joke
  const [joke, setJoke] = useState("");

  // Define function to fetch a random joke
  const getJoke = () => {
    Axios.get("https://official-joke-api.appspot.com/randomjoke").then(response => {
      console.log(response);
      setJoke(response.data.setup + "..." + response.data.punchline);
    });
  }

  // Render App component
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


