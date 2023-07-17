import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../state";

import { useState } from "react";

function Copyright(props) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" href="/home">
				PhysiClub
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Form2() {
	const [pageType, setPageType] = useState("login");
	const [errno, setErrno] = useState("");
	const [infos, setInfos] = useState({
		firstName: "",
		lastName: "",
		className: "",
		email: "",
		password: "",
		role: "",
		gender: "",
		birthday: null,
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isLogin = pageType === "login";
	const isRegister = pageType === "register";

	const register = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const values = {
			firstName: data.get("firstName"),
			lastName: data.get("lastName"),
			avatar: await fetch(
				`https://api.multiavatar.com/${infos.firstName}.svg?apikey=J6gwM1OXWQ9U2H`
			).then((res) => res.text()),
			email: data.get("email"),
			password: data.get("password"),
			role: data.get("role"),
			gender: data.get("gender"),
			birthday: infos.birthday,
			className: data.get("className"),
		};
		const savedUserResponse = await fetch(
			"http://localhost:1337/auth/register",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			}
		);
		const savedUser = await savedUserResponse.json();

		if (savedUser) {
			setPageType("login");
		}
	};

	const login = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const values = {
			email: data.get("email"),
			password: data.get("password"),
		};

		const loggedInResponse = await fetch(
			"http://localhost:1337/auth/login",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			}
		);
		const loggedIn = await loggedInResponse.json();

		console.log(loggedInResponse, loggedIn);
		if (loggedInResponse.status == 200) {
			dispatch(
				setLogin({
					user: loggedIn.user,
					token: loggedIn.token,
				})
			);

			navigate("/dashboard");
		} else {
			let err = loggedIn.msg;
			setErrno(<Alert severity="error">{err}!</Alert>);
		}
		setInfos({
			firstName: "",
			lastName: "",
			className: "",
			email: "",
			password: "",
			role: "",
			gender: "",
			birthday: null,
		});
	};

	const handleSubmit = async (event) => {
		if (isLogin) await login(event);
		if (isRegister) await register(event);
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />

			{errno}
			<Box
				sx={{
					//marginTop: 1,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign {isLogin ? "in" : "Up"}
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}
				>
					{isRegister && (
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									value={infos.firstName}
									onChange={(e) =>
										setInfos({
											...infos,
											firstName: e.target.value,
										})
									}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
									value={infos.lastName}
									onChange={(e) =>
										setInfos({
											...infos,
											lastName: e.target.value,
										})
									}
								/>
							</Grid>

							<Grid item xs={12} sm={6}>
								<InputLabel id="role">Role</InputLabel>
								<Select
									labelId="role"
									id="role"
									label="Role"
									name="role"
									required
									fullWidth
									value={infos.role}
									onChange={(e) =>
										setInfos({
											...infos,
											role: e.target.value,
										})
									}
								>
									<MenuItem value="Teacher">Teacher</MenuItem>
									<MenuItem value="Student">Student</MenuItem>
								</Select>
							</Grid>
							<Grid item xs={12} sm={6}>
								<InputLabel id="gender">Gender</InputLabel>
								<Select
									labelId="gender"
									id="gender"
									label="Gender"
									name="gender"
									required
									fullWidth
									value={infos.gender}
									onChange={(e) =>
										setInfos({
											...infos,
											gender: e.target.value,
										})
									}
								>
									<MenuItem value="Male">Male</MenuItem>
									<MenuItem value="Female">Female</MenuItem>
								</Select>
							</Grid>

							<Grid item xs={12} sm={5}>
								<LocalizationProvider
									dateAdapter={AdapterDayjs}
								>
									<DatePicker
										labelId="birthday"
										id="birthday"
										label="birthday"
										name="birthday"
										inputFormat="MM/DD/YYYY"
										value={infos.birthday}
										onChange={(e) =>
											setInfos({
												...infos,
												birthday: e.$d.toString(),
											})
										}
									/>
								</LocalizationProvider>
							</Grid>
							<Grid item xs={12} sm={7}>
								<TextField
									required
									fullWidth
									id="className"
									label="class Name"
									name="className"
									autoComplete="class Name"
									value={infos.className}
									onChange={(e) =>
										setInfos({
											...infos,
											className: e.target.value,
										})
									}
								/>
							</Grid>
						</Grid>
					)}

					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						value={infos.email}
						onChange={(e) =>
							setInfos({ ...infos, email: e.target.value })
						}
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						value={infos.password}
						onChange={(e) =>
							setInfos({ ...infos, password: e.target.value })
						}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						{isLogin ? "Sign In" : "Sign Up"}
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="/home" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Typography
								onClick={() => {
									setPageType(isLogin ? "register" : "login");
								}}
								sx={{
									textDecoration: "underline",
									//color: palette.primary.main,
									"&:hover": {
										cursor: "pointer",
										//color: palette.primary.light,
									},
								}}
							>
								{isLogin
									? " Don't have an account? Sign Up"
									: "Already have an account? Login here."}
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	);
}
