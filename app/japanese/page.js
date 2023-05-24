import Conmon from "../component/page";

const japanese = () => {
  const foodList = [
    { name: "돈까스", img: "zz" },
    { name: "메밀소바", img: "zz" },
    { name: "우동", img: "zz" },
    { name: "라멘", img: "zz" },
    { name: "장어덮밥", img: "zz" },
    { name: "야끼소바", img: "zz" },
    { name: "카레", img: "zz" },
    { name: "부타동", img: "zz" },
    { name: "초밥", img: "zz" },
    { name: "후토마끼", img: "zz" },
  ];
  return (
    <>
      <Conmon foodList={foodList} />
    </>
  );
};

export default japanese;
