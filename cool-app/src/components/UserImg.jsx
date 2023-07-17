import {Box} from "@mui/material"


const UserImg = ({avatar, size ="60px"})=>{
	return(
		<Box width={size} height={size}>
			<span style={{objectFit:"cover" , borderRadius: "50%"}} ></span>
			{avatar}

		</Box>

	)


}
export default UserImg
