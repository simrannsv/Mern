import './App.css'
import Navbar from './components/navbar.jsx';
import UsersList from './components/userlist.jsx';
import Footer from './components/footer.jsx';

function App() {
    //state
    //return
    return (
        <div>
            <div>
                <Navbar />
                <UsersList />
                <Footer />
            </div>
        </div>
    );
}

export default App  