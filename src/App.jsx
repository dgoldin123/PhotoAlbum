import React from "react";
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, 
    CssBaseline, Grid, Toolbar, Container } from "@material-ui/core"; 
import { PhotoCamera } from "@material-ui/icons";
import { Fragment } from "react";
import useStyles from "./styles";
const cards =[1,2,3,4,5,6,7,8,9];

const App = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6">&nbsp;Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph gutterBottom>
                            A Photo Album Using React And Material UI
                        </Typography>
                        <div className={classes.buttons} >
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">View Photos</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">View Photos</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4} justifyContent="center">
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" 
                                        title="image here" />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">Heading</Typography>
                                        <Typography>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
                                            dolore magna aliqua laboris nisi ut aliquip 
                                            
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Copyright @2022 All Rights Reserved   
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecodary">
                    Sub Footer
                </Typography>
            </footer>
        </Fragment>
    );
}

export default App
