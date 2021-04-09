import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage/index';
import NotFound from './pages/NotFound/index';
import Projects from './pages/Projects/index';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={HomePage} />
				<Route exact path="/projects" component={Projects} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	);
}

export default App;
