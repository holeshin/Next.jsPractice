import Conmon from "../component/page";

const form = () => {
  const foodList = [
    { name: "햄버거" },
    { name: "피자"},
    { name: "파스타" },
    { name: "리조또" },
    { name: "스테이크"},
    { name: "샌드위치" },
    { name: "부리또" },
    { name: "샐러드" },
    { name: "토스트"},
  ];
  return (
    <>
      <Conmon foodList={foodList} />
    </>
  );
};

export default form;
