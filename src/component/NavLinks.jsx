import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import PropTypes from "prop-types";

const NavLinks = ({ path, text, icon }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div>
      <div className="nav-links">
        {links.map((link) => {
          const { text, path, icon } = link;
          return (
            <NavLink
              to={path}
              key={text}
              className="nav-link"
              onClick={toggleSidebar}
              end
            >
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

NavLinks.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavLinks;
