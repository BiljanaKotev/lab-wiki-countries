import { Route, Routes } from 'react-router-dom';
import './App.css';
// import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';

import { useEffect, useState } from 'react';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  function fetchCountries() {
    fetch('https://ih-countries-api.herokuapp.com/countries')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const countriesData = data.map((countryData) => {
          return {
            name: countryData.name.common,
            capital: countryData.capital,
            id: countryData._id,
            area: countryData.area,
            alpha2Code: countryData.alpha2Code,
            alpha3Code: countryData.alpha3Code,
            borders: countryData.borders,
          };
        });
        setCountries(countriesData);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/countriesList"
          element={<CountriesList countriesData={countries} />}
        />
        <Route path="/" element={<Home />}></Route>
        <Route
          path="countryDetails/:id"
          element={<CountryDetails countriesData={countries} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

// First step for routing

// 1. npm i react-router-dom
// 2.wrap the entire app with the broswer router <BrowserRouter/> in index.js usually import BrowserRouter as Router
// 3. in App.jsx import Routes and Route
// 4. write your <Route> tags inside of the <Routes/> tag
// 5. create a state for the data json file
//6. use the state variable as the value for the passing data
