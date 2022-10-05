import './CardItem.scss';
import {IoIosHeartEmpty} from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import {BsCart2} from "react-icons/bs";
import CardButton from './CardButton';


const CardItem = (props) => {


  return (
    <div className="CardItem" key={props.key}>
        <img src={props.image} alt={props.name} />
        <h4 className='CardItem__name'>{props.name}</h4>
        <button className='CardItem__cart'>+ Add To Cart</button>
        <p>${props.price.toFixed(2)}</p>

        <div className="CardItem__buttons">

        <CardButton 
          Icon={IoIosHeartEmpty}
        />
        <CardButton 
          Icon={BsCart2}
        />
        <CardButton 
          Icon={IoSearchOutline}
        />

        </div>
    </div>
  )
}

export default CardItem;