import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  //   handle remove function
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  return (
    <div className="mt-5 py-5 text-center">
      <h3>Cart</h3>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((product) => {
            const { title, price, image, id } = product;
            return (
              <div className="col" key={id}>
                <div className="card h-100 d-flex flex-column justify-content-between">
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                  </div>
                  <p className="card-text text-center fw-bolder">$ {price}</p>
                  <div className="card-footer mx-auto">
                    <button
                      onClick={() => handleRemove(id)}
                      className="btn btn-primary"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
