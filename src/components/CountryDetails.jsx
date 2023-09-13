import { Link } from 'react-router-dom';

function CountryDetails(props) {
  return (
    <div>
      <div classNameName="col-7">
        {props.countriesData.map((country) => {
          return <h1 key={country.alpha3Code}>{country.name.common}</h1>;
        })}

        <table classNameName="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                551695 km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li>
                    <Link to="/AND">Andorra</Link>
                  </li>
                  <li>
                    <Link href="/BEL">Belgium</Link>
                  </li>
                  <li>
                    <Link href="/DEU">Germany</Link>
                  </li>
                  <li>
                    <Link href="/ITA">Italy</Link>
                  </li>
                  <li>
                    <Link href="/LUX">Luxembourg</Link>
                  </li>
                  <li>
                    <Link href="/MCO">Monaco</Link>
                  </li>
                  <li>
                    <Link href="/ESP">Spain</Link>
                  </li>
                  <li>
                    <Link href="/CHE">Switzerland</Link>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
