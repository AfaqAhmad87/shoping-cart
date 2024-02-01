import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

import { useSelector, useDispatch } from "react-redux";
export default function App({ setdata }) {
  const [openBasic, setOpenBasic] = useState(false);
  const result = useSelector((state) => state.cart.cart);
  console.log(result);
  console.log(result.length);
  const lenght = result.length;

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid className="d-flex justify-content-between">
        <MDBNavbarBrand href="#" onClick={() => setdata(true)}>
          Shoping Cart
        </MDBNavbarBrand>
        <MDBNavbarBrand href="#">All Product</MDBNavbarBrand>
        <MDBBtn color="dark" onClick={() => setdata(false)}>
          Cart {lenght}
        </MDBBtn>
      </MDBContainer>
      <MDBNavbarToggler
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setOpenBasic(!openBasic)}
      >
        <MDBIcon icon="bars" fas />
      </MDBNavbarToggler>

      <MDBCollapse navbar open={openBasic}>
        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0"></MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}
