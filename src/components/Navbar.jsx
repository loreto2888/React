import { formatCLP } from '../utils/format'

const Navbar = () => {
  const total = 25000
  const token = false

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm sticky-top">
      <div className="container-fluid">
        {/* Izquierda: solo logo */}
        <div className="d-flex align-items-center gap-2">
          <a className="navbar-brand fw-bold" href="#">
            🍕 Pizzería Mamma Mía!
          </a>
        </div>

        {/* Centro vacío para separación */}
        <div className="flex-grow-1"></div>

        {/* Derecha: botones navegación y total */}
        <div className="d-flex align-items-center gap-2 ms-auto">
          <button className="btn btn-outline-light btn-sm">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
              <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm">🔐 Login</button>
              <button className="btn btn-outline-light btn-sm">🔐 Register</button>
            </>
          )}
          <button className="btn btn-success ms-2">
            🛒 Total: ${formatCLP(total)}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
