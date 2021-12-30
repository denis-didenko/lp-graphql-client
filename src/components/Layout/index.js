import React from 'react';

import Sidebar from '../UI/Sidebar';

const Layout = (props) => {
	return (
		<>
			<aside>
				<Sidebar />
			</aside>
			<header>
				<h1 className='page-title'>Admin panel</h1>
			</header>
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
