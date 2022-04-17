import React from "react";
import { Box, Typography, Breadcrumbs } from "@mui/material";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Home() {
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumbs" separator={<NavigateNextIcon />} >
                <Typography color="text.primary">
                    Home
                </Typography>
            </Breadcrumbs>

            <Typography variant="h4">
                This is the home page.
            </Typography>
        </Box>
    )
}

export default Home;