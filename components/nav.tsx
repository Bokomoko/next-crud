import { NextComponentType } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Nav(): JSX.Element {
  const [session, loading] = useSession();

  return (
    <nav className="pb-20">
      <ul className="flex justify-between items-center bg-nav fixed w-full z-50">
        <Link href="/">
          <a className="flex">
            <Image
              src="/sapowarelogo.svg"
              alt="SapoWare Product Store"
              width={60}
              height={60}
            />
          </a>
        </Link>
        <ul className="flex justify-between items-center space-x-4 mr-4 text-white text-2xl leading-10">
          <Link href="/search">
            <a className="border-l-2 border-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200">
              Search Product
            </a>
          </Link>
          {session ? (
            <>
              <Link href="/product">
                <a className="border-l-2 border-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200">
                  Products
                </a>
              </Link>
              <Link href="/user">
                <a className="border-l-2 border-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200">
                  Users
                </a>
              </Link>
              <button
                className="border-l-2 border-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
                onClick={(): Promise<void> => signOut()}
              >
                Exit
              </button>
            </>
          ) : (
            <button
              className="border-l-2 border-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200"
              onClick={(): Promise<void> => signIn('auth0')}
            >
              Login
            </button>
          )}
        </ul>
      </ul>
    </nav>
  );
};


