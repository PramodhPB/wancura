import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/sidebar/Sidebar";
import Fooditem from "../../components/food-item/FoodItem";
import { fooditems } from "../../constants/fooditems.constants";

function FoodGallary() {
  const [data, setData] = useState([...fooditems]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [foodType, setFoodType] = useState("");

  useEffect(() => {
    let filteredData = [...fooditems]?.filter((o) => o.productnewvm?.length);

    if (foodType) {
      // console.log("FOOD TYPE ::", filteredData)
      filteredData = filteredData
        ?.filter((item) => 
          item?.productnewvm?.some((o) => o.customfield === foodType) 
        )
        ?.map((item) => { 
          return {
            ...item,
            productnewvm: item.productnewvm.filter(
              (o) => o.customfield === foodType
            ),
          };
        });
      console.log("FOOD TYPE ::", filteredData)

    }
    setData(filteredData);
    setSelectedCategory(filteredData[0]);
  }, [foodType]);

  // useEffect(() => {
  //   setSelectedCategory(fooditems[0])
  // }, [])

  const handleSelectCategory = (item) => {
    setSelectedCategory(item);
  };

  const handleSelectFoodTyoe = (value) => {
    setFoodType(value);
  };
  // console.log("SELE")
  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            <center>
              <Sidebar
                data={data}
                foodType={foodType}
                selectedCategory={selectedCategory}
                handleSelect={handleSelectCategory}
                handleSelectFoodTyoe={handleSelectFoodTyoe}
              />
            </center>
          </Col>
          <Col xs={9}>
            <h2>
              <b>Combos</b>
            </h2>
            <p>The Smart Way to enjoy European cuisine</p>
            <div
              style={{ border: "1px solid rgb(233 216 216)", padding: "20px" }}
            >
              <Row>
                {selectedCategory?.productnewvm?.map((item) => {
                  return (
                    <Col xs={4}>
                      <Fooditem data={item} />
                      <br />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default FoodGallary;
