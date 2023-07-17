import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useState, useEffect } from 'react';
import { Box, Card, Grid, Typography, Stack } from "@mui/material";

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
        chart: {
                height: 450,
                type: 'area',
                toolbar: {
                        show: false
                }
        },
        dataLabels: {
                enabled: false
        },
        stroke: {
                curve: 'smooth',
                width: 2
        },
        grid: {
                strokeDashArray: 0
        }
};


export default function WeeklyChar() {
        const [slot, setSlot] = useState('week');

        const theme = useTheme();

        const { primary, secondary } = theme.palette.text;
        const line = theme.palette.divider;

        const [options, setOptions] = useState(areaChartOptions);

        useEffect(() => {
                setOptions((prevState) => ({
                        ...prevState,
                        colors: [theme.palette.primary.main, theme.palette.primary[700]],
                        xaxis: {
                                categories:
                                        slot === 'month'
                                                ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                                                : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                labels: {
                                        style: {
                                                colors: [
                                                        secondary,
                                                        secondary,
                                                        secondary,
                                                        secondary,
                                                        secondary,
                                                        secondary,
                                                        secondary,
                                                        secondary,
                                                        secondary,
                                                        secondary,
                                                        secondary,
                                                        secondary
                                                ]
                                        }
                                },
                                axisBorder: {
                                        show: true,
                                        color: line
                                },
                                tickAmount: slot === 'month' ? 11 : 7
                        },
                        yaxis: {
                                labels: {
                                        style: {
                                                colors: [secondary]
                                        }
                                }
                        },
                        grid: {
                                borderColor: line
                        },
                        tooltip: {
                                theme: 'light'
                        }
                }));
        }, [primary, secondary, line, theme, slot]);

        const [series, setSeries] = useState([
                {
                        name: 'Page Views',
                        data: [0, 86, 28, 115, 48, 210, 136]
                },
                {
                        name: 'Sessions',
                        data: [0, 43, 14, 56, 24, 105, 68]
                }
        ]);

        useEffect(() => {
                setSeries([
                        {
                                name: 'Page Views',
                                data: slot === 'month' ? [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35] : [31, 40, 28, 51, 42, 109, 100]
                        },
                        {
                                name: 'Sessions',
                                data: slot === 'month' ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41] : [11, 32, 45, 32, 34, 52, 41]
                        }
                ]);
        }, [slot]);

        return (

                <Grid  alignItems="center" justifyContent="space-between">
                        <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                        <Grid item>
                                                <Typography variant="h5">Unique Visitor</Typography>
                                        </Grid>
                                        <Grid item>
                                                <Stack direction="row" alignItems="center" spacing={0}>
                                                        <Button
                                                                size="small"
                                                                onClick={() => setSlot("month")}
                                                                color={slot === "month" ? "primary" : "secondary"}
                                                                variant={slot === "month" ? "outlined" : "text"}
                                                        >
                                                                Month
                                                        </Button>
                                                        <Button
                                                                size="small"
                                                                onClick={() => setSlot("week")}
                                                                color={slot === "week" ? "primary" : "secondary"}
                                                                variant={slot === "week" ? "outlined" : "text"}
                                                        >
                                                                Week
                                                        </Button>
                                                </Stack>
                                        </Grid>
                                        <Box sx={{ pt: 1, pr: 2 }}>

                                                <ReactApexChart options={options} series={series} type="area" height={450}  />

                                        </Box>
                                </CardContent>

                        </Card>

                </Grid>
        );
}
