"use client";
import { useState } from "react";

const Conmon = ({ foodList }) => {
  const [food, setFood] = useState([]);

  const onClickFoodChange = () => {
    setTimeout(() => {
      setFood(foodList[Math.floor(Math.random() * foodList.length)]);
    }, 1000);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "50px",
        margin: "30px 0",
      }}
    >
      <div
        style={{ width: "600px", height: "420px", border: "1px solid white" }}
      >
        <div style={{ width: "100%", height: "80%" }}>
          {!food.name ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
              }}
            >
              골라주세요!
            </div>
          ) : (
            <div style={{ height: "100%" }}>
              <div
                style={{
                  height: "80%",
                }}
              >
                {food.img}
              </div>
              <p style={{ textAlign: "center", fontSize: "20px" }}>
                {food.name}
              </p>
            </div>
          )}
        </div>
        <button
          style={{
            width: "100%",
            height: "20%",
            fontSize: "30px",
            fontWeight: "bold",
          }}
          onClick={onClickFoodChange}
        >
          선택
        </button>
      </div>
    </div>
  );
};

export default Conmon;
