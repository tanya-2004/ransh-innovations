import { useState } from "react";
import {Filter, CareerContent } from "../containers";

const CareerPage = () => {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    experience: "",
    industry: "",
  });
  const [searchText, setSearchText] = useState("");

  const handleFilterChange = updated => setFilters(updated);
  const handleSearchChange = text => setSearchText(text);
  const handleClearFilters = () => {
    setFilters({
      type: "",
      location: "",
      experience: "",
      industry: "",
    });
    setSearchText("");
  };

  return (
    <div className="app">
      <main role="main" aria-label="Career Page" className="mb-[8rem] space-y-8">
        <Filter
          filters={filters}
          searchText={searchText}
          onFilterChange={handleFilterChange}
          onSearch={handleSearchChange}
          onClear={handleClearFilters}
        />
        <CareerContent filters={filters} searchText={searchText} />
      </main>
    </div>
  );
};

export default CareerPage;