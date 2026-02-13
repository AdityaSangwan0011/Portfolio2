import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './layout/Home';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';

const AppRoutes = () => {
 


   return (
      <>
        
           <Loader />
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
         </Routes>
         <Footer />
      </>
   );
};

const App = () => {
   return (
      <BrowserRouter>
         <AppRoutes />
         <ScrollToTop/>
      </BrowserRouter>
   );
};

export default App;
