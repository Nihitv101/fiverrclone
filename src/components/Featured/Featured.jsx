import React from 'react'
import './Featured.scss';


// Images:
import man from '../../images/man.png'
import search from '../../images/search.png'





function Featured() {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the perfect <span>freelance</span> services for your business </h1>
                <div className="search">
                    <div className="searchInput">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Freelance Here' />
                        <button>Search</button>
                    </div>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>

                    <button>AI Services</button>
                </div>

            </div>

            <div className="right">
                <img src={man} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured