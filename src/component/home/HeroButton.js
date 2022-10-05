import React from 'react'
import './HeroButton.scss';

const HeroButton = (props) => {
  return(
    <div className='HeroButton'>
        <button type="button"> {props.children} </button>
    </div>
  ) 
}

export default HeroButton