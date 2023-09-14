import { Link } from 'react-router-dom';

function CountryDetails(props) {
  return (
    <div>
      <div className="col-7">
        {props.countriesData.map((country) => (
          <div key={country.alpha3Code}>
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{ width: '30%' }}>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area}</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>{country.borders}</td>
                  <td>
                    <ul>
                      <li>
                        <Link to="/AND">Andorra</Link>
                      </li>
                      <li>
                        <Link to="/BEL">Belgium</Link>
                      </li>
                      <li>
                        <Link to="/DEU">Germany</Link>
                      </li>
                      <li>
                        <Link to="/ITA">Italy</Link>
                      </li>
                      <li>
                        <Link to="/LUX">Luxembourg</Link>
                      </li>
                      <li>
                        <Link to="/MCO">Monaco</Link>
                      </li>
                      <li>
                        <Link to="/ESP">SCodepain</Link>
                      </li>
                      <li>
                        <Link to="/CHE">Switzerland</Link>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryDetails;
