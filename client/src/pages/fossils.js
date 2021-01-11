import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuNav from '../component/nav';
import Container from '@material-ui/core/Container';
import { useQuery } from "@apollo/react-hooks";
import { QUERY_FOSSILS } from '../utils/queries';
import { useDispatch, connect } from 'react-redux';
import { ADD_FOSSIL, REMOVE_FOSSIL } from '../utils/actions';

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

  function Fossils ({ foundFossils }) {
    
    const dispatch = useDispatch();
    const {loading, data} = useQuery(QUERY_FOSSILS);


    const fossils = data?.getFossils || [];
    console.log(fossils);

    const classes = useStyles();
    
    function addFossil(e) {
        const id = e.target.parentNode.getAttribute('data-id');
        console.log(id);
        dispatch({
            type: ADD_FOSSIL,
            fossilId: id})

        }
    
    function removeFossil(e) {
        const id = e.target.parentNode.getAttribute('data-id');
        dispatch({
            type: REMOVE_FOSSIL,
            fossilId: id
        })
    }

    function isObtained(id) {
        if (!foundFossils.includes(id)) {
            return  <Button data-id={id} size="small" color="primary" onClick={addFossil}>
                        Got it!
                    </Button>
        } else {
            return  <Button data-id={id} size="small" color="primary" onClick={removeFossil}>
                        Don't got it!
                    </Button>
        }
    }

    function haveFossil(id) {
        if(foundFossils.includes(id)) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Container>
            <MenuNav />
            <Typography component='h1'>Fossils</Typography>
                <Grid
                    container
                    spacing = {3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.fossilGrid}
                >
                    {fossils.map(fossil => (
                    <Grid item md={3} sm={6} xs={12} key={fossil._id}>
                        <Card className = {haveFossil(fossil._id) ? classes.obtained : ''}>
                            <CardActionArea>
                            <CardMedia
                                component='img'
                                className={classes.media}
                                image={fossil.image}
                                title="Fossil Card"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" >
                                    {fossil.name}
                                </Typography>
                
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {isObtained(fossil._id)}
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
        foundFossils: state.obtainedFossils
    };

}

export default connect(mapStateToProps)(Fossils);
