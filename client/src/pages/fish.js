import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuNav from '../component/nav';
import Container from '@material-ui/core/Container';
import { useQuery } from "@apollo/react-hooks";
import { QUERY_FISH } from '../utils/queries';
import { useDispatch, connect } from 'react-redux';
// import { ADD_BUG, REMOVE_BUG } from '../utils/actions';

// Card components
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ADD_FISH, REMOVE_FISH } from '../utils/actions';

const useStyles = makeStyles({
    root: {
        height: '100%'
    },
    fishGrid: {
        marginTop: '10px'
    },
    obtained: {
        backgroundColor: '#009688',
        color: 'white'
    },
    pageTitle: {
        fontSize: '3rem',
        marginTop: '30px'
    }
  });

  function Fish ({ caughtFish }) {
      const dispatch = useDispatch();
      const {loading, data} = useQuery(QUERY_FISH);

      
      const fish = data?.getFish || [];
      console.log(fish);

      const classes = useStyles();
  

  function addFish(e) {
      const id = e.target.parentNode.getAttribute('data-id');
      dispatch({
          type: ADD_FISH,
          fishId: id
      })
  };

  function removeFish(e) {
      const id = e.target.parentNode.getAttribute('data-id');
      dispatch({
          type: REMOVE_FISH,
          fishId: id
      })
  };

  function isObtained(id) {
    if (!caughtFish.includes(id)) {
       return  <Button data-id={id} size="small" color="primary" onClick={addFish}>
                   Got it!
               </Button>
    } else {
        return  <Button data-id={id} size="small" color="primary" onClick={removeFish}>
                  Don't got it!
                </Button>
    }
        
    }

      function haveFish(id) {
        if(caughtFish.includes(id)) {
            return true;
        } else {
            return false;
        }
    }

      return (
          <Container>
              <MenuNav />
              <Typography className={classes.pageTitle} component='h1'>Fish</Typography>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.fishGrid}
                >
                    {fish.map(fish => (
                        <Grid item md={3} sm={6} key={fish._id}>
                            <Card className = {haveFish(fish._id) ? classes.obtained : ''} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        className={classes.media}
                                        image={fish.icon}
                                        title="Fish Card"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" >
                                            {fish.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    {isObtained(fish._id)}
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
    caughtFish: state.obtainedFish
    };

}

export default connect(mapStateToProps)(Fish);