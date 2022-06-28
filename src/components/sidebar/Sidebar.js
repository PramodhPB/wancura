import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Sidebar.css";

const foodTypes = [
  {
    label: "All",
    value: "",
    color:""
  },
  {
    label: "Veg",
    value: "veg",
    color:"green"
  },
  {
    label: "Non-Veg",
    value: "non-veg",
    color:"red"
  },
];

export default function Sidebar({
  data,
  foodType,
  selectedCategory,
  handleSelect,
  handleSelectFoodTyoe,
}) {
  // console.log("iufguh", data);
  return (
    <>
      {foodTypes?.map((item) => {
        return (
          <Button className="food-type"
            variant={foodType === item?.value ? "primary" : "outline-primary"}
            size="sm"
            onClick={() => handleSelectFoodTyoe(item.value)}
          >
           <div className="food-type-label" >{item.label != "All" && <div className="food-type-border" style={{border:`1px solid ${item.color}`}}><div className="foot-type-color" style={{backgroundColor:item.color}}></div></div>} {item?.label} </div>
          </Button>
        );
      })}
      <div className="sidebar">
        {data.map((item, i) => {
          return (
            <div onClick={() =>  handleSelect(item)} className={`sideItem ${selectedCategory?.collectionGuid === item?.collectionGuid ? 'active' : ''}`}>
                {item.collectionName}
              <div className="count">{item.productnewvm.length} items</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
