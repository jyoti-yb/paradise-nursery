import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Paradise Nursery</h1>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;
