import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card , CardActionArea , CardContent , CardMedia, Typography  } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const  CardLandingPage = props => {
    const classes = useStyles();
    const {data} = props;
    return (


            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={data.urlImage}
                        title={data.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {data.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {data.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
    );
};

export default  CardLandingPage;