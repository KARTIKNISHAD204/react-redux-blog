import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    marginLeft:'10%' ,
    marginRight:'10%' ,
    marginTop : '10px',
    marginBottom:'10px'   

    
  },
  media: {
    height:  200,
  },
  cat:{
   marginLeft:'10%' ,
   marginRight:'10%' ,
   marginTop : '10px',
   marginBottom:'10px'


  }
});

 const MediaCard =  (props)=>{
  const classes = useStyles();
 

  return (
    <div className={classes.cat}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.urlToImage}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          {props.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    
    </div>
  );
}
export default MediaCard;