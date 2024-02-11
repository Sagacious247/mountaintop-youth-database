import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import ProfileDetails from './components/profile/profileDetails/ProfileDetails';
import Headroom from 'react-headroom';

function App() {
  return (
    <div style={{height: '100vh'}}>
    <BrowserRouter>
    <Headroom>
    <Header/>
    </Headroom>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/profile-details/:id' element={<ProfileDetails/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
