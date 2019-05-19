import React,{Component} from 'react';
import Box from './Layout/Box';

class Layout  extends Component {
     render(){
        return (
            <section className="hero is-info is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-half is-offset-one-quarter">
                                <Box/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
     }


export default Layout;