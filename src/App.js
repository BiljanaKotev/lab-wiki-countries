import { Route, Routes } from 'react-router-dom';
import './App.css';
import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/countriesList"
          element={<CountriesList countriesData={countriesData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
