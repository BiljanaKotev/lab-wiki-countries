import { Link } from 'react-router-dom';

function CountriesList(props) {
  const { countriesData } = props;
  // Check if countriesData is undefined or empty
  if (!countriesData || countriesData.length === 0) {
    return <div>Loading countries...</div>;
  }
  return (
    <div>
      {props.countriesData.map((country) => {
        return (
          <Link
            key={country.alpha3Code}
            to={`/${country.alpha3Code}`}
            className="list-group-item list-group-item-action"
          >
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
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
  );
}

export default CountriesList;
