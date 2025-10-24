// src/components/ProductTable.tsx
import ProductRow from "./ProductRow";

interface ProductTableProps {
  products: any[];
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

export default function ProductTable({
  products,
  onEdit,
  onDelete,
}: ProductTableProps) {
  return (
    <div className="bg-gray-900 text-white p-5 rounded-2xl shadow-lg mt-5">
      <h2 className="text-lg font-semibold mb-4 text-center">📋 Product List</h2>

      {products.length === 0 ? (
        <p className="text-center text-gray-400">No products added yet.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-800 text-sm">
              <th className="p-2 border-b border-gray-700">ID</th>
              <th className="p-2 border-b border-gray-700">Title</th>
              <th className="p-2 border-b border-gray-700">Price</th>
              <th className="p-2 border-b border-gray-700">Old Qty</th>
              <th className="p-2 border-b border-gray-700">Added</th>
              <th className="p-2 border-b border-gray-700">Sold</th>
              <th className="p-2 border-b border-gray-700">Size</th>
              <th className="p-2 border-b border-gray-700">Date</th>
              <th className="p-2 border-b border-gray-700">New Stock</th>
              <th className="p-2 border-b border-gray-700">Total ($)</th>
              <th className="p-2 border-b border-gray-700">Actions</th>
              <th className="p-2 border-b border-gray-700">Barcode IMG</th>
              <th className="p-2 border-b border-gray-700">Barcode N.</th>

            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <ProductRow
                key={index}
                product={product}
                index={index}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
