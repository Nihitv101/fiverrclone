import "./Messages.scss";
import { Link } from "react-router-dom";

function Messages() {
  const currrentUser = {
    id: 1,
    username: "Nihit",
    isSeller: false,
  };
  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse exercitationemuisquam tenetur officia accusamus. Consequuntur`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
          <Link to="/add">
            <button>Add New Message</button>
          </Link>
        </div>

        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td><Link to='/message/123'  className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>

          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td><Link to='/message/123' className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to='/message/123'  className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}


          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to='/message/123' className="link" >{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}
 
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to='/message/123'  className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}

          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to='/message/123' className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}
   
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to='/message/123' className="link">{message.substring(0,100)}...</Link></td>
            <td>1 day ago</td>
            {/* <td>
              <button>Mark as Read</button>
            </td> */}

          </tr>
        </table>
      </div>
    </div>
  );
}

export default Messages;
