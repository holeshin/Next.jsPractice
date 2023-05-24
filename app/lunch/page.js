import Conmon from "../component/page";

const lunch = () => {
  const foodList = [
    { name: "짜장면", img: "zz" },
    { name: "짬뽕", img: "zz" },
    { name: "탕수육", img: "zz" },
    { name: "마파두부", img: "zz" },
    { name: "볶음밥", img: "zz" },
    { name: "짬짜면", img: "zz" },
    { name: "짬탕면", img: "zz" },
    { name: "짬볶면", img: "zz" },
    { name: "게살볶음밥", img: "zz" },
    { name: "잡채밥", img: "zz" },
  ];
  return (
    <>
      <Conmon foodList={foodList} />
    </>
  );
};

export default lunch;
