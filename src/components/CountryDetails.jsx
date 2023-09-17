import { Link, useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { id } = useParams();

  const country = props.countriesData.find(
    (country) => country.alpha3Code === id
  );

  if (!country) {
    return <div>Country not found!</div>;
  }
  const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;

  return (
    <div>
      <div className="col-7">
        <div>
          <img src={flagUrl} alt="" />
          <h1>{country.name}</h1>
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
                  {country.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {country.borders.map((country) => {
                      return (
                        <li key={country.alpha3Code}>
                          <Link to={`/countryDetails/${country}`}>
                            {country}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
