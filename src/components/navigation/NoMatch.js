import React from "react";
import { Box, Typography } from "@mui/material";

export default function NoMatch() {
    return (
        <Box>
            <Typography variant="h4">
                No Match Found.
            </Typography>
            <Typography variant="h2">
                Error : 404
            </Typography>
        </Box>
    )
}