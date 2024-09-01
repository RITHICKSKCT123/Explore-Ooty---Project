import './App.css';
import Login from './components/login';
 import SignUp from './components/signup';
 import Come from './components/welcome';
 import Pykara from './components/pykara';
//  import Open from './page/open';
 import ViewUser from './users/ViewUser'
 import AddUser from './users/AddUser'
 import EditUser from './users/EditUser'
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
 import   {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './page/open';
function App() {
  return (
    <div>
      { <Router>
        <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/home" element={<Come/>}/>
      <Route exact path="/signup" element={<SignUp/>}/>
      <Route exact path="/pykara" element={<Pykara/>}/>
      <Route exact path="/getHomePage" element={<Home/>}/>
      <Route exact path="/get/:placeId" element={<ViewUser/>}/>
      <Route exact path="/post" element={<AddUser/>}/>
      <Route exact path="/editing" element={<EditUser/>}/>
    
      
      </Routes>
      </Router> 
      }   
      {/* <Open/> */}
      
    </div>
      
  );
}

export default App;
