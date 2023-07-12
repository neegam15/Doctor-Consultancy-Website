import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Service from './Service'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Appointment from './Appointment'
import SenderComponent from '../video/sender/SenderComponent'
import ReciverComponent from '../video/receiver/ReciverComponent'
import Login from './Login'
// import NewFooter from './NewFooter'
function Main() {

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/Service' component={Service} />
                <Route exact path='/About' component={About} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/getAppointment/:id' component={Appointment} />
                <Route exact path='/sender' component={SenderComponent} />
                <Route exact path='/reciever' component={ReciverComponent} />
                <Route exact path='/login' component={Login} />
                <Redirect to='/' />
            </Switch>
            <Footer />
            {/* <NewFooter /> */}
        </>
    )
}

export default Main
