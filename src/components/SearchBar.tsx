// src/components/SearchBar.tsx
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  // 🧩 When user types, update state + send value to parent
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="w-full mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="🔍 Search product by name..."
        className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
      />
    </div>
  );
}
