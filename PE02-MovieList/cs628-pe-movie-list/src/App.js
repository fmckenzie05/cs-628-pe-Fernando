import React from "react";
import MovieList from "./MovieList";
import "./App.css"; // Optional, if you have global styles for your app

function App() {
  return (
    <div className="App">
      {/* App Header */}
      <header className="App-header">
        <h1>Welcome to the Movie List App</h1>
      </header>

      {/* Main Content */}
      <main>
        {/* Render the MovieList Component */}
        <MovieList />
      </main>

      {/* Footer */}
      <footer>
        <p>© 2025 Movie List App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
