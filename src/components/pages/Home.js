import react, {useState, useEffect} from 'react'
import logo from '../layout/logo.svg';
import axios from 'axios'
const Home = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {

        const results = await axios.get("http://localhost:3001/users");
        setUser(results.data);
    };
    return (
        <div className='container'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="display-1">Welcome to SHIVIN</h1>
        </div>
    );
};
export default Home;