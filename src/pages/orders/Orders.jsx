import './Orders.scss'
import { Link } from 'react-router-dom'

function Orders() {
  const currentUser = {
    id:1, username:'Nihit',
    isSeller:true,
  }
  return (
    <div className='Orders'>
        <div className="container">
          <div className="title">
            <h1>Orders</h1>
            <Link to='/add'>
                <button>Add New Order</button>
            </Link>
          </div>

          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
              <th>Contact</th>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>Ramesh</td>
              <td>
              <i class="fa-solid fa-address-book"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>Suresh</td>
              <td>
              <i class="fa-solid fa-address-book"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>Dinesh</td>
              <td>
              <i class="fa-solid fa-address-book"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>Vikas</td>
              <td>
              <i class="fa-solid fa-address-book"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>Papla</td>
              <td>
              <i class="fa-solid fa-address-book"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>Goyal</td>
              <td>
              <i class="fa-solid fa-address-book"></i>
              </td>
            </tr>
          </table>


        </div>
    </div>
  )
}

export default Orders