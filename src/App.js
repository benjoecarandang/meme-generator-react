import './style.css';
import Header from "./components/Header"
import Meme from './components/Meme'

export default function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Header />
        <Meme />
      </div>
    </div>
  );
}
