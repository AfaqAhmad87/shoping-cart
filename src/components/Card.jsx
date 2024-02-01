import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { pushData, Delete } from "../reducer";
export default function Card() {
  const select = useSelector((state) => state.cart.carddata);
  const dispatch = useDispatch();

  return (
    <div className="m-3">
      <MDBContainer>
        <MDBRow>
          {select.map((val, id) => {
            return (
              <MDBCol size="3" className="py-3" key={id}>
                <MDBCard>
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay"
                  >
                    {/* <MDBCardImage
                      src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                      fluid
                      alt="..."
                    /> */}
                    {/* <h1>{}</h1> */}
                    <div className="">
                      <img src={val.img} alt="" />
                    </div>
                    <a></a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>{val.title}</MDBCardTitle>
                    <MDBCardText>{val.price}</MDBCardText>
                    <MDBBtn onClick={() => dispatch(pushData(val))}>
                      Add To Cart
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
