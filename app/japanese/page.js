import Conmon from "../component/page";

const japanese = () => {
  const foodList = [
    { name: "돈까스" },
    { name: "메밀소바"},
    { name: "우동"},
    { name: "라멘"},
    { name: "덮밥"},
    { name: "야끼소바"},
    { name: "카레"},
    { name: "부타동"},
    { name: "초밥"},
  ];
  return (
    <>
      <Conmon foodList={foodList} />
    </>
  );
};

export default japanese;
