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
        fontSize: '1.1rem',
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
        marginBottom: 8,
    },
    itemListText: {
        fontSize: '1.1rem',
    },
}));

export default useStyles;
