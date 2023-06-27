import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Typography from "@mui/material/Typography";

import AsideDash from "./asideDash.jsx";
import Progress from "./Progress"
import Courses from "./Courses"
import Assesment from "./Assesment.jsx";
import Event from "./Event"
import Settings from "./Settings"

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

export default function Dashboard() {
	return (
		<Box sx={{ display: "flex" }}>
			<AsideDash />

			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Routes>
					<Route path="/" element={<Progress />} />
					<Route path="/courses" element={<Courses />} />
					<Route path="/assesment" element={<Assesment />} />
					<Route path="/event" element={<Event />} />
					<Route path="/Settings" element={<Settings />} />
				</Routes>
			</Box>
		</Box>
	);
}
