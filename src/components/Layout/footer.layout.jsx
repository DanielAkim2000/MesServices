import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div class="container">
          <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
              <li class="nav-item">
              <p
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/Accueil");
                  }}
                  class="nav-link px-2 text-muted"
                >
                  Accueil
                </p>
              </li>
              <li class="nav-item">
              <p
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/MesProjets");
                  }}
                  class="nav-link px-2 text-muted"
                >
                 Mes Projets
                </p>
              </li>
              <p
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/Tarif");
                  }}
                  class="nav-link px-2 text-muted"
                >
                  Tarif
                </p>
              <li class="nav-item">
                <p
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/Mecontacter");
                  }}
                  class="nav-link px-2 text-muted"
                >
                  Me Contacter
                </p>
              </li>
            </ul>
            <p class="text-center text-muted">&copy; 2024 Emane Daniel Akim</p>
          </footer>
        </div>
    );
};

export { Footer };