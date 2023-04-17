import './GigCards.scss'
import { Link } from 'react-router-dom';

export const GigCards = ({item}) => {
  return (
    <Link to='/gig/123' className='lnk'>
        <div className='gigCard'>
            <img src={item.img} alt="" />
                <div className="info">
                    <div className="user">
                        <img src={item.pp} alt="" />
                        <span>{item.username}</span>
                    </div>
                    <p>{item.desc}</p>
                </div>

                <div className="star">
                    <i class="fa-solid fa-star"></i>
                    <span>{item.star}</span>
                </div>

            <div className="details">
                <i class="fa-solid fa-heart"></i>

                <div className="price">
                    <span>STARTING AT</span>
                    <h2>${item.price}</h2>
                </div>
            </div>
        </div>
    </Link>
  )
};

