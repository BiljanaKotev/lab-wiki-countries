import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/countriesList/:id">Countries List</Link>
    </div>
  );
}

export default Home;
