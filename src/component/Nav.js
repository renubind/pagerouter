import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    const linkArr=["App","Courses"];
    const linkStyle = {
        display: "inlineBlock",
        margin: "10px 20px",
        padding: "10px 30px",
        border: "2px solid gray ",
        borderRadius:"8px",
        backgroundColor:"black",
        color:"white",
        fontWeight:"bold",
        fontSize:"24px"
      };
    
  return (
    <nav>
        
        {
            linkArr.map((link,index)=>{
               return <Link  style={linkStyle} key={index} to={`/${link}`}> {link}</Link>
            }
       ) }

    </nav>
  )
}
