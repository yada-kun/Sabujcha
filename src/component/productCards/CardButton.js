import './CardButton.scss';

const CardButton = ({Icon}) => {
  return <button className='CardButton'>
    <Icon
    size={20}
    />
  </button>
}

export default CardButton;