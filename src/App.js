import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import VerifyEmail from './Pages/VerifyEmail';
import Home from './Pages/Home';


function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/verifyEmail' element={<VerifyEmail/>} />
    </Routes>
    </div>
  );
}

export default App;
