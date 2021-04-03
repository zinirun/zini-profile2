import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    imgContainer: {
        backgroundColor: 'white',
        backgroundImage: 'url(./assets/profile.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    name: {
        fontSize: '1.45rem',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: '1.15rem',
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        marginTop: 40,
    },
    itemTitle: {
        fontSize: '0.9rem',
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#222',
    },
    skillChip: {
        margin: theme.spacing(0.4),
        color: '#333',
        borderColor: '#ccc',
    },
    itemList: {
        marginBottom: 5,
    },
    itemListText: {
        fontSize: '0.95rem',
    },
}));

export default useStyles;
