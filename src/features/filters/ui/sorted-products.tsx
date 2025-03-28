import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared";

export const SortedProducts = () => {
  return (
    <div className="flex items-center gap-2">
      <span>Sort by</span>
      <Select>
        <SelectTrigger className="w-[136px] h-9 bg-color-white border border-black/15">
          <SelectValue placeholder="sort by price" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="cheap">Cheap</SelectItem>
            <SelectItem value="expensive">Expensive</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
