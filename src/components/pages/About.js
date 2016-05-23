/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 5/23/16
 * Time: 12:29 PM
 */
import React from 'react';
import {Layout} from 'react-mdl';
import {AppHeader, AppDrawer} from '../Navigation';

class About extends React.Component {
    render() {
        return (
            <Layout fixedHeader>
                <AppHeader></AppHeader>
                <AppDrawer></AppDrawer>
                <div class="page-content">
                    <h2 class='mdl-typography--display-3'>About</h2>
                </div>
            </Layout>
        );
    }
}

export default About;