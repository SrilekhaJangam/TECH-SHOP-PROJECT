
import Banner from "../Components/Carousel/banner";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProduct";
import { Services } from "../Components/Services/Services";
import TopProducts from "../Components/TopProducts/TopProducts";

export const Home = () => {
    
  return (
    <>
      <Banner />
      <FeaturedProducts />
      <TopProducts />
      <Services/>
    </>
  );
};


