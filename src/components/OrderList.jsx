function OrderList({ orders, onEdit, onDelete }) {
  return (
    <div className="space-y-6">
      {/* Jika belum ada order */}
      {orders.length === 0 && (
        <div className="flex flex-col items-center py-16 animate-fade-in">
          <p className="text-gray-400 text-xl font-medium">
            Belum ada order tersimpan
          </p>
        </div>
      )}

      {/* List Order */}
      {orders.map((order) => (
        <div
          key={order.id}
          className="border border-gray-200 p-6 rounded-2xl shadow-md bg-white hover:shadow-lg transition-all duration-200 animate-fade-in"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-blue-700">
              Tanggal: <span className="text-gray-800">{order.date}</span>
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(order)}
                className="px-4 py-2 rounded-lg bg-yellow-400 text-gray-800 font-semibold shadow hover:bg-yellow-500 transition"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(order.id)}
                className="px-4 py-2 rounded-lg bg-red-500 text-white font-semibold shadow hover:bg-red-600 transition"
              >
                Hapus
              </button>
            </div>
          </div>

          {/* Items */}
          <ul className="space-y-2 pl-5">
            {order.items.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center text-gray-700"
              >
                <div>
                  <span className="font-medium">{item.name}</span>{" "}
                  <span className="text-gray-500">
                    ({item.qty} x Rp{item.price})
                  </span>
                </div>
                <span className="font-semibold text-blue-600">
                  Rp{item.qty * item.price}
                </span>
              </li>
            ))}
          </ul>

          {/* Total */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between text-lg font-bold text-blue-800">
            <span>Total:</span>
            <span>
              Rp
              {order.items.reduce((sum, i) => sum + i.qty * i.price, 0)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderList;
