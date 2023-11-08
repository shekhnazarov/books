import React from "react";

const Cart = ({ book }) => {
  return (
    <div className="max-w-sm w-full p-8 bg-white rounded-xl mb-6">
      <h3 className="text-base font-semibold">
        {book?.title || "Raspberry Pi User Guide"}
      </h3>
      <p className="text-sm mt-1.5 h-16 line-clamp-3 overflow-hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illum
        necessitatibus quod error totam quo consectetur enim labore recusandae
        voluptas reiciendis omnis nam cupiditate, facere tenetur, rerum natus
        rem. Repudiandae, ad pariatur. Natus omnis dignissimos amet repudiandae
        velit voluptatum possimus?
      </p>
      <div className="flex w-full justify-between items-center mt-4">
        <h3 className="text-sm font-medium">
          {book?.author || "Eben Upton"}: {book?.published || "2012"}-year
        </h3>
        <div className="py-1 px-3 bg-purple-200 text-xs text-purple-600 rounded-lg font-medium">
          {book?.pages || "0"} pages
        </div>
      </div>
    </div>
  );
};

export default Cart;
