export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="specs">{product.specs}</p>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    );
}