import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CSS/gallery_add.css"
export default class Insert extends Component {
  render(){
  return (
    <div>
        <div className='main'>
        <p style={{fontSize:'40px'}} align="center">Gallery</p>
            <table>
            <tr><th>Date</th><td><input type="date" /></td></tr>
            <tr><th>AddImage</th><td><input type="file" /></td></tr>
            <tr><td colspan="2" align="center"><input type="submit" /></td></tr>
            

            </table>
        </div>
    </div>
  )
  }
}
