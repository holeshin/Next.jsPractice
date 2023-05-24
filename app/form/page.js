import Conmon from "../component/page";

const form = () => {
  const foodList = [
    { name: "햄버거", img: "zz" },
    { name: "피자", img: "zz" },
    { name: "파스타", img: "zz" },
    { name: "리조또", img: "zz" },
    { name: "스테이크", img: "zz" },
    { name: "샌드위치", img: "zz" },
    { name: "시리얼", img: "zz" },
    { name: "샐러드", img: "zz" },
    { name: "토스트", img: "zz" },
  ];
  return (
    <>
      <Conmon foodList={foodList} />
    </>
  );
};

export default form;
