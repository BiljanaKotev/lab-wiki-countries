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
                return (
                  <Link
                    key={country.alpha3Code}
                    to="https://restcountries.com/v3.1/alpha/{code}"
                    className="list-group-item list-group-item-action"
                  >
                    Alpha 3 code
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
