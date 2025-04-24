import { getCategories } from "@/requests/pizza";
import { FC } from "react";

const Categories: FC = async () => {
  const categories = await getCategories();

  return (
    <div className="flex items-center gap-[6px] bg-[#FAFAFA] rounded-2xl p-[6px]">
      {categories.map((category, index) => (
        <span
          key={category.id}
          className={`px-4 py-[10px] text-base font-bold ${
            index === 0
              ? "shadow-xs bg-white rounded-2xl text-[#FE5F00]"
              : "text-black cursor-pointer hover:text-[#FE5F00] transition duration-200 ease-in-out"
          }`}
        >
          {category.name}
        </span>
      ))}
    </div>
  );
};

export default Categories;
