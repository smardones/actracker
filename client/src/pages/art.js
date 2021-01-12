import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuNav from '../component/nav';
import Container from '@material-ui/core/Container';
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ART} from '../utils/queries';
import { useDispatch, connect } from 'react-redux';
import { ADD_ART, REMOVE_ART} from '../utils/actions';

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

function Art ({ collectedArt }) {
    
    const dispatch = useDispatch();
    const {loading, data} = useQuery(QUERY_ART);

    const retrievedArt = data?.getArt || [];
    
    const classes = useStyles();

    function addArt(e) {
        const id = e.target.parentNode.getAttribute('data-id');
        console.log(id);
        dispatch({
            type: ADD_ART,
            artId: id})

        }
    
    function removeArt(e) {
        const id = e.target.parentNode.getAttribute('data-id');
        dispatch({
            type: REMOVE_ART,
            artId: id
        })
    }

    function isObtained(id) {
        if (!collectedArt.includes(id)) {
            return  <Button data-id={id} size="small" color="primary" onClick={addArt}>
                        Got it!
                    </Button>
        } else {
            return  <Button data-id={id} size="small" color="primary" onClick={removeArt}>
                        Don't got it!
                    </Button>
        }
    }

    function haveArt(id) {
        if(collectedArt.includes(id)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Container>
            <MenuNav />
            <Typography component='h1'>Art</Typography>
                <Grid
                    container
                    spacing = {3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.bugGrid}
                >
                    {retrievedArt.map(artPiece => (
                    <Grid item md={3} sm={6} xs={12} key={artPiece._id}>
                        <Card className = {haveArt(artPiece._id) ? classes.obtained : ''}>
                            <CardActionArea>
                            <CardMedia
                                component='img'
                                className={classes.media}
                                image={artPiece.image}
                                title="Art Card"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    {artPiece.name}
                                </Typography>
                
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {isObtained(artPiece._id)}
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
        collectedArt: state.obtainedArt
    };

}

export default connect(mapStateToProps)(Art);

