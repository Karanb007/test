//-----css integration----- 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//---------third party import-----
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//-------components-----
import Home from './screens/home/Home';
import PlayerScreen from './screens/player/PlayerScreen';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/:id"} element={<PlayerScreen/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
