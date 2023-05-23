import Link from "next/link";

export default function Home() {
  const food = [
    { id: 1, name: "한식", path: "korean" },
    { id: 2, name: "일식", path: "japanese" },
    { id: 3, name: "양식", path: "form" },
    { id: 4, name: "중식", path: "lunch" },
  ];

  return (
    <>
      <div className="main">
        {food.map(({ id, name, path }) => (
          <Link
            className="category"
            key={id}
            href={{
              pathname: `${path}`,
            }}
          >
            {name}
          </Link>
        ))}
      </div>
    </>
  );
}
