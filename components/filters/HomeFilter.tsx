import { Button } from "../ui/button";

const filters = [
  { name: "Newest", value: "newest" },
  { name: "Popular", value: "popular" },
  { name: "Unanswered", value: "unanswered" },
  { name: "Recommended", value: "recommended" },
];

const HomeFilter = () => {
  return (
    <div>
      {filters.map((filter) => (
        <Button key={filter.name}></Button>
      ))}
    </div>
  );
};

export default HomeFilter;
