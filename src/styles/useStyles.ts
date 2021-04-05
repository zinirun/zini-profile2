import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
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
    name: {
        marginTop: 5,
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
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#eee',
    },
    skillChip: {
        margin: theme.spacing(0.5),
        color: '#eee',
        borderColor: '#ddd',
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
