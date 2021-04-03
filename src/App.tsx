import { Chip, Container, Grid, Paper } from '@material-ui/core';
import profile from './configs/profile';
import useStyles from './styles/useStyles';

const { skills, projects, opensources } = profile;

function App() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            {/* <Grid
                    item
                    xs={12}
                    sm={5}
                    className={classes.imgContainer}
                    component={Paper}
                    elevation={5}
                    square
                /> */}
            <div>
                <p className={classes.name}>{profile.name}</p>
            </div>
            <div>
                <p className={classes.sectionTitle}>Skills</p>
                <p className={classes.itemTitle}>Backend</p>
                {skills.backend.map((skill, idx) => (
                    <Chip
                        className={classes.skillChip}
                        key={idx}
                        label={skill.name}
                        variant="outlined"
                        color="primary"
                    />
                ))}

                <p className={classes.itemTitle}>Frontend</p>
                {skills.frontend.map((skill, idx) => (
                    <Chip
                        className={classes.skillChip}
                        key={idx}
                        label={skill.name}
                        variant="outlined"
                        color="primary"
                    />
                ))}

                <p className={classes.itemTitle}>Database</p>
                {skills.database.map((skill, idx) => (
                    <Chip
                        className={classes.skillChip}
                        key={idx}
                        label={skill.name}
                        variant="outlined"
                        color="primary"
                    />
                ))}

                <p className={classes.itemTitle}>Infrastructure</p>
                {skills.infrastructure.map((skill, idx) => (
                    <Chip
                        className={classes.skillChip}
                        key={idx}
                        label={skill.name}
                        variant="outlined"
                        color="primary"
                    />
                ))}
            </div>

            <div>
                <p className={classes.sectionTitle}>Projects</p>
                {projects.map((item, idx) => (
                    <li key={idx}>{item.name}</li>
                ))}
            </div>

            <div>
                <p className={classes.sectionTitle}>Opensources</p>
                {opensources.map((item, idx) => (
                    <li key={idx}>{item.name}</li>
                ))}
            </div>
        </Container>
    );
}

export default App;
