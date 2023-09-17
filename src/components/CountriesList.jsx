import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countriesData } = props;
  // Check if countriesData is undefined or empty
  if (!countriesData || countriesData.length === 0) {
    return <div>Loading countries...</div>;
  }
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              {props.countriesData.map((country) => {
                const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`;

                return (
                  <Link
                    key={country.alpha3Code}
                    to={`/countryDetails/${country.alpha3Code}`}
                    className="list-group-item list-group-item-action"
                  >
                    <img
                      src={flagUrl}
                      alt={`${country.name} flag`}
                      width="72"
                      height="54"
                    />
                    <br />
                    {country.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesList;
