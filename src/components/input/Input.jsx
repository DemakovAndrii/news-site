import React from 'react'
import { useState } from 'react'
import cl from './input.module.css'

export default function Input() {

	const [title, setTitle] = useState('')

	const addNewPost = () => {
		console.log(title);
	}

	return (
		<div>
			<input className={cl.inp}
				type="text"
				placeholder='f;lasdkhf;lskdj'
				value={title}
				onChange={e => setTitle(e.target.value)} />
			<button className={cl.butt}
				onClick={addNewPost}>
				asdasd
			</button>
		</div>
	)
}
