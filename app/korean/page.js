import Conmon from "../component/page";

const korean = () => {
  const foodList = [
    { name: "비빔밥", img: "zz" },
    { name: "부대찌개", img: "zz" },
    { name: "찜닭", img: "zz" },
    { name: "순대국", img: "zz" },
    { name: "쌈밥", img: "zz" },
    { name: "제육볶음", img: "zz" },
    { name: "된장찌개", img: "zz" },
    { name: "갈비탕", img: "zz" },
    { name: "김치찌개", img: "zz" },
    { name: "뼈 해장국", img: "zz" },
    { name: "감자탕", img: "zz" },
    { name: "라면", img: "zz" },
    { name: "떡튀순", img: "zz" },
  ];

  return (
    <>
      <Conmon foodList={foodList} />
    </>
  );
};

export default korean;
