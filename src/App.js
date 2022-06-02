import React from 'react';
import './App.css';
import {action,originals,ComedyMovies,RomanceMovies} from './urls'
import Banner from './component/Banner/Banner';
import Navbar from './component/navbar/Navbar';
import Rowpost from './component/rowpost/Rowpost';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action}title='Action' isSmall/>
      <Rowpost url={ComedyMovies}title='Comedy' isSmall/>
      <Rowpost url={RomanceMovies}title='Romance' isSmall/>
      </div>
  );
}

export default App;
