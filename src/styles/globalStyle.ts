import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    typography: {
        fontFamily:
            "'-apple-system', 'Noto Sans KR', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'",
    },
    palette: {
        primary: {
            main: '#1ef995',
            light: '#1bd89f',
            dark: '#0ab07e',
        },
        secondary: {
            main: '#F12777',
        },
    },
});
