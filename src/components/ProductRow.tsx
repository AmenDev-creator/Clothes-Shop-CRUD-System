// src/components/ProductRow.tsx

interface ProductRowProps {
  product: {
    title: string;
    price: string;
    quantity: string;
    addedStock: string;
    soldStock: string;
    size : number;
    date : number
    newStock: number;
     barcodeUrl?: string;
     barcodeNumber?: string;
  };
  index: number;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

export default function ProductRow({
  product,
  index,
  onEdit,
  onDelete,
}: ProductRowProps) {
 
  const totalValue = Number(product.price) * Number(product.newStock);

  return (
    <tr className="border-b border-gray-700 text-center hover:bg-gray-800 transition-all">
      <td className="p-2">{index + 1}</td>
      <td className="p-2">{product.title}</td>
      <td className="p-2">${product.price}</td>
      <td className="p-2">{product.quantity}</td>
      <td className="p-2">{product.addedStock}</td>
      <td className="p-2">{product.soldStock}</td>
      <td className="p-2">{product.size}</td>
      <td className="p-2">{product.date}</td>
      <td className="p-2 text-green-400">{product.newStock}</td>
      <td className="p-2 text-yellow-400">${totalValue}</td>
      <td className="p-2 flex justify-center gap-2">
        <button
          onClick={() => onEdit(index)}
          className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(index)}
          className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-md"
        >
          🗑️ Delete
        </button>
      </td>
      <td className="p-2">
       {product.barcodeUrl && (
      <img src={product.barcodeUrl} alt="Barcode" className="mx-auto w-28 h-10" />
       )}
      </td>

      <td className="p-2 text-blue-400 font-mono">
      {product.barcodeNumber}
      </td>

    </tr>
  );
}
