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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 flex flex-col items-center">
          <img
            src={Logo}
            alt="Wide Technologies Logo"
            className="mx-auto mb-4 h-20 w-auto drop-shadow-lg animate-fade-in"
          />
          <span className="text-blue-700 animate-fade-in font-extrabold tracking-wide text-3xl mb-2">
            Order Management
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
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-xl shadow-lg mb-6 font-semibold text-lg transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              + Tambah Order
            </button>

            
             
              <OrderList
                orders={orders}
                onEdit={setEditingOrder}
                onDelete={handleDeleteOrder}
              />
          </>
        )}
      </div>
    </div>
  );
}

export default App;