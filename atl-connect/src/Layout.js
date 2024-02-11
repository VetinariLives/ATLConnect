import { Outlet, Link } from "react-router-dom";
import "./App.css";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
{process.env.PUBLIC_URL + '/ATLconnect.png'} alt="Logo"
                        />
                    </div>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/MapPage">Map</Link>
                    </li>

                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>                
            </nav>
      <Outlet />
    </>
  )
};

export default Layout;