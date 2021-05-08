import { useState, useCallback } from 'react';
import { useSession } from 'next-auth/client';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import NavBar from '../../components/nav';
import api from '../../utils/api';



interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  datePublished: string;
  images: string[];
}



export default function productPage({
  _id,
  name,
  description,
  price,
  images,

}: Product): JSX.Element {
  const [session, loading] = useSession();

  const handleSubmit = useCallback(async () => {
    const data = {
      name,
      description,
      price,
      images,
    };

    try {
      await axios.post(process.env.NEXT_PUBLIC_URL + '/api/postproduct', data);
      alert('Product successfuly added!');
    } catch (err) {
      alert(err?.response?.data?.error || err);
    }
  }, [session]);

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center">
        <p className="text-3xl border-2 border-box w-3/12 m-auto text-center mt-12">
          {name}
        </p>
        <h1 className="text-2xl">Name: {name}</h1>

        <div className="text-2xl border-2 border-box w-4/6 m-auto mt-4 p-4">
          <div>
            <div className="mb-2">
              <p>Description</p>
              <div className="flex flex-row space-x-10">
                <div className="border-2 border-box w-full text-center">
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <p>Price:</p>
              <div className="flex flex-row space-x-10">
                <p>
                  {price || 'Consult'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {session ? (
        <>
          <div className="text-center">
            <button
              className="text-xl bg-box text-center text-white mt-8 p-2"
              onClick={handleSubmit}
              type="submit"
            >
              Confirm product
                </button>
          </div>
        </>
      ) : (
        <h1 className="text-xl bg-box text-center text-white mt-8 p-2">
          please login to update product {name}
        </h1>
      )}
    </div >
    </>
  );
}

export async function getServerSideProps(id) {


  const findString = { products: { $in: [new RegExp(`${products}`, 'i')] } }


  const response = await api<Product>(`/api/getbyid/${_id}`);

  const product = response.data;

  return {
    props: product,
  };
};
