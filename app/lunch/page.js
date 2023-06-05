import Conmon from "../component/page";

const lunch = () => {
  const foodList = [
    { name: "짜장면" },
    { name: "짬뽕"},
    { name: "탕수육"},
    { name: "마파두부" },
    { name: "볶음밥"},
    { name: "짬짜면" },
    { name: "짬탕면" },
    { name: "짬볶면"},
    { name: "게살볶음밥"},
    { name: "잡채밥" },
  ];
  return (
    <>
      <Conmon foodList={foodList} />
    </>
  );
};

export default lunch;
