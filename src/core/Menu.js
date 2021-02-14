import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { Navbar, Nav } from "react-bootstrap";
import "../core/Menu.css";

function isActive(history, path) {
  if (history.location.pathname === path) return { color: "#ff9900" };
  else return { color: "black" };
}

const Menu = ({ history }) => (
  <div className="menu">
    <Navbar expand="lg">
      {/* <Navbar.Brand href="#home">Social</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link className="nav-link" style={isActive(history, "/")} to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              className={
                history.location.pathname === "/users"
                  ? "active nav-link"
                  : "not-active nav-link"
              }
              to="/users"
            >
              Users
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to={`/post/create`}
              style={isActive(history, `/post/create`)}
              className="nav-link"
            >
              Create Post
            </Link>
          </Nav.Link>
          {!isAuthenticated() && (
            <div className="menu__sign">
              <Nav.Link>
                <Link
                  className="nav-link"
                  style={isActive(history, "/signin")}
                  to="/signin"
                >
                  Sign In
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  className="nav-link"
                  style={isActive(history, "/signup")}
                  to="/signup"
                >
                  Sign Up
                </Link>
              </Nav.Link>
            </div>
          )}
          {isAuthenticated() && isAuthenticated().user.role === "admin" && (
            <Nav.Link>
              {" "}
              <Link
                to={`/admin`}
                style={isActive(history, `/admin`)}
                className="nav-link"
              >
                Admin
              </Link>
            </Nav.Link>
          )}

          {isAuthenticated() && (
            <div className="menu__find">
              <Nav.Link>
                <Link
                  to={`/findpeople`}
                  style={isActive(history, `/findpeople`)}
                  className="nav-link"
                >
                  Find People
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to={`/user/${isAuthenticated().user._id}`}
                  style={isActive(
                    history,
                    `/user/${isAuthenticated().user._id}`
                  )}
                  className="nav-link"
                >
                  {`${isAuthenticated().user.name}'s profile`}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <span
                  className="nav-link"
                  style={{ cursor: "pointer", color: "black" }}
                  onClick={() => signout(() => history.push("/"))}
                >
                  Sign Out
                </span>
              </Nav.Link>
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default withRouter(Menu);
