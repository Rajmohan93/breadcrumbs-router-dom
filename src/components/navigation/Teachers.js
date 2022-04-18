import React from "react";
import { Box, Typography, Button, Breadcrumbs, Link } from "@mui/material";
import { Outlet } from "react-router-dom";

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
            
            <Link href="/teachers/create">
                <Button variant="contained" color="primary" className="textDec">
                    Create
                </Button>
            </Link>
            <Outlet />
        </Box>
    )
}

export default Teachers;