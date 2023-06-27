import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/dashboard/Dashboard"
function App() {
	const theme = createTheme(themeSettings("light"));

	return (
		<div className="app">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/dashboard/*" element={<Dashboard />} />
					<Route path="/About" element={<About />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Blog" element={<Contact />} />
				</Routes>
			</ThemeProvider>
		</div>
	);
}

export default App;
