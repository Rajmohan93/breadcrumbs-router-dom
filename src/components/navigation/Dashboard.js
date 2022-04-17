import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Dashboard() {
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumbs" separator={<NavigateNextIcon />} >
                <Link underline="hover" href="/home">
                    Home
                </Link>
                <Typography color="text.primary">
                    Dashboard
                </Typography>
            </Breadcrumbs>

            <Typography variant="h4">
                This is the dashboard page.
            </Typography>
        </Box>
    )
}

export default Dashboard;