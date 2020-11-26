import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router,Link,NavLink,Route,Redirect} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 235,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    fontWeight: 900
  },
  pos: {
    marginBottom: 0,
  },
  media: {
    height: "80px",
  },
});

const hanclick=(e)=>{
  
    <Link to ="http://localhost:3000/post/kaka"/>
}

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  
  function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiioooouuuunc------";

    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
const url=string_to_slug (props.title)
console.log("show the id ",props.keys)
  return (
    
    <Link to={{
      pathname:`/post/${url}`,
      search: `${props.keys}` 
    }}>
    <Card className={classes.root} variant="outlined" >
    <CardMedia 
        className= {classes.media} 
        image ={props.urlToImage}
        />  
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
             
        
        <Typography className={classes.pos} color="textSecondary">
          {props.author}
        </Typography>
      
      </CardContent>
      
    </Card>
        </Link>
    
  );
}
