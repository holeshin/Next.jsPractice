"use client";
import Link from "next/link";
import { useState } from "react";

const Conmon = ({ foodList }) => {
  const [food, setFood] = useState([]);
  const [number, setNumber] = useState(0);
  const [spiner, setSpiner] = useState(true);

  const onClickFoodChange = () => {
    fdd();
    setTimeout(() => {
      setFood(foodList[Math.floor(Math.random() * foodList.length)]);
      setSpiner(false)
    }, 2000);
    changeSpiner();
  };

  const changeSpiner=()=>{
    setSpiner(true)
  }

  const fdd =()=>{
    setNumber(number+1);
  }

  return (
    <div className="com">
      <div
        style={{ width: "100%", height: "420px", border: "1px solid white" }}
      >
        <div style={{ width: "100%", height: "80%" }}>
          {spiner ? (
            <div
              style={{
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
              }}
            >
              {number <= 0 ? "골라주세요!" : "고르는 중입니다."}
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
      {number>0&&<div style={{marginTop:"10px",fontSize:"25px"}}>누른 횟수:{number}</div>}
      <button style={{marginTop:"13px", width:"50%"}}>
        <Link  href={{
              pathname: "/",
            }}>처음으로</Link>
        </button>
    </div>
  );
};

export default Conmon;
