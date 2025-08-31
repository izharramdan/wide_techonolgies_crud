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
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="relative max-w-xl w-full mx-4 border border-blue-200 p-7 rounded-2xl bg-white shadow-2xl space-y-5 transition-all duration-300 animate-fade-in"
      >
        {/* Tombol close pojok kanan atas */}
        <button
          type="button"
          onClick={onCancel}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold focus:outline-none"
          aria-label="Tutup"
        >
          &times;
        </button>

        <label className="block">
          <span className="font-medium">Tanggal Order:</span>
          <input
            type="date"
            value={localOrder.date}
            onChange={(e) =>
              setLocalOrder({ ...localOrder, date: e.target.value })
            }
            className="border px-3 py-1 rounded ml-2"
          />
        </label>

        <h3 className="font-semibold">Items</h3>
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
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          + Tambah Item
        </button>

        <div className="flex gap-2 pt-3">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          >
            Simpan
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;