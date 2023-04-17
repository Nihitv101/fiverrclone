import './Mygigs.scss'
import { Link } from 'react-router-dom'


function Mygigs() {
  return (
    <div className='myGigs'>
        <div className="container">
          <div className="title">
            <h1>Gigs</h1>
            <Link to='/add'>
                <button>Add New</button>
            </Link>
          </div>

          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>2</td>
              <td>
              <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>2</td>
              <td>
              <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>2</td>
              <td>
              <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>2</td>
              <td>
              <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>2</td>
              <td>
              <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/c1609c155888364a14ca768ccf0a8725-1381927981674205884.782265/0CDF2C4C-1BEF-4A38-AF76-FDAB716FE418" alt="" />
              </td>
              <td>Gig 1</td>
              <td>112</td>
              <td>2</td>
              <td>
              <i class="fa-solid fa-trash"></i>
              </td>
            </tr>
          </table>


        </div>
    </div>
  )
}

export default Mygigs