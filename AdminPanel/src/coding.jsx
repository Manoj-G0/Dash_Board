import React,{Component} from 'react';
import * as ic from 'react-icons/bs';
import "./CSS/coding.css";
import { Link } from 'react-router-dom';
class Division1 extends Component {
    render() {
      return (
        <Link to="coding_view" style={{textDecoration:"none",color:"#fff"}}>
          <div className="division">
            <center><ic.BsFillEyeFill className="icon" /><br></br>
            <Link to="view" className="tag">VIEW</Link>
            </center>
          </div>
        </Link>
      );
    }
  }
  
  class Division2 extends Component {
    render() {
      return (
       <Link to="coding_add">
         <div className="division">
          <center><ic.BsPlus className="icon" style={{textDecoration:"none",color:"#fff"}}/><br></br>
          <Link to="add" className="tag">ADD</Link>
          </center>
        </div>
       </Link>
      );
    }
  }
  
  class Division3 extends Component {
    render() {
      return (
        <Link to="coding_remove" className="tag">
          <div className="division">
            <center><ic.BsFillXSquareFill className="icon" style={{textDecoration:"none",color:"#fff"}} /><br></br>
            <Link to="remove" className="tag">REMOVE</Link>
            </center>
          </div>
        </Link>
        
      );
    }
  }
  
  class Coding extends Component {
    render() {
      return (
        <div className="App">
          <p style={{fontSize:'40px'}} align="center">Coding</p>
          <Division1 />
          <Division2 />
          <Division3 />
        </div>
      );
    }
  }
  
  export default Coding;