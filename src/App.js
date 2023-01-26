import './App.css';
import LandingPage from './pages/LandingPage';
import OurTeamPage from './pages/OurTeamPage';
import {Routes,Route,Navigate} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Booking from './components/Booking';
import PetBooking from './components/PetBooking';
import FarmBooking from './components/FarmBooking';
import ReptileBooking from './components/ReptileBooking';
import VipBooking from './components/VipBooking';
import VvipBooking from './components/VvipBooking';

function App() {
  return (
   <>
   <Header/>
   <Routes>
   <Route path='/' element={<Navigate to='/Home'/>}/>
   <Route path='/Home' element={<LandingPage/>}>
   <Route path='' element={<Booking/>}/>
   <Route path='petBooking' element={<PetBooking/>}/>
   <Route path='farmBooking' element={<FarmBooking/>}/>
   <Route path='reptileBooking' element={<ReptileBooking/>}/>
   <Route path='vipBooking' element={<VipBooking/>}/>
   <Route path='vvipBooking' element={<VvipBooking/>}/>
   </Route> 
   <Route path='/Team' element={<OurTeamPage/>}/> 
   </Routes>
   <Footer />
   </>
  );
}

export default App;
