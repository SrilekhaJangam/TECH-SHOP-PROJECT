
import Banner from "../Components/Carousel/Banner.jsx";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProduct";
import { Services } from "../Components/Services/Services";
import TopProducts from "../Components/TopProducts/TopProducts";

export const Home = () => {
    
  return (
    <>
  {/* Banner  component*/}
      <Banner />

      <FeaturedProducts />

      <TopProducts />
      
      <Services/>
    </>
  );
};


