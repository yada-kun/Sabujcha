import "./Hero.scss";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__content">
        <div className="Hero__content--details">
          <h1>
            Want to stay
            <span> healthy</span> <br />
            drink matcha
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            perspiciatis rerum dignissimos eligendi excepturi nobis iste ab
            dolorum ipsum. Voluptatibus!
          </p>

         <HeroButton>
            Visit Shop
         </HeroButton>
        
        </div>
      </div>
    </div>
  );
};

export default Hero;
