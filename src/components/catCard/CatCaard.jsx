import { Link } from 'react-router-dom';
import './CatCaard.scss';



const CatCaard = ({item}) => {
  return (
      <Link to='/gigs?cat=design'>
        <div className="catCard">
            <img src={item.img} alt="" />
            <span className='title'>{item.title}</span>
            <span className='desc'>{item.desc}</span>
        </div>
      </Link>
  )}

export default CatCaard






