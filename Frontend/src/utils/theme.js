import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#abc0a6",
            contrastText: "#edf1ec",
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
    components: {
        MuiTypography: {
            defaultProps: {
                fontWeight: 500,
            },
        },
        MuiSkeleton: {
            defaultProps: {
                animation: "wave",
            },
            styleOverrides: {
                root: {
                    "-webkit-transform": "scale(1)",
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    '&::placeholder': {
                        color: 'red',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    color: "#abc0a6",
                    '& label': {
                        fontWeight: 500,
                        color: '#edf1ec',
                    },
                    '&::placeholder': {
                        color: '#edf1ec',
                    },
                    '& label.Mui-focused': {
                        fontWeight: 600,
                        color: '#abc0a6',
                    },
                    '& .Mui-focused.MuiInput-underline:after': {
                        borderBottomColor: '#abc0a6',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#4a6760',
                        },
                        '&:hover fieldset': {
                            borderColor: '#4a6760',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#4a6760',
                        },
                    },
                    ".css-10czeob-MuiInputBase-root-MuiInput-root:before, .css-10czeob-MuiInputBase-root-MuiInput-root:hover, .css-10czeob-MuiInputBase-root-MuiInput-root:before": {
                        borderBottom: "2px solid #4a6760"
                    },
                    "input": {
                        color: '#abc0a6'
                    },
                },
            },
            variants: [
                {
                    props: { variant: "standard" },
                    style: {
                        "input::before": {
                            borderBottomColor: "red !important"
                        }
                    }
                }
            ]
        },
        MuiLoadingButton: {
            defaultProps: {
                variant: "outlined",
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    color: "#5c5c5c",
                    fontWeight: 600,
                    minWidth: 223,
                },
                filled: {
                    fontWeight: 600,
                    color: "#5c5c5c",
                },
            },
        },
        MuiAutocomplete: {
            styleOverrides: {
                root: {
                    minWidth: 223,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: "outlined",
            },
            variants: [
                {
                    props: { variant: "outlined" },
                    style: {
                        borderColor: '#4a6760',
                        borderWidth: "2px",
                        ":hover": {
                            // borderColor: '#4a6760',
                            borderWidth: "2px",
                        },
                    },
                },
                {
                    props: { variant: "contained" },
                    style: {
                        color: '#f8f8f8',
                        // backgroundColor: "#abc0a6",
                        backgroundColor: "#4a6760",
                        border: 0,
                        ":hover": {
                            // backgroundColor: "#8b9e86",
                            backgroundColor: "#3d554f",
                        },
                    },
                },
            ],
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    borderRadius: "5px",
                    textTransform: "none",
                    padding: "10px 20px",
                },
            },
        },
    },
});

export default theme;