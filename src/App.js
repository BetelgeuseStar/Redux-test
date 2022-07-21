import React from 'react';
import './styles/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import Navbar from './components/Navbar';
import PostsPage from './pages/PostsPage';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<TodoPage />} />
					<Route path="/posts" element={<PostsPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
