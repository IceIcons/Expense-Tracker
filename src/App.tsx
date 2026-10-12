import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Transactions from "./Components/Transactions";
import AddTransactionDialog from "./Components/AddTransactionDialog";
import "./App.css";

function AppContent() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app-shell">
      <Header onAdd={() => setOpen(true)} />
      <main className="main-area">
        <Routes>
          <Route path="/" element={<Dashboard onAdd={() => setOpen(true)} />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </main>
      <AddTransactionDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

//category boyicha filter
//transictions da yana parnasetlar
//kunlar ketma ketligi
//kunni tanlash
//supa base ulash
//py chard(dumaloq) sihlatgan foizlarini hisoblab turuvchi
//income tanlanganda type ozgarishi kerak
