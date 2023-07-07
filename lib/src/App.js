import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navigation from "./component/navigation";
import Index from "./page";
import Home from "./page/home";

import Books from "./page/books";
import Studentform from "./page/Studentform";
import New from "./page/new";
import About from "./page/about";
import Formregister from './page/formregister';
import Update from './page/update';
function App() {
  return (
    
    <div>
    <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Index/>}/>




      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/studentform' element={<Studentform/>}/>
      
      <Route exact path='/student' element={<Formregister/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/navigation' element={<Navigation/>}/>
      <Route exact path='/books' element={<Books/>}/>
      <Route exact path='/new' element={<New/>}/>
      <Route exact path='/update/:stdId' element={<Update/>}/> 
        
      
      </Routes>
    </BrowserRouter>
    

    
      
    </div>
      );
}

export default App;
