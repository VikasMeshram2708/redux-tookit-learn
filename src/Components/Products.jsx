import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  //   const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  //   handle add function
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>ERROR...</h2>;
  }

  return (
    <>
      <h3 className="text-center mt-5 py-5 fs-1 fw-bolder text-decoration-underline">
        Products
      </h3>
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
                      onClick={() => handleAdd(product)}
                      className="btn btn-primary"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
