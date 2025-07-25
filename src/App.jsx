import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import AppRoutes from './components/routes/Approutes';
import ScrollToTop from './components/routes/ScrollToTop';


const App = () => {
  return (
    <Router>
      <div >
        {/* Header Navigation */}

        <Header  />
        {/* Main Content Area */}
        <main className="flex-grow">
          <ScrollToTop />
          <AppRoutes/>
        </main>

        {/* Footer */}
<Footer/>
      </div>
    </Router>
  );
};

export default App;
