import './App.css'
import Home from './components/Home'
import About from './components/About'
import Error404 from './components/Error404'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/pages/Layout'
import Students from './components/Students';
import Customers from './components/Customers';
import Details from './components/pages/Details';
import CustomerDetails from './components/pages/CustomerDetails';

function App() {
  return (
    <>
     <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/students" element={<Students/>}/>
          <Route path="/students/:id" element={<Details/>}/>
          <Route path="/customers" element={<Customers/>}/>
          <Route path="/customers/:id" element={<CustomerDetails/>}/>
          <Route path="*" element={<Error404/>}/> 
        </Routes>
      </Layout>
     </BrowserRouter>
    </>
  );
}

export default App;
