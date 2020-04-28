import React from 'react'
import {Link} from 'react-router-dom';


 function Nav() {
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li><Link to='/'>Home</Link></li> | <li><Link to='/about'>About</Link></li>
                
            </ul>
        </nav>
    )
}
const navStyle= {
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    outline:'none'


}
const ulStyle= {
    width:'50%',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    listStyle: 'none',
    outline:'none'

}

export default Nav;