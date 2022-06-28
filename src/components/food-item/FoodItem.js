import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./FoodItem.css";

function FoodItem({ data }) {
  // console.log("Fooditem", data);
  return (
    <>
      <Card className="food-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.productImageUrl} height="200px" />
        <Card.Body>
          <h6>
            <b>{data.productname}</b>
          </h6>
          {/* <p>
            <b>Merry Props combo veg</b>
          </p> */}
          {/* <p><b>{data.productname}</b></p> */}
          <Card.Text>
            <div className="discription-btn"><div className="round-btn"></div></div>
            <div>{data.description}</div>
          </Card.Text>
          <Row>
            <Col md={4} style={{ color: "blue" }}>
              <div style={{fontSize:"14px"}}><b>&#8377;{data.price}</b></div>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Button variant="primary" size="sm">
                Add
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default FoodItem;
