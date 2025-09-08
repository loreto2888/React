import { formatCLP } from '../utils/format';

const Navbar = ({ user, setView, handleLogout }) => {
  const total = 25000;

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm sticky-top">
      <div className="container-fluid">
        {/* Izquierda: solo logo */}
        <div className="d-flex align-items-center gap-2">
          <a className="navbar-brand fw-bold" href="#" onClick={() => setView('home')}>
            🍕 Pizzería Mamma Mía!
          </a>
        </div>

        {/* Centro vacío para separación */}
        <div className="flex-grow-1"></div>

        {/* Derecha: botones navegación y total */}
        <div className="d-flex align-items-center gap-2 ms-auto">
          <button className="btn btn-outline-light btn-sm" onClick={() => setView('home')}>🍕 Home</button>
          {user ? (
            <>
              <span className="text-light small me-2">� {user.username}</span>
              <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm" onClick={() => setView('login')}>🔐 Login</button>
              <button className="btn btn-outline-light btn-sm" onClick={() => setView('register')}>🔐 Register</button>
            </>
          )}
          <button className="btn btn-success ms-2">
            🛒 Total: ${formatCLP(total)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
