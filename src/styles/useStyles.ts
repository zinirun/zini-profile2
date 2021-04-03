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
        fontSize: '1.4rem',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: '1.15rem',
        fontWeight: 'bold',
        color: theme.palette.primary.main,
    },
    itemTitle: {
        fontSize: '0.9rem',
        marginBottom: 8,
        fontWeight: 'bold',
    },
    skillChip: {
        margin: theme.spacing(0.4),
    },
}));

export default useStyles;
