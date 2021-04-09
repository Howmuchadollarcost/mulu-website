import React from 'react'

import Header from '../../containers/Header/index'
import Portfolio from '../../containers/Portfolio/index'
import Contact from '../../containers/Contact/index'
import Footer from '../../containers/Footer/index'

const index = () => {
	return (
		<React.Fragment>
			<Header />
			<Portfolio />
			<Contact />
			<Footer />
		</React.Fragment>
	)
}

export default index;
