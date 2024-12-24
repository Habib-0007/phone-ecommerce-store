import { Search } from "lucide-react";

const SearchSection: React.FC = () => {
  return (
    <div className="flex justify-start items-stretch gap-2 relative bg-gray-100 py-2 px-3 rounded-md w-fit">
      <Search width={16} height={16} className="self-center" />
      <input type="text" name="product" id="product" className="bg-inherit" />
    </div>
  );
};

export default SearchSection;
