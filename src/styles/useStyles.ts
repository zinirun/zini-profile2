import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(-45deg, #9723D5, #3F23D5, #23A6D5, #23D5AB)',
        backgroundSize: '400% 400%',
        animation: `$gradient 15s ease infinite`,
    },
    '@keyframes gradient': {
        '0%': {
            backgroundPosition: '0% 50%',
        },
        '50%': {
            backgroundPosition: '100% 50%',
        },
        '100%': {
            backgroundPosition: '0% 50%',
        },
    },
    infoWrapper: {
        background: 'rgba(0, 0, 0, 0.3)',
        color: 'white',
        padding: '4.5%',
    },
    nameWrapper: {
        marginBottom: 20,
    },
    name: {
        fontSize: '2.3rem',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        marginTop: 45,
        marginBottom: 15,
    },
    itemTitle: {
        fontSize: '1.05rem',
        marginBottom: 10,
        fontWeight: 'bold',
        color: '#eee',
    },
    skillChip: {
        margin: theme.spacing(0.5),
        color: '#eee',
        borderColor: '#ddd',
    },
    socialChip: {
        cursor: 'pointer',
        margin: theme.spacing(0.5),
        background: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        fontSize: '0.75rem',
        '&:hover': {
            backgroundColor: '#222',
        },
    },
    gradeChip: {
        margin: theme.spacing(0.5),
        color: '#eee',
        borderColor: '#ddd',
    },
    gradeAvatar: {
        background: '#eee',
        color: '#444 !important',
    },
    itemList: {
        marginBottom: 8,
    },
    itemListText: {
        fontSize: '1.05rem',
    },
    smallItalicText: {
        fontStyle: 'italic',
        fontSize: '0.8rem',
        fontWeight: 'normal',
    },
}));

export default useStyles;
