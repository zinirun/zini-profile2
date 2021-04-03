import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles/globalStyle';
import './styles/index.css';

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root'),
);
