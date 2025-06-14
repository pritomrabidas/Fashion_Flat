import React from "react";
import ViewLeftCart from "./ViewLeftCart";
import ViewRightCart from "./ViewRightCart";

const ViewShopping = () => {
  return (
    <section>
      <div className="container mx-auto flex gap-10 px-4">
        <ViewLeftCart />
        <ViewRightCart />
      </div>
    </section>
  );
};

export default ViewShopping;
