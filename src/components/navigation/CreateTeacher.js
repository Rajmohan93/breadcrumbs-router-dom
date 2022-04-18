import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function CreateTeacher() {
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumbs" separator={<NavigateNextIcon />} >
                <Link underline="hover" href="/home">
                    Home
                </Link>
                <Link underline="hover" href="/teachers">
                    Teachers
                </Link>
                <Typography color="text.primary">
                    Create
                </Typography>
            </Breadcrumbs>

            <Typography variant="h4">
                This is the create teacher page.
            </Typography>
        </Box>
    )
}

export default CreateTeacher;