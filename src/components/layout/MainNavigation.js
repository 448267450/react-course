import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              All Meetups
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-meetup" activeClassName="active">
              Add New Meetups
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" activeClassName="active">
              My Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
