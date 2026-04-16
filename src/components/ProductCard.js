function ProductCard({ product, addToCart }) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" style={{height:"200px", objectFit:"contain"}} />

        <div className="card-body">
          <h6>{product.title.substring(0, 40)}...</h6>
          <p>${product.price}</p>

          <button className="btn btn-success btn-sm" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;