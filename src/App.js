import React from "react";
import NewsFeed from './NewsFeed';


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

            <NewsFeed />
        </div>
    );
}

export default App;
