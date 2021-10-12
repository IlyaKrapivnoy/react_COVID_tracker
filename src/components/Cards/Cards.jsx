import styles from './Cards.module.css';
import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent='center'>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant='body2'>
                            Number of active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                        <Typography color='textSecondary'>REAL DATA</Typography>
                        <Typography variant='body2'>
                            Number of recoveries from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                        <Typography color='textSecondary'>REAL DATA</Typography>
                        <Typography variant='body2'>
                            Number of deaths cases caused by COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
