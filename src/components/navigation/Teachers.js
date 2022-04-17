import React from "react";
import { Box, Typography, Button, Breadcrumbs, Link } from "@mui/material";
import { Link as Navigation, Outlet } from "react-router-dom";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Teachers() {
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumbs" separator={<NavigateNextIcon />} >
                <Link underline="hover" href="/home">
                    Home
                </Link>
                <Typography color="text.primary">
                    Teachers
                </Typography>
            </Breadcrumbs>

            <Typography variant="h4">
                This is the teachers page.
            </Typography>
            
            <Navigation to="createteacher">
                <Button variant="contained" color="primary" className="textDec">
                    Create Teacher
                </Button>
            </Navigation>
            <Outlet />
        </Box>
    )
}

export default Teachers;