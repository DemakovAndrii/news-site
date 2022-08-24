import React from "react";
import style from './styles.css'
import Header from './components/header/Header'
import News from './components/news/News'
import Input from "./components/input/Input";


function App() {
	return (
		<div style={{ maxWidth: '1090px', margin: '0 auto' }} >
			<Header />
			<Input />
			<News
				photo='https://memepedia.ru/wp-content/uploads/2021/02/dum.jpg'
				text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aspernatur repellat modi facilis inventore nostrum qui, consequuntur voluptates iusto adipisci omnis et sapiente ex ullam repudiandae dolorum accusantium autem similique libero quae!" />
			<News
				photo='https://cs13.pikabu.ru/post_img/big/2021/04/01/10/1617293581130457062.jpg'
				text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aspernatur repellat modi facilis inventore nostrum qui, consequuntur voluptates iusto adipisci omnis et sapiente ex ullam repudiandae dolorum accusantium autem similique libero quae! Architecto, quo vel illum ipsa dolores laboriosam totam similique? Aspernatur modi alias tempore assumenda maiores vel iusto repellendus eaque, harum ab esse sed ut sint similique! " />
		</div>
	);
}
export default App;