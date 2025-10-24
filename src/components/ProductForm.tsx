// src/components/ProductForm.tsx
import { useState, useEffect } from "react";

interface ProductFormProps {
  onCreate: (product: any) => void;
  editIndex: number | null;
}

export default function ProductForm({ onCreate, editIndex }: ProductFormProps) {
  // 🧠 Local states
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [addedStock, setAddedStock] = useState("");
  const [soldStock, setSoldStock] = useState("");
  const [size, setSize] = useState(""); // changed setter name to setSize
  const [date, setDate] = useState("") ;
  const [newStock, setNewStock] = useState(0);
  const [barcodeUrl, setBarcodeUrl] = useState("");
  const [barcodeNumber, setBarcodeNumber] = useState("");

  // 🧮 Update new stock when stock values change
  useEffect(() => {
    const oldQty = Number(quantity) || 0;
    const added = Number(addedStock) || 0;
    const sold = Number(soldStock) || 0;
    setNewStock(oldQty + added - sold);
  }, [quantity, addedStock, soldStock]);

  useEffect(() => {
  if (title.trim() !== "") {
    const encodedData = encodeURIComponent(title);
    const url = `https://barcode.tec-it.com/barcode.ashx?data=${encodedData}&code=Code128&translate-esc=true`;
    setBarcodeUrl(url);
  } else {
    setBarcodeUrl("");
  }
}, [title]);

  // 🧠 Listen for edit event to prefill the form
  useEffect(() => {
    const handleEditEvent = (e: any) => {
      const data = e.detail;
      setTitle(data.title);
      setPrice(data.price);
      setQuantity(data.quantity);
      setAddedStock(data.addedStock);
      setSoldStock(data.soldStock);
      setNewStock(data.newStock);
      setSize(data.size); // use setSize
      setDate(data.date);
    };

    window.addEventListener("editProduct", handleEditEvent);
    return () => window.removeEventListener("editProduct", handleEditEvent);
  }, []);

  // 🧾 Add or Update product
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const generatedNumber = Date.now().toString().slice(-6);

    const newProduct = {
      title,
      price,
      quantity,
      addedStock,
      soldStock,
      newStock,
      size,
      date,
       barcodeUrl,
        barcodeNumber: generatedNumber,
    };

    onCreate(newProduct); // send data to App

    // 🧹 Clear fields after adding/updating
    setTitle("");
    setPrice("");
    setQuantity("");
    setAddedStock("");
    setSoldStock("");
    setSize(""); // clear size
    setDate("");
    setNewStock(0);
  };

  return (
    <div className="bg-gray-900 text-white p-5 rounded-2xl shadow-lg mb-5">
      <h2 className="text-lg font-semibold mb-4 text-center">
        {editIndex !== null ? "✏️ Update Product" : "➕ Add New Product"}
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="p-2 rounded-md bg-gray-800 border border-gray-700"
        />

        <input
          type="number"
          placeholder="Price ($)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="p-2 rounded-md bg-gray-800 border border-gray-700"
        />

        <input
          type="number"
          placeholder="Old Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="p-2 rounded-md bg-gray-800 border border-gray-700"
        />

        <input
          type="number"
          placeholder="Added Stock"
          value={addedStock}
          onChange={(e) => setAddedStock(e.target.value)}
          className="p-2 rounded-md bg-gray-800 border border-gray-700"
        />

        <input
          type="number"
          placeholder="Sold Stock"
          value={soldStock}
          onChange={(e) => setSoldStock(e.target.value)}
          className="p-2 rounded-md bg-gray-800 border border-gray-700"
        />

         <input
          type="number"
          placeholder="Size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          required
          className="p-2 rounded-md bg-gray-800 border border-gray-700"
        />

         <input
          type="string"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="p-2 rounded-md bg-gray-800 border border-gray-700"
        />

        <input
          type="number"
          placeholder="New Stock"
          value={newStock}
          readOnly
          className="p-2 rounded-md bg-gray-800 border border-gray-700 text-green-400"
        />

        <button
          type="submit"
          className={`md:col-span-2 mt-3 py-2 rounded-md text-white font-semibold ${
            editIndex !== null
              ? "bg-blue-600 hover:bg-blue-500"
              : "bg-green-600 hover:bg-green-500"
          }`}
        >
          {editIndex !== null ? "Update Product" : "Add Product"}
        </button>

      </form>
    </div>
  );
}
