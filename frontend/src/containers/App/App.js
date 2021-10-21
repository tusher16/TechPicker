import "@material-tailwind/react/tailwind.css";

import classes from './App.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import HomeScreen from '../../Screens/Home/HomeScreen';


function App() {
  return (
    <div>
        <Header />
       <HomeScreen />
        <Footer />
        
    </div>
  );
}

export default App;
