import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    typography: {
        fontFamily: "'Noto Sans KR', 'Roboto', sans-serif",
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
