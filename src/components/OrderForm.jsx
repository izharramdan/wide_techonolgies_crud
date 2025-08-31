import { useState } from "react";
import OrderItemRow from "./OrderItemRow";

function OrderForm({ order, onSave, onCancel }) {
  const [localOrder, setLocalOrder] = useState(order);

  const handleChangeItem = (index, field, value) => {
    const newItems = [...localOrder.items];
    newItems[index][field] = field === "name" ? value : Number(value);
    setLocalOrder({ ...localOrder, items: newItems });
  };

  const handleAddItem = () => {
    setLocalOrder({
      ...localOrder,
      items: [...localOrder.items, { name: "", qty: 1, price: 0 }]
    });
  };

  const handleRemoveItem = (index) => {
    const newItems = localOrder.items.filter((_, i) => i !== index);
    setLocalOrder({ ...localOrder, items: newItems });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(localOrder);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="relative max-w-xl w-full mx-4 border border-blue-200 p-8 rounded-3xl bg-gradient-to-br from-white via-blue-50 to-blue-100 shadow-2xl space-y-6 transition-all duration-300 animate-fade-in"
      >
        {/* Tombol close pojok kanan atas */}
        <button
          type="button"
          onClick={onCancel}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-3xl font-bold focus:outline-none transition-colors duration-150"
          aria-label="Tutup"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center tracking-wide">
          Form Order
        </h2>

        <label className="block mb-3">
          <span className="font-medium text-blue-800">Tanggal Order:</span>
          <input
            type="date"
            value={localOrder.date}
            onChange={(e) =>
              setLocalOrder({ ...localOrder, date: e.target.value })
            }
            className="border border-blue-200 px-4 py-2 rounded-lg ml-2 focus:ring-2 focus:ring-blue-300 outline-none transition-all"
          />
        </label>

        <h3 className="font-semibold text-blue-700 mb-1">Items</h3>
        <div className="space-y-2">
          {localOrder.items.map((item, idx) => (
            <OrderItemRow
              key={idx}
              item={item}
              index={idx}
              onChange={handleChangeItem}
              onRemove={handleRemoveItem}
              canRemove={localOrder.items.length > 1}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleAddItem}
          className="bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-lg shadow hover:from-green-500 hover:to-green-600 font-semibold transition-all duration-150"
        >
          + Tambah Item
        </button>

        <div className="flex gap-3 pt-4 justify-end">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-xl shadow hover:from-blue-700 hover:to-blue-500 font-bold transition-all duration-150"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-xl shadow hover:bg-gray-400 font-semibold transition-all duration-150"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;