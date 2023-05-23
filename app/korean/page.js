import Conmon from "../component/page";

const korean = () => {
  const foodList = [
    { name: "된장찌개", img: "zz" },
    { name: "부대찌개", img: "zz" },
    { name: "순두부찌개", img: "zz" },
    { name: "순대국", img: "zz" },
    { name: "돈까스", img: "zz" },
    { name: "된장찌개1", img: "zz" },
    { name: "부대찌개2", img: "zz" },
    { name: "순두부찌개3", img: "zz" },
    { name: "순대국4", img: "zz" },
    { name: "돈까스5", img: "zz" },
  ];

  return (
    <>
      <Conmon foodList={foodList} />
    </>
  );
};

export default korean;
