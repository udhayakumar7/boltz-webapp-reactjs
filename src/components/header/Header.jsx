import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiFillThunderbolt } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
import Login from "../models/Login";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/loginmodelSlice";
import Register from "../models/Register";
import { login, logout, selectUser } from "../../redux/authuserSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Dropdown from "react-bootstrap/Dropdown";
import SearchBar from "../searchbar/SearchBar";
import { Offcanvas } from "react-bootstrap";

const Header = () => {
  const [isscroll, setIsscroll] = useState(false);
  const [show, setShow] = useState(false)

  const handleShow = ( ) => setShow(true)
  const handleClose = () => setShow(false)

  const totalQuanty = useSelector((state) => state?.cart?.cartQuanty);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(location.pathname);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsscroll(true);
    } else if (window.scrollY < 80) {
      setIsscroll(false);
    } else {
      setIsscroll(false);
    }
  };

  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    console.log(user, "user");

    return unsubcribe;
  }, []);

  const handleLogoot = () => {
    dispatch(logout());
    signOut(auth);
  };

  return (
    <Navbar
      expand="lg"
      className={
        isscroll
          ? `bg-body-tertiary navbar scrolled`
          : `bg-body-tertiary navbar`
      }
    >
      <Container>
        <NavLink className="logo" to="/">
          <AiFillThunderbolt />
          <span>BOLTZ</span>
        </NavLink>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg"  onClick={handleShow}/>

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
          show={show}
          onHide={handleClose}
        >
    <Offcanvas.Header closeButton>
    <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
    <NavLink className="logo" to="/" onClick={handleClose}>
          <AiFillThunderbolt />
          <span>BOLTZ</span>
        </NavLink>
      
</Offcanvas.Title>

    </Offcanvas.Header>
    <Offcanvas.Body> 

    <SearchBar setShow={setShow} />
          <Nav className=" my-2 my-lg-0 align-items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products/wire-less"  onClick={handleClose}>
              True Wirless
            </NavLink>
            <NavLink to="/products/neck-bands" onClick={handleClose}>Neck Bands</NavLink>
            <NavLink to="/products/wired" onClick={handleClose}>Wired</NavLink>
            {user?.email ? (
              <NavLink className={"user_acc"} to="/cart" onClick={handleClose}>
                <RiShoppingCartFill
                  style={{ fontSize: "18px,", margin: "0px 4px" }}
                />
                Cart
                <span className="cart_badge">
                  {totalQuanty > 10 ? "" : totalQuanty}
                </span>
              </NavLink>
            ) : (
              ""
            )}

            {/* <NavLink className={"user_acc"} to="/cart"><FaUserLarge style={{fontSize:"16px,",margin:"0px 7px"}}  />Kumar</NavLink> */}

            {user?.email ? (
              <Dropdown title="Dropdown end">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  
                  <img
                    src={user?.photoURL ? user?.photoURL : "https://cdn-icons-png.flaticon.com/512/168/168726.png" }
                    alt=""
                  />
                </Dropdown.Toggle>
             
                <Dropdown.Menu>
                  <Dropdown.Item>{(user?.email).split("@")[0]}</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogoot}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <button onClick={handleOpenModal} className={"login_button"}>
                Login
              </button>
            )}
          </Nav>
    </Offcanvas.Body>



        </Navbar.Offcanvas>

       
      </Container>

      <Login />
      <Register />
    </Navbar>
  );
};

export default Header;
