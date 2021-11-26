import React from 'react'

function Navbar() {
    return (
        <div>
            <div style={{backgroundColor:'brown'}}>
            <h2 style={{textTransform:'capitalize',backgroundColor:'brown',fontSize:'60px'}}>this is react meals</h2>

            <a style={{margin:'18px',color:'pink',textTransform:'capitalize',fontSize:'35px'}}>home</a>
            <a style={{margin:'18px',color:'pink',textTransform:'capitalize',fontSize:'35px'}}>service</a>
            <a style={{margin:'18px',color:'pink',textTransform:'capitalize',fontSize:'35px'}}>booking</a>
            <a style={{margin:'18px',color:'pink',textTransform:'capitalize',fontSize:'35px'}}>contact</a>
            </div>
        </div>
    )
}

export default Navbar
