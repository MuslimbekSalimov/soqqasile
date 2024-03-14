import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <>

    <Header/>

    <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='/*' element={"Error"}/>
    </Routes>

    </>
  );
}

export default App;
