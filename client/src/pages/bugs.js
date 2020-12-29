import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuNav from '../component/nav';
import Container from '@material-ui/core/Container';
import { useQuery } from "@apollo/react-hooks";
import { QUERY_BUGS } from '../utils/queries';
import { useDispatch, connect } from 'react-redux';
import { ADD_BUG } from '../utils/actions';

// Card components
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        height: '100%'
    },
    bugGrid: {
        marginTop: '70px'
    },
    obtained: {
        backgroundColor: '#009688',
        color: 'white'
    }
  });

function Bugs ({ caughtBugs }) {
    
    const dispatch = useDispatch();
    const {loading, data} = useQuery(QUERY_BUGS);


    const bugs = data?.getBugs || [];
    console.log(bugs);

    const classes = useStyles();

    console.log(caughtBugs);
    
    function addBug(e) {
        const id = e.target.parentNode.getAttribute('data-id');
        console.log(id);
        dispatch({
            type: ADD_BUG,
            bugId: id})

        
    }

    function isObtained(id) {
        if (!caughtBugs.includes(id)) {
            return  <Button data-id={id} size="small" color="primary" onClick={addBug}>
                        Got it!
                    </Button>
        } else {
            return  <Button size="small" color="primary">
                        Don't got it!
                    </Button>
        }
    }

    function haveBug(id) {
        if(caughtBugs.includes(id)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Container>
            <MenuNav />
            <Typography component='h1'>Bugs</Typography>
                <Grid
                    container
                    spacing = {3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.bugGrid}
                >
                    {bugs.map(bug => (
                    <Grid item md={3} sm={6} xs={12} key={bug._id}>
                        <Card className = {haveBug(bug._id) ? classes.obtained : ''}>
                            <CardActionArea>
                            <CardMedia
                                component='img'
                                className={classes.media}
                                image={bug.icon}
                                title="Bug Card"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                {bug.name}
                                </Typography>
                
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                            {isObtained(bug._id)}
                            </CardActions>
                        </Card>
                  </Grid>
                ))}
            </Grid>
        </Container>
    )
}

function mapStateToProps(state) {
    return {
        caughtBugs: state.obtainedBugs
    };

}

export default connect(mapStateToProps)(Bugs);

