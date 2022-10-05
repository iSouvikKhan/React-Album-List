import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const AddAlbum = (props) => {

  //this function get all the input like userid and title then call add albumm function for add it on the album list
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value;
    const title = document.getElementById('aaform-title-inp').value;
    props.addAlbumToList(Number(userId), title)
  }

  return (
    <>
      {/* navber */}
      <Navbar path="/" page="Home" />


      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h4 className='align-text'>Add Album</h4>
          <hr />
          <div className='inp-container'>
            <input id='aaform-userid-inp' type="hidden" />
          </div>
          <div className='inp-container'>
            Enter Album Title :
            <input id='aaform-title-inp' type="text" />
          </div>
          <br />
          <div>
            <Link to="/"><button onClick={getAlbumFormData}>Add To List</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAlbum
