import React from 'react'
import { AppBar, Typography, Toolbar, ThemeProvider } from '@material-ui/core'
import { Link } from 'react-router-dom'
import cookie from 'cookie'

const NavBar = (props) => {

    const handleLogout = () => {
        window.location.replace("/login")
        document.cookie = 'loggedIn=false'
    }

    return (
        <ThemeProvider>

        
        {document.cookie === 'loggedIn=true' ? (
            <AppBar>
            <Toolbar>
                <Typography variant="h3">Austin Small Business Directory</Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item"><Link to="/">Listings</Link></li>
                        <li><Link to="/add">Add Business</Link></li>
                        <li><Link to="/login" onClick={handleLogout}>Log Out</Link></li>


                    </ul>
            </Toolbar>
        </AppBar>
        ) : (
        <AppBar>
            <Toolbar>
                <Typography variant="h3">Austin Small Business Directory</Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item"><Link to="/">Listings</Link></li>
                        <li><Link to="/login">Log In</Link></li>


                    </ul>
            </Toolbar>
        </AppBar>
        )}
       </ThemeProvider>
    )
}

export default NavBar