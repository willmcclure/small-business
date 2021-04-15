import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Login from './containers/Login'
import Listings from './containers/Listings'
import AddBusiness from './containers/AddBusiness'
import { Component } from 'react'

const checkAuthentication = () => {
    return cookie.parse(document.cookie).loggedIn
}

const ProtectedRouter = ({component: Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render={(props) => checkAuthentication()
            ? <Component {...props} />
            : <Redirect to ='./login' />
        } />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route exact path ="/" component={Listings} />
            {/* <Route path ="listing/:id" /> */}
            <ProtectedRouter path="/add"component={AddBusiness} />
        </Switch>
    )
}

export default Router