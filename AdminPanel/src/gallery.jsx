import React,{Component} from 'react';
import * as ic from 'react-icons/bs';
import "./CSS/gallery.css";
import { Link } from 'react-router-dom';
class Division1 extends Component {
    render() {
      return (
        <Link to="gallery_view">
          <div className="division" style={{textDecoration:"none",color:"#fff"}}>
          <center><ic.BsEyeFill className="icon" /><br></br>
          <Link to="gallery_view" className="tag">VIEW</Link>
          </center>
        </div>
        </Link>
      );
    }
  }
  
  class Division2 extends Component {
    render() {
      return (
        <Link to="gallery_add">
          <div className="division" style={{textDecoration:"none",color:"#fff"}}>
          <center><ic.BsPlus className="icon" /><br></br>
          <Link to="gallery_add" className="tag">ADD</Link>
          </center>
        </div>
        </Link>
        
      );
    }
  }
  
  class Division3 extends Component {
    render() {
      return (
        <Link to="gallery_remove">
          <div className="division" style={{textDecoration:"none",color:"#fff"}}>
          <center><ic.BsFillXSquareFill className="icon" /><br></br>
          <Link to="gallery_remove" className="tag">REMOVE</Link>
          </center>
        </div>
        </Link>
      );
    }
  }
  
  class Gallery extends Component {
    render() {
      return (
        <div className="main">
          <p style={{fontSize:'40px'}} align="center">Gallery</p>
          <Division1 />
          <Division2 />
          <Division3 />
        </div>
      );
    }
  }
  
  export default Gallery;