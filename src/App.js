import React from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import SmallInfo from './scenes/SmallInfo/SmallInfo';
import Information from './scenes/Information/Information';
import Specialties from './scenes/Specialties/Specialties';
import Services from './scenes/Services/Services';
import Doctors from './scenes/Doctors/Doctors';
import Reviews from './scenes/Reviews/Reviews';
import News from './scenes/News/News';
import LinkForPhone from './scenes/LinkForPhone/LinkForPhone';
import Footer from './scenes/Footer/Footer';

const useStyle = makeStyles({
  root: {
    flexGrow: 1
  }
});

function App() {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
      >
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Breadcrumb />
        <Grid item xs={12}>
          <SmallInfo />
        </Grid>
        <Grid item xs={12}>
          <Information />
        </Grid>
        <Grid item xs={12}>
          <Specialties />
        </Grid>
        <Grid item xs={12}>
          <Services />
        </Grid>
        <Grid item xs={12}>
          <Doctors />
        </Grid>
        <Grid item xs={12}>
          <Reviews />
        </Grid>
        <Grid item xs={12}>
          <News />
        </Grid>
        <Grid item xs={12}>
          <LinkForPhone />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  )
}

export default App;
