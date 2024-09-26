import React from 'react';
import { Button } from '@mui/material';

const Product = () => {
  // You can manage the products state here if needed
  const products = []; // Example: replace this with your product data

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-1 py-[200px] items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no products
            </h3>
            <p className="text-sm text-muted-foreground">
              You can start selling as soon as you add a product.
            </p>
            <Button className="mt-4" variant="contained" color="primary">
              Add Product
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {/* Map through products and display them here */}
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg shadow">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <p className="font-bold">{`$${product.price.toFixed(2)}`}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Product;
