import * as React from "react";
import SayHi from "../../components/cards/sayHi.jsx";

import { useState, useEffect } from 'react';
import { Box, Card, Grid, Typography, Stack, Button } from "@mui/material";
import UpComingTasks from "../../components/cards/UpComingTasks.jsx";
import MonthBarChar from "../../components/cards/MonthBarChar.jsx";
import WeeklyChar from "../../components/cards/WeeklyChar.jsx";
export default function Progress() {

        return (
                <Grid container rowSpacing={2.5} columnSpacing={2.75}>
                        {/* row 1 */}
                        <Grid item xs={12} sm={8} md={8} lg={8} sx={{ mb: -2.25 }}>

                                <Grid item xs={12} sx={{ mb: 1 }}>
                                        <Typography variant="h5">Dashboard</Typography>
                                        <SayHi />
                                </Grid>
                                <Grid item xs={12} sx={{ mb: 1 }}>

                                        <WeeklyChar />
                                </Grid>

                        </Grid>

                        <Grid item xs={12} sm={4} md={4} lg={4}>
                                <Grid>
                                        <Typography variant="h5">Up Coming !</Typography>
                                        <UpComingTasks />
                                </Grid>
                                <Grid item  >

                                        <Typography variant="h5">Dashboard 222</Typography>
                                        <MonthBarChar />
                                </Grid>
                        </Grid>
                </Grid>
                        )
}
