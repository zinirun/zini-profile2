import { Avatar, Chip, Container, Link } from '@material-ui/core';
import profile from './configs/profile';
import useStyles from './styles/useStyles';

const { skills, projects, opensources, education } = profile;

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.infoWrapper} maxWidth="md">
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
                            avatar={
                                skill.avatarSrc ? (
                                    <Avatar alt={skill.name} src={skill.avatarSrc} />
                                ) : (
                                    <></>
                                )
                            }
                            className={classes.skillChip}
                            key={idx}
                            label={skill.name}
                            variant="outlined"
                        />
                    ))}

                    <p className={classes.itemTitle}>Frontend</p>
                    {skills.frontend.map((skill, idx) => (
                        <Chip
                            avatar={
                                skill.avatarSrc ? (
                                    <Avatar alt={skill.name} src={skill.avatarSrc} />
                                ) : (
                                    <></>
                                )
                            }
                            className={classes.skillChip}
                            key={idx}
                            label={skill.name}
                            variant="outlined"
                        />
                    ))}

                    <p className={classes.itemTitle}>Database</p>
                    {skills.database.map((skill, idx) => (
                        <Chip
                            avatar={
                                skill.avatarSrc ? (
                                    <Avatar alt={skill.name} src={skill.avatarSrc} />
                                ) : (
                                    <></>
                                )
                            }
                            className={classes.skillChip}
                            key={idx}
                            label={skill.name}
                            variant="outlined"
                        />
                    ))}

                    <p className={classes.itemTitle}>Infrastructure</p>
                    {skills.infrastructure.map((skill, idx) => (
                        <Chip
                            avatar={
                                skill.avatarSrc ? (
                                    <Avatar alt={skill.name} src={skill.avatarSrc} />
                                ) : (
                                    <></>
                                )
                            }
                            className={classes.skillChip}
                            key={idx}
                            label={skill.name}
                            variant="outlined"
                        />
                    ))}
                </div>

                <div>
                    <p className={classes.sectionTitle}>Projects</p>
                    {projects.map((item, idx) => (
                        <li key={idx} className={classes.itemList}>
                            <Link href={item.link} color="inherit" target="_blank">
                                <span className={classes.itemListText}>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </div>

                <div>
                    <p className={classes.sectionTitle}>Opensources</p>
                    {opensources.map((item, idx) => (
                        <li key={idx} className={classes.itemList}>
                            <Link href={item.link} color="inherit" target="_blank">
                                <span className={classes.itemListText}>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </div>

                <div>
                    <p className={classes.sectionTitle}>Education</p>
                    <p className={classes.itemTitle}>
                        {education.highName} - {education.highLocation}
                    </p>
                    <p className={classes.itemTitle}>
                        {education.univName} - {education.univLocation}
                    </p>
                    <p className={classes.itemTitle}>Courses taken</p>
                    {education.grades.map((item, idx) => (
                        <Chip
                            avatar={<Avatar className={classes.gradeAvatar}>{item.grade}</Avatar>}
                            className={classes.gradeChip}
                            key={idx}
                            label={item.subject}
                            variant="outlined"
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default App;
