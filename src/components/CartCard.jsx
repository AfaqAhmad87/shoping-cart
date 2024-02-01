import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { MdDelete } from "react-icons/md";

export default function CartCard({
  value,
  setdata,
  dispatchDeleteHandler,
  data,
  id,
  setId,
}) {
  return (
    <MDBCard className="rounded-3 mb-4" key={value?.id}>
      <MDBCardBody className="p-4">
        <MDBRow className="justify-content-between align-items-center">
          <MDBCol md="2" lg="2" xl="2">
            <img src={value?.img} alt="" />
          </MDBCol>
          <MDBCol md="3" lg="3" xl="3">
            <p className="lead fw-normal pt-3 text-[2xl]">{value?.title}</p>
          </MDBCol>
          <MDBCol
            md="3"
            lg="3"
            xl="2"
            className="d-flex align-items-center justify-content-around"
          >
            <MDBInput
              min={0}
              defaultValue={1}
              type="number"
              size="sm"
              onChange={(e) => {
                setdata(e.target.value);
              }}
            />

            <MDBBtn color="link" className="px-2">
              {value?.id}
            </MDBBtn>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
            <MDBTypography tag="h5" className="mb-0">
              {value.price}
            </MDBTypography>
          </MDBCol>
          <MDBCol md="1" lg="1" xl="1" className="text-end">
            <a href="#!" className="text-danger">
              <MdDelete onClick={dispatchDeleteHandler} size={26} />
            </a>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}
