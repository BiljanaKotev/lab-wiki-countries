import { Link } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
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
                      style={{ marginRight: '10px' }}
                    />

                    {country.name}

                    <br></br>
                    {country.alpha2Code}
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
