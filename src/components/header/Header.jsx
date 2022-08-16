import React from 'react';
import cl from './header.module.css'


const header = () => {
	return (
		<div className={cl.header}>
			<strong>LOGO</strong>
			<div className={cl.headerLinks}>
				<a href="#">Blog</a>
				<a href="#">About</a>
				<a href="#">Story</a>
			</div>
		</div>
	);
};

export default header;