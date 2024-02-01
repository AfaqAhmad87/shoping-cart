import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Delete } from "../reducer";
import CartCard from "./CartCard";

export default function Cart() {
  const [data, setdata] = useState();

  const [id, setId] = useState("");
  const [data2, setdata2] = useState();

  const result = useSelector((state) => state.cart.cart);
  const valueresult = result.map((el) => el.price);
  const plus = valueresult.reduce((acc, current) => acc + current, 0);

  useEffect(() => {
    setdata2(plus);
  });
  // console.log(valueresult);

  const dispatch = useDispatch();
  // console.log(result);
  // const dispatchDeleteHandler = () => {
  //   dispatch(Delete(index));
  // };
  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                Shopping Cart
              </MDBTypography>
              <div>
                <p className="mb-0">
                  <span className="text-muted">Sort by:</span>
                  <a href="#!" className="text-body">
                    price
                  </a>
                </p>
              </div>
            </div>

            {result.map((value, index) => {
              return (
                <CartCard
                  setdata={setdata}
                  data={data}
                  value={value}
                  setId={setId}
                  id={id}
                  dispatchDeleteHandler={() => dispatch(Delete(index))}
                />
              );
            })}
            <MDBCard className="mb-4">
              <MDBCardBody className="p-4 d-flex flex-row">
                <h1>Total Price:{data2}</h1>
              </MDBCardBody>
            </MDBCard>
            <MDBCard>
              <MDBCardBody>
                <MDBBtn className="ms-3" color="warning" block size="lg">
                  pay total
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
