
import './App.css';
import Home from './Components/Home';
import Comp from './Components/Comp';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Home/>
      <hr style={{
        width:"100%",
        height:"5px",
        backgroundColor:"gray",
      }}/>
      <Comp text1="Enjoy on your TV." text2="Watch on smart TVs, PlayStation, Xbox, Chromecast," text3="Apple TV, Blu-ray players and more." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"/>
      <hr style={{
        width:"100%",
        height:"5px",
        backgroundColor:"gray",
      }}/>
      <Comp text1="Download your shows." text2="Save your favourites easily and always have" text3="something to watch." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"/>
      <hr style={{
        width:"100%",
        height:"5px",
        backgroundColor:"gray",
      }}/>
      <Comp text1="Watch everywhere." text2="Stream unlimited movies and TV shows on your" text3="phone, tablet, laptop, and TV." image="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"/>
      <hr style={{
        width:"100%",
        height:"5px",
        backgroundColor:"gray",
      }}/>
      <Comp text1="Create profiles for children." text2="Send children on adventures with their favourite" text3="characters in a space made just for them—free with your membership." image="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"/>
      <hr style={{
        width:"100%",
        height:"5px",
        backgroundColor:"gray",
      }}/>
      <Footer/>
    </div>
  );
}

export default App;
