import NavbarComponent from "../Components/NavbarComponent";
import Categories from "../Components/Categories";
import FooterComponent from "../Components/FooterComponent";
import Hero from "../Components/Hero/Hero";

function Home() {
  return (
    <div>
      <NavbarComponent />
      <hr />
      <Categories />
      <hr />
      <Hero />
      <FooterComponent />
      <hr />
    </div>
  );
}

export default Home;
