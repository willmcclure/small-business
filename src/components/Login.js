import { TextField, Button } from "@material-ui/core"
import { Component, useState} from "react"
import { Redirect, useHistory } from 'react-router'

class Login extends Component {
    // const history = useHistory()
    // const [user, setUser] = useState({})

    state = {
        loggedIn: false,
        username: '',
        password: ''
    }

    handleInput = (event) => {
        const newState = { ...this.state }
        newState[event.target.name] = event.target.value
        this.setState(newState)
    }

    loginUser = (event) => {
        event.preventDefault()
        const payload = this.useState
        payload.loggedIn = true
        this.props.loginUser(payload)
        document.cookie = 'loggedIn=true;max-age=60x10000'
    }

    render() {
        return(
            <div>
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <TextField
                    onChange={this.handleInput}
                    label='username'
                ></TextField>
                <TextField
                    type='password'
                    label='password'
                ></TextField>
                <Button type="submit">
                    Login
                    {this.state.loggedIn ? <Redirect to="/" /> : null}
                    </Button>
            </div>
        )
    }
}

export default Login