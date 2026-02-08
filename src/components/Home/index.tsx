import Newsletter from "../Common/Newsletter";
import BestSeller from "./BestSeller";
import Categories from "./Categories";
import Hero from "./Hero";
import InstagramFeed from "./InstagramFeed";
import LatestBlog from "./LatestBlog";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import ShopByOccasion from "./ShopByOccasion";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <NewArrival />
      <ShopByOccasion />
      <BestSeller />
      <PromoBanner />
      <Testimonials />
      <LatestBlog />
      <InstagramFeed />
      <Newsletter />
    </main>
  );
};

export default Home;
