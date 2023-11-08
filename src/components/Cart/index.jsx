import React from "react";

const Cart = () => {
  return (
    <div className="max-w-sm w-full p-8 bg-white rounded-xl mb-6">
      <h3 className="text-base font-semibold">Raspberry Pi User Guide</h3>
      <p className="text-sm mt-1.5 h-16 line-clamp-3 overflow-hidden">
        Lorem ipsum do
      </p>
      <div className="flex w-full justify-between items-center mt-4">
        <h3 className="text-sm font-medium">Eben Upton: 2012-year</h3>
        <div className="py-1 px-3 bg-purple-200 text-xs text-purple-600 rounded-lg font-medium">
          211 pages
        </div>
      </div>
    </div>
  );
};

export default Cart;
