import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import Form2 from '../components/Form2.jsx'
const Login = ()=>{
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        p="1rem 6%"
        textAlign="center"
      >
        

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="1rem"
        m="2rem auto"
        borderRadius="1.5rem"
      >
<Typography fontWeight="bold" fontSize="32px" color="primary" >
          PhysiClub
        </Typography>
      </Box>
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to PhysiClub, the E-Learning Plate Forme To imporove Your Skills!! 
        </Typography>
        <Form2 />
      </Box>
    </Box>
  );

}

export default Login
