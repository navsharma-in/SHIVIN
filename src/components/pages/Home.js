import react from 'react'
import logo from '../layout/logo.svg';
import axios from 'axios'
const Home = () => {
    return (
        <div className='container'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="display-1">Welcome to SHIVIN</h1>
        </div>
    );
};
export default Home;