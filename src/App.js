import {Download , Feature , SectionWrapper} 
from './components';
import assests from './assets';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title = "You own store of Nifty NFTS. and Start Selling & Growing"
        description = "Buy, store, collect NFTs, exchange & earn crypto. Join 25+ millon people using ProNef Marketplace."
        showBtn
        mockupImg = {assests.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title = "Smart User Interface Marketplace"
        description = "Experience a buttery UI of ProNef NFT Marketplace.Smooth constant colors of a fluent UI Design."
        mockupImg={assests.homeCards}
        reverse
      />

      <Feature />

      <SectionWrapper 
        title = "Deployment"
        description = "ProNef is build using Expo which runs natively on all users devices. You can easily get your app into people's hands."
        mockupImg={assests.feature}
        reverse
      />

      <SectionWrapper 
        title = "Creative way to showcase the store"
        description = "The app contains list of all NFT's while the second one shows the details of the specific NFT."
        mockupImg={assests.mockup}
        banner="banner02"
      />

      <Download />
    </>
  );
}

export default App;
