import { useState } from 'react'
import './Gigs.scss'

import { gigs } from '../../data';
import { GigCards } from '../../components/gigCards/GigCards';


function Gigs() {

  const[sort, setSort] = useState('sales');
  const [open ,setOpen] = useState(false);

  const reSort= (type)=>{
    setSort(type)
    setOpen(false)
  }



  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadcrumbs'>FIVERR  GRAPHICS & DESIGN </span>
        <h1>AI Artists</h1>
        <p>Explore the boundaries of art and technology with Fiverrs's AI Artists</p>
        <div className="menu">
          <div className="left">
              <span>Budget</span>
              <input type="text" placeholder='min' />
              <input type="text" placeholder='max' />
              <button>Apply</button>
          </div>
          <div className="right">
              <span className='sortby'>SortBy</span>
              <span className='sortType'>{sort==="sales" ? "Best Selling" : "Newest"}</span>
             

              <i class="fa-solid fa-angle-down" onClick={()=>setOpen(!open)}></i>
              {
                open && <div className="rightMenu">
                {
                  sort==="sales" ? 
                <span onClick={()=>reSort("createdAt")}>Newest</span>
                :
                <span onClick={()=>reSort("sales")}>Best Selling</span>
                }
              </div>
              }


          </div>
        </div>

        {/* Cards */}

        <div className="cards">
          {
            gigs.map((gig)=>(
              <GigCards  item={gig} key={gig.id}/>
            ))
          }
        </div>
        


      </div>
    </div>
  )
}

export default Gigs