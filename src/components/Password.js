import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

function Password() {

    const [ showPassword, setShowPassword ] = useState(false);

    return (
        <section>
            <div>
                <TextField
                    id="outlined-password-input"
                    variant="filled"
                    label="Password"
                    size="small"
                    type={ showPassword ? "text" : "password" } 
                />
                <Button
                    variant="text"
                    color="primary"
                    size="large"
                    onClick={() => {
                        setShowPassword(!showPassword);
                        console.log(showPassword);
                    }}
                >
                    { showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon /> }
                </Button>
            </div>
        </section>
    )
}

export default Password;