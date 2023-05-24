import Conmon from "../component/page";

const form = () => {
  const foodList = [
    { name: "햄버거", src: "/imgs/햄버거.jpg" },
    { name: "피자", src: "/imgs/피자.jpg" },
    { name: "파스타", src: "/imgs/파스타.jpg" },
    { name: "리조또", src: "/imgs/리조또.jpg" },
    { name: "스테이크", src: "/imgs/스테이크.jpg" },
    { name: "샌드위치", src: "/imgs/샌드위치.jpg" },
    { name: "부리또", src: "/imgs/부리또.jpg" },
    { name: "샐러드", src: "/imgs/샐러드.jpg" },
    { name: "토스트", src: "/imgs/토스트.jpg" },
  ];
  return (
    <>
      <Conmon foodList={foodList} />
    </>
  );
};

export default form;
