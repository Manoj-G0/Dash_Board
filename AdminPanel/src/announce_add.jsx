import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CSS/announce_add.css"
export default class Ann extends Component {
  render(){
  return (
    <div>
        <div className='main' align={"center"}>
        <p style={{fontSize:'40px',color:"black"}} align="center">Announcements</p>
            <table align="center">
            <tr><th>Date</th><td><input type="date" /></td></tr>
            <tr><th>AddImage</th><td><input type="file" /></td></tr>
            <tr><td colspan="2" align="center"><input type="submit" /></td></tr>
            </table>
        </div>
    </div>
  )
  }
}
