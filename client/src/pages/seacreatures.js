import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuNav from '../component/nav';
import Container from '@material-ui/core/Container';
import { useQuery } from "@apollo/react-hooks";
import { QUERY_SEACREATURES } from '../utils/queries';
import { useDispatch, connect } from 'react-redux';
import { ADD_SEACREATURE, REMOVE_SEACREATURE } from '../utils/actions';

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

  function SeaCreatures ({ caughtSea }) {
    
    const dispatch = useDispatch();
    const {loading, data} = useQuery(QUERY_SEACREATURES);


    const creatures = data?.getSeaCreatures || [];
    console.log(creatures);

    const classes = useStyles();

    console.log(caughtSea);
    
    function addSeaCreature(e) {
        const id = e.target.parentNode.getAttribute('data-id');
        console.log(id);
        dispatch({
            type: ADD_SEACREATURE,
            creatureId: id})

        }
    
    function removeSeaCreature(e) {
        const id = e.target.parentNode.getAttribute('data-id');
        dispatch({
            type: REMOVE_SEACREATURE,
            creatureId: id
        })
    }

    function isObtained(id) {
        if (!caughtSea.includes(id)) {
            return  <Button data-id={id} size="small" color="primary" onClick={addSeaCreature}>
                        Got it!
                    </Button>
        } else {
            return  <Button data-id={id} size="small" color="primary" onClick={removeSeaCreature}>
                        Don't got it!
                    </Button>
        }
    }

    function haveSeaCreature(id) {
        if(caughtSea.includes(id)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Container>
            <MenuNav />
            <Typography component='h1'>Sea Creatures</Typography>
                <Grid
                    container
                    spacing = {3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.seaCreatureGrid}
                >
                    {creatures.map(creature => (
                    <Grid item md={3} sm={6} xs={12} key={creature._id}>
                        <Card className = {haveSeaCreature(creature._id) ? classes.obtained : ''}>
                            <CardActionArea>
                            <CardMedia
                                component='img'
                                className={classes.media}
                                image={creature.icon}
                                title="Bug Card"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    {creature.name}
                                </Typography>
                
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {isObtained(creature._id)}
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
        caughtSea: state.obtainedSeaCreatures
    };

}

export default connect(mapStateToProps)(SeaCreatures);