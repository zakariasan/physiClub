import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
	const theme = createTheme(themeSettings("light"));

	return (
		<div className="app">
			<Router>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/dashboard/*" element={<Dashboard />} />
						<Route path="/About" element={<About />} />
						<Route path="/Contact" element={<Contact />} />
						<Route path="/Blog" element={<Contact />} />
						<Route path="/profile/:userId" element={<Profile />} />
					</Routes>
				</ThemeProvider>
			</Router>
		</div>
	);
}

export default App;
