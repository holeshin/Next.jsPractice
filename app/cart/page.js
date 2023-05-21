import React from "react";
import Link from "next/link";

const cart = () => {
  return (
    <div>
      <h1>장바구니입니다.</h1>
      <Link href="/cart/payment">결제</Link>
    </div>
  );
};

export default cart;
