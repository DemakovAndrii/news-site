import React from 'react';
import cl from './news.module.css'

const News = (props) => {
	return (
		<div className={cl.block}>
			<img src={props.photo} className={cl.photo} />
			<div className={cl.textBlock}>
				<div className={cl.text}>{props.text}</div>
				<div>
					<button className={cl.button}>Read more</button>
				</div>
			</div>
		</div >
	);
};

export default News;