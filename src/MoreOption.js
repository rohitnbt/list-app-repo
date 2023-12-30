import React from 'react'

export default function (props) {
  return (
    <div className='more-box'>
        <ul onClick={()=>props.setOpt(false)}>
            <li onClick={()=>{alert("Option 1")}}>UpperCase</li>
            <li onClick={()=>{alert("Option 2")}}>LowerCase</li>
            <li onClick={()=>{alert("Option 3")}}>Count Letter</li>
            <li onClick={()=>{alert("Option 4")}}>Count Spaces</li>
            <li onClick={()=>{alert("More")}}>More</li>
        </ul>

    </div>
  )
}
