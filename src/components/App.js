import React from 'react';

import {Layout, Header, Drawer, Content, Navigation} from 'react-mdl';

class App extends React.Component {
	render() {
		return (
			<div id="App">
				<Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
			        <Header title="Title" scroll>
			            <Navigation>
			                <a href="">Link</a>
			                <a href="">Link</a>
			                <a href="">Link</a>
			                <a href="">Link</a>
			            </Navigation>
			        </Header>
			        <Drawer title="Title">
			            <Navigation>
			                <a href="">Link</a>
			                <a href="">Link</a>
			                <a href="">Link</a>
			                <a href="">Link</a>
			            </Navigation>
			        </Drawer>
			        <Content>
			            <div className="page-content" />
			        </Content>
			    </Layout>
			</div>
		);
	}
}

export default App;