import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/free-solid-svg-icons';
import './App.css';
import ToggleSidebar from './Components/Appbar';
import { BrowserRouter , Router, Route, Routes,Switch } from "react-router-dom";
import React, {Fragment} from 'react';
import AddForm from './Components/addForm';

function App() {
  return (
    <div>
    <BrowserRouter>
      <ToggleSidebar />
      <Routes >
      {/* <Route exact path="/" element={<ToggleSidebar />} /> */}
      <Route path="/add" element={<AddForm />}  />
      
      </Routes>
    </BrowserRouter>
  </div>
    // <div className="App">
    //   <ToggleSidebar />
    // </div>
  );
}

export default App;
