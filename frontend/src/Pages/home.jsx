import Hero from "../Components/Hero/Hero";
import { KMW } from "../Components/KMW/KMW";
import NewArrival from "../Components/NewArraival/NewArraival";


function Home() {
  return (
    <div>
   
      <Hero />
     <NewArrival/>
     <KMW/>
      
    </div>
  );
}

export default Home;
