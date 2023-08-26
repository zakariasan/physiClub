import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home.jsx";
import Login from "./pages/Login.jsx"

function About() {
	return (
		<div style={{ padding: 20 }}>
			<h2>About View</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adip.</p>
		</div>
	);
}

function NoMatch() {
	return (
		<div style={{ padding: 20 }}>
			<h2 className='text-3xl font-bold underline'>404: Page Not Found</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adip.</p>
		</div>
	);
}
function App() {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</Router>
	);
}

export default App;
