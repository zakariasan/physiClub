import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Link from '@mui/material/Link';

import Typography from "@mui/material/Typography";
export default function Courses() {
	return (
		<Box>
			<h1>My Courses </h1>
						<List
				sx={{
					width: "100%",
					minWidth: 360,
					//bgcolor: "background.paper",
				}}
			>
				<ListItem alignItems="flex-start">
					<ListItemText
						primary={
							<React.Fragment>
								<Typography
									sx={{ display: "inline" }}
									component="h3"
									variant="h3"
									color="text.primary"
								>
									<Link  href="/1234" underline="hover"> Map your mind</Link>
								</Typography>
							</React.Fragment>
						}
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: "inline" }}
									component="span"
									variant="h4"
									color="text.primary"
								>
									started on Jun 22, 2023 4:00 AM, deadline
									before Jun 26, 2023 4:00 AM (in 3 days)
								</Typography>
								{
									" — 0,0%"
								}
							</React.Fragment>
						}
					/>
				</ListItem>
				<Divider variant="inset" component="li" />

<ListItem alignItems="flex-start">
					<ListItemText
						primary={
							<React.Fragment>
								<Typography
									sx={{ display: "inline" }}
									component="h3"
									variant="h3"
									color="text.primary"
								>
									<Link  href="/1234" underline="hover"> Map your mind</Link>
								</Typography>
							</React.Fragment>
						}
						secondary={
							<React.Fragment>
								<Typography
									sx={{ display: "inline" }}
									component="span"
									variant="h4"
									color="text.primary"
								>
									started on Jun 22, 2023 4:00 AM, deadline
									before Jun 26, 2023 4:00 AM (in 3 days)
								</Typography>
								{
									" — 0,0%"
								}
							</React.Fragment>
						}
					/>
				</ListItem>



				<Divider variant="inset" component="li" />
			</List>
		</Box>
	);
}
