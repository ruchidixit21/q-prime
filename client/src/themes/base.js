// See https://mui.com/material-ui/customization/default-theme for customization options
import { createTheme } from '@mui/material'
export const basicTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#EF8EC3',
        },
        secondary: {
            main: '#EA3947',
        },
        success: {
            main: '#43a047',
        },
        error: {
            main: '#F27685',
        },
        info: {
            main: '#5DB7DE',
        },
        background: {
            paper: '#F0F0F0',
        },
        cancel: {
            main: '#9e9e9e',
        },
        unfreeze: {
            main: '#ba68c8',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'contained' && {
                        color: '#fff',
                        padding: "5px 20px",
                    }),
                }),
            },
        },
        MuiDialogContent: {
            styleOverrides: {
                root: () => ({
                    ...({
                        padding: "32px",
                    }),
                }),
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: () => ({
                    ...({
                        fontSize: "15px",
                    }),
                }),
            },
        }
    },
    typography: {
        fontSize: 15,
        htmlFontSize: 15,
        h1: {
            fontSize: 38,
        },
        h2: {
            fontSize: 34,
        },
        h3: {
            fontSize: 30,
        },
        h4: {
            fontSize: 26,
        },
        h5: {
            fontSize: 22,
        },
        h6: {
            fontSize: 18,
        },
        body1: {
            fontSize: 16,
        },
        body2: {
            fontSize: 14,
        },
        button: {
            fontSize: 14
        }
    },
});
