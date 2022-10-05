import Hero from "../component/home/Hero";
import HomeSale from "../component/home/HomeSale";
import Products from "../component/home/Products";
import Quote from "../component/home/Quote";

const Home = () => {
  return (
    <div className="Home">
        <Hero />
        <HomeSale />
        <Products />
        <Quote />
        
    </div>
  )
}

export default Home;