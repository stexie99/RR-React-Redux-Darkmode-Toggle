import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch } from 'react-redux';
import { store } from './store';
import { toggleDark, toggleLight } from './features/modeSlice';

function App() {
  const dispatch  =  useDispatch()
  const mode = useSelector((state)=> state.mode)

  const toggleMode = () =>{
    mode.darkMode ? dispatch(toggleLight()) : dispatch(toggleDark())
  }

  return (
    <div style={{ backgroundColor: mode.color2, color: 'black' }} className="App">
      <Nav />
      <button onClick={toggleMode}>
        Toggle Mode
      </button>
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
