function OrderList({ orders, onEdit, onDelete }) {
  return (
    <div className="space-y-5">
      {orders.length === 0 && (
        <div className="flex flex-col items-center py-12 animate-fade-in-slow">
          
          <p className="text-gray-500 text-lg font-medium">
            Belum ada order
          </p>
        </div>
      )}

      {orders.map((order) => (
        <div
          key={order.id}
          className="border border-blue-100 p-6 rounded-2xl shadow-xl bg-white hover:shadow-blue-200 transition-all duration-200 group animate-fade-in"
        >
          <div className="flex justify-between items-start gap-4">
            <div>
              <p className="font-semibold text-blue-700 mb-2">
                Tanggal: <span className="font-bold">{order.date}</span>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                {order.items.map((item, idx) => (
                  <li key={idx} className="text-gray-700">
                    <span className="font-medium">{item.name}</span>{" "}
                    <span className="text-gray-500">
                      - {item.qty} x Rp{item.price}
                    </span>{" "}
                    <span className="font-bold text-blue-600">
                      = Rp{item.qty * item.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-bold mt-4 text-lg text-blue-800">
                Total: Rp
                {order.items.reduce((sum, i) => sum + i.qty * i.price, 0)}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onEdit(order)}
                className="bg-yellow-400 px-4 py-2 rounded-lg shadow hover:bg-yellow-500 font-semibold text-gray-800 transition-all duration-150"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(order.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 font-semibold transition-all duration-150"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderList;