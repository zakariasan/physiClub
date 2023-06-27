import {
	Typography,
	Button,
	Box,
	Container,
	CssBaseline,
	createTheme,
	ThemeProvider,
	Avatar,
} from "@mui/material";
import i_student from "../assets/i_student.png";
import i_teacher from "../assets/i-man-teacher-48.png";
import techLanding from "../assets/Formula-pana.svg";
import Nav from "../components/nav"
const Landing = () => {
	return (
		<>
		<Nav />
				<Box
				
				>
					<Container>
						<Box
							sx={{
								display: "flex",
							}}
						>
							<Box>
								<Typography
									variant="h1"
									component="h1"
									sx={{ fontWeight: "bold",paddingTop:7, fontSize:58 }}
								>
									For every student,every classroom.Real
									results.
								</Typography>

								<Typography variant="h3" gutterBottom sx={{fontFamily: 'Poppins'}}>
									We're courses with the mission to provide
									free, world-class education for anyone and
									anywhere.
								</Typography>
								<Box sx={{ display: "flex",fontFamily: 'Poppins' }}>
									<p>Sign In as :</p>
									<Button
										variant="contained"
										disableElevation
										sx={{
											marginX: "30px",
											borderRadius: "20px",
										}}
										color="neutral"
									>
										<Avatar
											alt="i_teacher"
											src={i_teacher}
										sx={{
											marginX: "10px",
										 }}
										/>
										Teacher
									</Button>
									<Button
										variant="contained"
										disableElevation
									sx={{ borderRadius: "20px",

											marginX: "10px",
									}}
										color="neutral"
									>
										<Avatar
											alt="i_student"
											src={i_student}
										/>
										Student
									</Button>
								</Box>
							</Box>

							<Box sx={{ width: "100%" }}>
								<img src={techLanding} alt="" />
							</Box>
						</Box>
					</Container>
				</Box>
		</>
	);
};
export default Landing;
