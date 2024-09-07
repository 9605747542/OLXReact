import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import Home from './Pages/Home';
import './App.css';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import CreatePage from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import Post from './store/PostContext';




function App() {
  const {Setuser}=useContext(AuthContext);
  const Firebase=useContext(FirebaseContext)
  useEffect(()=>{
    Firebase.auth().onAuthStateChanged((user)=>{
      Setuser(user)
    })
    
  })
  return (

    <div>
          <Post>
     
      <Router>
    <Routes>
          <Route path='/' element={ <Home/>}> </Route>
          <Route path='/signup' element={<SignupPage/>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/create' element={<CreatePage/>}></Route>
          <Route path='/viewpost' element={<ViewPost/>} ></Route>
     </Routes>
        
    
      </Router>
      </Post>
   
    </div>
   

  );
}

export default App;
