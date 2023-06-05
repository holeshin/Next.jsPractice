import Conmon from "../component/page";

const korean = () => {
  const foodList = [
    { name: "부대찌개" },
    { name: "찜닭"},
    { name: "순대국"},
    { name: "제육볶음"},
    { name: "된장찌개"},
    { name: "갈비탕"},
    { name: "설렁탕"},
    { name: "뼈 해장국"},
    { name: "감자탕" },
    { name: "라면" },
    { name: "떡튀순" },
  ];

  return (
    <>
      <Conmon foodList={foodList} />
    </>
  );
};

export default korean;
