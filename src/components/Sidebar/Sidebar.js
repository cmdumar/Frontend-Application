import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="side-nav"> 
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
