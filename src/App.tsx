import { Avatar, Chip, Container, Grid, Link } from '@material-ui/core';
import profile from './configs/profile';
import useStyles from './styles/useStyles';

const { social, skills, projects, opensources, education } = profile;

function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container className={classes.infoWrapper} maxWidth="md">
                <Grid className={classes.nameWrapper} container alignItems="center" spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <span className={classes.name}>{profile.name}</span>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Chip
                            className={classes.socialChip}
                            label="Github"
                            component="a"
                            target="_blank"
                            href={social.github}
                            size="small"
                        />
                        <Chip
                            className={classes.socialChip}
                            label="Dev Blog"
                            component="a"
                            target="_blank"
                            href={social.blog}
                            size="small"
                        />
                        <Chip
                            className={classes.socialChip}
                            label="Instagram"
                            component="a"
                            target="_blank"
                            href={social.instagram}
                            size="small"
                        />
                        <Chip className={classes.socialChip} label={social.email} size="small" />
                    </Grid>
                </Grid>
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

                <p className={classes.sectionTitle}>Projects</p>
                {projects.map((item, idx) => (
                    <li key={idx} className={classes.itemList}>
                        <Link href={item.link} color="inherit" target="_blank">
                            <span className={classes.itemListText}>{item.name}</span>
                        </Link>
                    </li>
                ))}

                <p className={classes.sectionTitle}>Opensources</p>
                {opensources.map((item, idx) => (
                    <li key={idx} className={classes.itemList}>
                        <Link href={item.link} color="inherit" target="_blank">
                            <span className={classes.itemListText}>{item.name}</span>
                        </Link>
                    </li>
                ))}

                <p className={classes.sectionTitle}>Education</p>
                <p className={classes.itemTitle}>
                    {education.highName}{' '}
                    <span className={classes.smallItalicText}>{education.highLocation}</span>
                </p>
                <p className={classes.itemTitle}>
                    {education.univName}{' '}
                    <span className={classes.smallItalicText}>{education.univDept},</span>{' '}
                    <span className={classes.smallItalicText}>{education.univLocation}</span>
                </p>
                <p className={classes.itemTitle}>Related Courses Taken</p>
                {education.grades.map((item, idx) => (
                    <Chip
                        avatar={<Avatar className={classes.gradeAvatar}>{item.grade}</Avatar>}
                        className={classes.gradeChip}
                        key={idx}
                        label={item.subject}
                        variant="outlined"
                    />
                ))}
            </Container>
        </div>
    );
}

export default App;
