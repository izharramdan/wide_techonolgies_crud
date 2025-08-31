import { useEffect, useState } from "react";
import OrderList from "./components/OrderList";
import OrderForm from "./components/OrderForm";
import Logo from "./assets/wide-logo.svg";

function App() {
  const [orders, setOrders] = useState(() => {
    const saved = sessionStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingOrder, setEditingOrder] = useState(null);
  useEffect(() => {
    sessionStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handleAddOrder = () => {
    setEditingOrder({
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      items: [{ name: "", qty: 1, price: 0 }],
    });
  };

  const handleSaveOrder = (order) => {
    if (orders.some((o) => o.id === order.id)) {
      setOrders(orders.map((o) => (o.id === order.id ? order : o)));
    } else {
      setOrders([...orders, order]);
    }
    setEditingOrder(null);
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-300 rounded-4xl">
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 flex flex-col items-center">
          <img
            src={Logo}
            alt="Wide Technologies Logo"
            className="mx-auto mb-4 h-24 w-auto drop-shadow-xl animate-fade-in"
            style={{ filter: "brightness(1.1)" }}
          />
          <span className="text-blue-800 animate-fade-in font-extrabold tracking-wide text-3xl mb-2 drop-shadow-sm">
            Order Management
          </span>
          <span className="text-gray-500 text-base font-medium animate-fade-in-slow mb-2">
            Kelola pesanan dengan mudah dan cepat 🚀
          </span>
        </h1>

        {editingOrder ? (
          <OrderForm
            order={editingOrder}
            onSave={handleSaveOrder}
            onCancel={() => setEditingOrder(null)}
          />
        ) : (
          <>
            <button
              onClick={handleAddOrder}
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-2xl shadow-xl mb-8 font-bold text-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-95"
            >
              <span className="mr-2 text-2xl align-middle">＋</span> Tambah Order
            </button>

            <div className="animate-fade-in-slow">
              <OrderList
                orders={orders}
                onEdit={setEditingOrder}
                onDelete={handleDeleteOrder}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;