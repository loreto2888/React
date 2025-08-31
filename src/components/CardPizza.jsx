import { formatCLP } from '../utils/format'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={`Pizza ${name}`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <p className="card-text small small-muted">
          Ingredientes: {ingredients?.join(', ')}
        </p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">${formatCLP(price)}</span>
          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-outline-primary">Ver más</button>
            <button className="btn btn-sm btn-primary">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
