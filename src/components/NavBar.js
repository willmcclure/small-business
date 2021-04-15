import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h3">Austin Small Business Directory</Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item"><Link to="/">Listings</Link></li>
                        <li><Link to="/add">Add Business</Link></li>

                    </ul>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar