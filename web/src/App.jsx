import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Bienvenido a Mi Aplicación</h2>
        <p>
          Esta es una aplicación de ejemplo utilizando React, Vite y Materialize.
        </p>

        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Sección 1</span>
                <p>Contenido de la sección 1...</p>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Sección 2</span>
                <p>Contenido de la sección 2...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;