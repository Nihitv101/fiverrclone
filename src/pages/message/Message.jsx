import "./Message.scss";
import { Link } from "react-router-dom";

function Message() {
  return (
    <div className="message">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/messages" className="link">
            MESSAGES
          </Link>{" "}
          {" > "}
          JOHN DOE
        </div>

        <div className="message">
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d9444d75b9dc2d51b6fde7244e6f38bf-1676666740716/519d0188-5d4d-488a-947f-d65a2d89d2fa.png"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, nostrum. Beatae optio, officiis a nulla iusto
              praesentium tempore porro voluptatem!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d9444d75b9dc2d51b6fde7244e6f38bf-1676666740716/519d0188-5d4d-488a-947f-d65a2d89d2fa.png"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, nostrum. Beatae optio, officiis a nulla iusto
              praesentium tempore porro voluptatem!
            </p>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d9444d75b9dc2d51b6fde7244e6f38bf-1676666740716/519d0188-5d4d-488a-947f-d65a2d89d2fa.png"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, nostrum. Beatae optio, officiis a nulla iusto
              praesentium tempore porro voluptatem!
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d9444d75b9dc2d51b6fde7244e6f38bf-1676666740716/519d0188-5d4d-488a-947f-d65a2d89d2fa.png"
              alt=""
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quibusdam, nostrum. Beatae optio, officiis a nulla iusto
              praesentium tempore porro voluptatem!
            </p>
          </div>
        </div>

        <hr />

        <div className="write">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Write a Messsage"
          ></textarea>

          <button>
            send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
