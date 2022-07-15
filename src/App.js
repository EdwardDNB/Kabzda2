import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';


const App = () => {
  return (
    <div className='app-wraper'>
      <Header />
      <Navbar />
      <Profile />
    </div>

  );

}

export default App;
