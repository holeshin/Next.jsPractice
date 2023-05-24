"use client";
import './Conmon.scss';
import Link from "next/link";
import { useState } from "react";

const Conmon = ({ foodList }) => {
  const [food, setFood] = useState([]);
  const [number, setNumber] = useState(0);
  const [spiner, setSpiner] = useState(true);
  const [useBtn,setUseBtn] = useState(false)

  const onClickFoodChange = () => {
    clickNumber();
    setUseBtn(true);
    setTimeout(() => {
      setFood(foodList[Math.floor(Math.random() * foodList.length)]);
      setSpiner(false)
      setUseBtn(false)
    }, 2000);
    changeSpiner();
  };

  const changeSpiner=()=>{
    setSpiner(true)
  }

  const clickNumber =()=>{
    setNumber(number+1);
  }


  return (
    <div className="conmon">
      <div
        className='conmonWrap' 
      >
        <div className='initialStateWrap'>
          {spiner ? (
            <div className='initialState'>
             {number <= 0 ? <p>눌러주세요!</p> :<div className='spinner'></div>}
            </div>
          ) : (
            <div className='selectFoodWrap'>
              <div
              className="foodImg"
              >
                {food.img}
              </div>
              <p className='foodTitle'>
                {food.name}
              </p>
            </div>
          )}
        </div>
        <button className='foodselectButton'
          onClick={onClickFoodChange} disabled={useBtn}
        >
          선택
        </button>
      </div>
      {number>0&&<div className='selectNumberButton'>누른 횟수:{number}</div>}
      <button className='moveMainPageButton'>
        <Link  href={{
              pathname: "/",
            }}>처음으로</Link>
        </button>
    </div>
  );
};

export default Conmon;
