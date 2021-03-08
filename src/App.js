import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Menu from './Menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';

const App=()=>{
    return (
        <>
            <Menu/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route component={Error} />
           </Switch>
        </>
    )   
}

export default App;
