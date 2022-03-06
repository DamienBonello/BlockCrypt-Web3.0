import {Footer, Services, Transactions, Welcome, CryptoCard} from '../components';

const Home = () => {
    return (
        <div className="min-h-screen overflow-hidden">
        <div className='gradient-bg-welcome'>
          <Welcome />
          <CryptoCard />
        </div>
        <Services />
        <Transactions />
        <Footer /> 
      </div>
    )
}

export default Home;