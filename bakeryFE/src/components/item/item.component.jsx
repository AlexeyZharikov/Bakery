import './item.scss';
import { useState } from 'react';
const halal = require('../../assets/halal.png');
const raw = require('../../assets/raw.png')

const Item = (props) => {
  const [hover, setHover] = useState(false);

  const hoverStyle = {
    "transform": "scale(1.05)",
    "transition": "1s"
  };
  const normalStyle = {
    "transition": "1s"
  }

  const onMouseEnter = () => {
    setHover(true)
  }

  const onMouseLeave = () => {
    setHover(false)
  }

  return (
    <div className="card" key={props._id} >

      <div className="photo-item" >
        <img src={props.photo} alt="product" style={hover ? hoverStyle : normalStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
        <div className="labels">
          <img src={halal} alt="halal" style={props.halal === true ? {display:'block'} : {display: 'none'}}/>
          {/* <img src="" alt="kosher" /> */}
          {/* <img src="" alt="vegan" /> */}
          <img src={raw} alt="raw" style={props.raw === true ? {display:'block'} : {display: 'none'}}/>
          {/* <img src="" alt="glutem-free" /> */}
          {/* <img src="" alt="shugar-free" /> */}
        </div>
      </div>
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="price">Ціна: {props.price} грн.</div>
      <div className="description">{props.description}</div>
      <div className="card-btn">
        <button className='details'>Детальніше</button>
        <button className='add-to-cart'>Додати до кошика</button>
      </div>
    </div>

  )
}

export default Item;

// onClick={() => { openInNewTab(props.link) }}