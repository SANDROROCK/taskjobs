import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import List  from './box/List';
import Form from './box/List';

const Box = () =>{
    return (
        <div className="box">
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={List}/>
                    <Route path='/create' component={Form}/>
                    <Route path='/update/:id' component={Form}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Box;