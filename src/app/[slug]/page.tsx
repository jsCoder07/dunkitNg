import Add from "@/components/Add";
import CustomizedProducts from "@/components/CustomizedProducts";
import ProductImages from "@/components/ProductImages";
import Image from "next/image";
import React from "react";

function Singlepage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 mt-12">
      {/* Image Container */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* Text Container */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          aspernatur voluptate est aperiam aut qui nulla cupiditate nam dolores
          et beatae excepturi totam nobis voluptatem magnam, pariatur eveniet a
          sequi, harum distinctio animi! Eos odio, earum fugit ipsam in
          inventore sint, corporis quidem ex autem cupiditate nostrum, suscipit
          iste vel.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-gray-500 line-through text-xl">&#8358; 6700</h3>
          <h2 className="font-medium text-2xl">&#8358; 5400</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizedProducts />

        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">PRODUCT INFO</h4>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            inventore nam blanditiis molestiae, repudiandae animi officiis
            voluptates. Porro tenetur quae modi deleniti asperiores voluptatum,
            aperiam similique eveniet vel in laudantium numquam, beatae ducimus
            odit quisquam vero! Ut, voluptas! Sequi, minima.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">RETURN & REFUND POLICY</h4>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            inventore nam blanditiis molestiae, repudiandae animi officiis
            voluptates. Porro tenetur quae modi deleniti asperiores voluptatum,
            aperiam similique eveniet vel in laudantium numquam, beatae ducimus
            odit quisquam vero! Ut, voluptas! Sequi, minima.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">SHIPPING INFO</h4>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
            inventore nam blanditiis molestiae, repudiandae animi officiis
            voluptates. Porro tenetur quae modi deleniti asperiores voluptatum,
            aperiam similique eveniet vel in laudantium numquam, beatae ducimus
            odit quisquam vero! Ut, voluptas! Sequi, minima.
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default Singlepage;
