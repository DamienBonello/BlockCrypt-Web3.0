import {Navbar, Footer, Services, Transactions, Welcome, CryptoCard} from './components';

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
        <CryptoCard />
      </div>
      <Services />
      <Transactions />
      <Footer /> 
    </div>
  );
}

export default App
