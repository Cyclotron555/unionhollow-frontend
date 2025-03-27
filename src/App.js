import React from "react";

function App() {
  return (
      <div className="bg-gray-900 text-white min-h-screen">
        <nav className="bg-gray-800 px-6 py-4 flex justify-between">
          <div className="text-xl font-bold">Union Hollow</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-400">Login</a>
            <a href="#" className="hover:text-blue-400">Register</a>
          </div>
        </nav>

        <main className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Placeholder articles */}
          {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all">
                <h2 className="text-lg font-semibold mb-2">Article Title {i + 1}</h2>
                <p className="text-sm mb-2">This is where the article content preview would go.</p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>💬 12</span>
                  <span>🔁 5</span>
                  <span>🔥 😂 👍</span>
                </div>
              </div>
          ))}
        </main>
      </div>
  );
}

export default App;
