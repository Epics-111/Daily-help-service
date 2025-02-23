import React from "react";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4 text-center text-xl font-bold">
        Daily Help Services
      </header>
      <main className="p-4">
        <AppRoutes />
      </main>
      <footer className="bg-blue-500 text-white p-4 text-center mt-10">
        &copy; 2025 Daily Help Services. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
