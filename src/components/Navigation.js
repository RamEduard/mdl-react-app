/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 * Date: 5/23/16
 * Time: 3:01 PM
 */
"use strict";

import React from 'react';
import {Link} from 'react-router';
import {Header, Drawer, Navigation, Textfield} from 'react-mdl';

export class AppHeader extends React.Component {
    render() {
        return (
            <Header title='Site Title' scroll>
                <Navigation>
                    <Link activeStyle={{color: 'white'}} to="/">Home</Link>
                    <Link activeStyle={{color: 'white'}} to="/about">About</Link>
                    <Link activeStyle={{color: 'white'}} to="/contact">Contact</Link>
                    <Link activeStyle={{color: 'black'}} to="/not-found">NotFound</Link>
                </Navigation>
                <Textfield
                    onChange={() => {}}
                    label="Search"
                    expandable
                    expandableIcon="search"
                    pattern="^[a-zA-Z0-9 ]*$"
                    error="Search invalid!"
                    />
            </Header>
        );
    }
}

export class AppDrawer extends React.Component {
    render() {
        return (
            <Drawer title="Site Title">
                <Navigation>
                    <Link activeStyle={{color: 'black'}} to="/">Home</Link>
                    <Link activeStyle={{color: 'black'}} to="/about">About</Link>
                    <Link activeStyle={{color: 'black'}} to="/contact">Contact</Link>
                    <Link activeStyle={{color: 'black'}} to="/not-found">NotFound</Link>
                </Navigation>
            </Drawer>
        );
    }
}
