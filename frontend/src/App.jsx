import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import Navbar from './Components/Navbar/Navbar';
// import MyURLsPage from './Pages/User/MyURLsPage';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UrlShortner from './Pages/UrlShortner/UrlShortner';
// import ProfilePage from './Pages/User/Profile';

function App() {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>} />
            {/* <Route element={<PrivateRoute/>}>

            </Route> */}
            <Route path='/urlShortener' element={<UrlShortner/>} />
        </Routes>
    </Router>
  )
}

export default App
