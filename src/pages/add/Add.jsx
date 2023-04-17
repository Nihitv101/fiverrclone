import './Add.scss'



function Add() {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add new Gig</h1>
        <div className="sections">
          <div className="left">
              <label htmlFor="">Title</label>
              <input type="text" placeholder='' />

              <label htmlFor="">Category</label>
              <select name="cats" id="cats">
                <option value="design">Design</option>
                <option value="web development">Web Development</option>
                <option value="animation">Animation</option>
                <option value="Music">Music</option>
              </select>

              <label htmlFor="">Cover Image</label>
              <input type="file" name="" id="" />
              <label htmlFor="">Upload Image</label>
              <input type="file" name="" id="" />
              <label htmlFor="">Description</label>
              <textarea name="" id="" cols="30" rows="10" placeholder='Brief description to introduct your service to customers' ></textarea>
              <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='e.g. One-page web design' />

            <label htmlFor="">Short Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='short description of your service'></textarea>

            <label htmlFor="">Delivery Time</label>
            <input type="number" name="" id="" min={1}/>

            <label htmlFor="">Revision Number</label>
            <input type="number" name="" id="" min={1}/>

            <label htmlFor="">Add Features</label>
            <input type="text" placeholder='e.g. Page Design'/>
            <input type="text" placeholder='e.g. file Uploading'/>
            <input type="text" placeholder='e.g. Setting up a Domain'/>


            <input type="text" placeholder='e.g. Hosting'/>
            <label htmlFor="">Price</label>
            <input type="number" name="" id="" min={1}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add