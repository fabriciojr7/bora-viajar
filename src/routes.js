import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import RegistroUsuario from "./pages/RegistroUsuario";
 import AccountUser from "./pages/AccountUser";
import {auth} from './services/firebase'

function Routes(){
    const [userLogado, setUserLogado] = useState(false)
    auth.onAuthStateChanged((user) => {
        if(user){
            return setUserLogado(true)
        }
        return setUserLogado(false)
    })

    
    if(userLogado===true){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/registro' component={RegistroUsuario}/>
                    <Route exact path='/perfil' component={AccountUser}/>                
                </Switch>
            </BrowserRouter>
        )
    }else{
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/registro' component={RegistroUsuario}/>
                </Switch>
            </BrowserRouter>
        )        
    }

}
export default Routes