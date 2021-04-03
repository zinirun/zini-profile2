import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        backgroundImage: 'url(./assets/profile.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    infoWrapper: {
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: 40,
    },
    name: {
        fontSize: '2rem',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: '1.65rem',
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
        borderColor: '#aaa',
    },
    gradeChip: {
        margin: theme.spacing(0.5),
        color: '#eee',
        borderColor: '#aaa',
    },
    gradeAvatar: {
        background: '#333',
        color: '#eee !important',
    },
    itemList: {
        marginBottom: 5,
    },
    itemListText: {
        fontSize: '1.025rem',
    },
}));

export default useStyles;
