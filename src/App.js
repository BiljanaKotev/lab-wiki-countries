import { Route, Routes } from 'react-router-dom';
import './App.css';
import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/countriesList"
          element={<CountriesList countriesData={countriesData} />}
        />
        <Route path="/" element={<Home />}></Route>
        <Route
          path="countryDetails/:id"
          element={<CountryDetails countriesData={countriesData} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
