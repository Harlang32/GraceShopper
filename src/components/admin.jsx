import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div>This is an Admin Page</div>
      <div className="flex flex-col space-x-1 font-bold">
        <ul>
          <li>
            <Link to={`/products`}>Manage Products</Link>
          </li>
          <li>
            <Link to={`/products/update`}>Edit Products</Link>
          </li>
          <li>
            <Link to={`/home`}>Cancel</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Admin;
