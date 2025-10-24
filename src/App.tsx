import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // 🧠 Add or update product
  const handleCreate = (newProduct: any) => {
    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = newProduct;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, newProduct]);
    }
  };

  // ✏️ Edit product
  const handleEdit = (index: number) => {
    const product = products[index];
    setEditIndex(index);
    window.dispatchEvent(new CustomEvent("editProduct", { detail: product }));
  };

  // 🗑️ Delete product
  const handleDelete = (index: number) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  // 🔍 Filter search
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">🛍️ Clothes Shop CRUD System</h1>

      <SearchBar onSearch={(value) => setSearchTerm(value)} />

      <ProductForm onCreate={handleCreate} editIndex={editIndex} />

      <ProductTable
        products={filteredProducts}
        onEdit={handleEdit} // ✅ pass function
        onDelete={handleDelete} // ✅ pass function
      />
    </div>
  );
}
