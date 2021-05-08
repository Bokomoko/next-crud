import React from 'react'

import Nav from '../components/nav';
import Footer from '../components/footer';
import ProductList from '../componentes/productlist'

export default function IndexPage(): JSX.Element {
  return (
    <>
      <div className="text-center bg-home">
        <Nav />
        <div className="flex flex-row space-x-64 w-2/5 m-auto text-white">
          <h1 className="text-3xl my-56 rounded-lg p-4">
            Product Store
           </h1>
          <ProductList />

        </div>
      </div>
      <div className="text-center">
      </div>

      <div className="flex flex-row space-x-48 w-5/6 m-auto mt-32">
        <section className="w-2/3">
        </section>

      </div>

      <div className="flex flex-row space-x-48 w-5/6 m-auto my-32">

        <section className="w-2/3">
        </section>
      </div>
      <div className="mb-16 text-center">
      </div>
      <Footer />
    </>
  );
};


