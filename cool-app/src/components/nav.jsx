import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import userL from "../assets/react.svg";
const pages = ["About", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
import { Outlet, Link } from "react-router-dom";

const DecorationNone= { textDecoration:'none',  color: 'currentColor'}
function Nav() {
	const [Loged, setLoged] = React.useState(0);
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" sx={{ boxShadow: 3, backgroundColor: "white" }}>
			<Container
				maxWidth="xl"	
			>
				<Toolbar disableGutters>
					<AdbIcon
						sx={{
							display: { xs: "none", md: "flex" },
							mr: 1,
							color: "#202021",
						}}
					/>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "Maven Pro",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "#202021",
							textDecoration: "none",
						}}
					>
						PhysiClub...
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="#202021"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign="center">
										<Link to={`/${page}`} style={DecorationNone}> {page}</Link>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<AdbIcon
						sx={{
							display: { xs: "flex", md: "none" },
							mr: 1,
							color: "#202021",
						}}
					/>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href=""
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "Maven Pro",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "#202021",
							textDecoration: "none",
						}}
					>
						PhysiClub
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						{pages.map((page) => (
							<Link to={`/${page}`} style={DecorationNone} >
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "black",
										display: "block",
										fontFamily: "Maven Pro",
										textDecoration: 'none'
									}}
								>
									{page}
								</Button>
							</Link>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						{Loged ? (
							<>
								<Tooltip title="Open settings">
									<IconButton
										onClick={handleOpenUserMenu}
										sx={{ p: 0 }}
									>
										<Avatar alt="Remy Sharp" src={userL} />
									</IconButton>
								</Tooltip>

								<Menu
									sx={{ mt: "45px" }}
									id="menu-appbar"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									{settings.map((setting) => (
										<MenuItem
											key={setting}
											onClick={handleCloseUserMenu}
										>
											<Typography textAlign="center">
												{setting}
											</Typography>
										</MenuItem>
									))}
								</Menu>
							</>
						) : (
							<Button
								variant="contained"
							color="primary"
								sx={{
									fontFamily: "Maven Pro",
								}}
							>
								Login
							</Button>
						)}
					</Box>
				</Toolbar>
			</Container>
			<Outlet />
		</AppBar>
	);
}
export default Nav;
