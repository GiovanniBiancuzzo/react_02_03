import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarComponent from './Components/NavbarComponent';
import TitlebarComponent from './Components/TitlebarComponent';
import MoviesList from './Components/MoviesList';
import FooterComponent from './Components/FooterComponent';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';//componenti necessari per il routing
import Home from './Components/Home';
import TvShows from './Components/TvShows';
import MovieDetails from './Components/MovieDetails';

function App () {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={
          <>
            <Home />
            <TitlebarComponent />
          </>
        } />
        <Route path='/tvshows' element={
          <TvShows />} />
        <Route path='/moviedetails/:movieId' element={
          <MovieDetails />} />
        {/* serve lasciare questa route */}
        <Route path='/tvshows' element={
          <TvShows />} />
        <Route path='*' element={
          <Home />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
