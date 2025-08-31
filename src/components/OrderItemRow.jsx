function OrderItemRow({ item, index, onChange, onRemove, canRemove }) {
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="Nama Item"
        value={item.name}
        onChange={(e) => onChange(index, "name", e.target.value)}
        className="border px-2 py-1 rounded flex-1"
        required
      />
      <input
        type="number"
        min="1"
        value={item.qty}
        onChange={(e) => onChange(index, "qty", e.target.value)}
        className="border px-2 py-1 rounded w-20"
        required
      />
      <input
        type="number"
        min="0"
        value={item.price}
        onChange={(e) => onChange(index, "price", e.target.value)}
        className="border px-2 py-1 rounded w-28"
        required
      />
      <span className="w-32 text-right">
        Rp{item.qty * item.price}
      </span>
      {canRemove && (
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
        >
          x
        </button>
      )}
    </div>
  );
}

export default OrderItemRow;
