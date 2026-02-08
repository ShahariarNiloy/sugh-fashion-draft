import { Category } from "@/types/category";

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <a href="#" className="group flex flex-col items-center">
      <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden mb-4 ring-2 ring-transparent group-hover:ring-blue transition-all duration-300">
        <div className="absolute inset-1 rounded-full overflow-hidden bg-gray-1">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <h3 className="inline-block font-medium text-sm text-center text-dark group-hover:text-blue transition-colors duration-200">
          {item.title}
        </h3>
      </div>
    </a>
  );
};

export default SingleItem;
