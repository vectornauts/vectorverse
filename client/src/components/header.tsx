"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();
  const user = session?.user;

  return (
    <header className="h-30">
      <nav className="navbar bg-base-100 px-8">
        <div className="flex-1">
          <Link
            href="/"
            className="link link-primary link-hover hover:no-underline text-4xl font-semibold"
          >
            VectorVerse
          </Link>
        </div>
        <div className="">
          <ul className="menu menu-horizontal px-2">
            <li>
              <Link href="/" className="py-0 text-small md:text-xl">
                Home
              </Link>
            </li>
            {!user && (
              <>
                <li>
                  <Link href="/login" className="py-0 text-small md:text-xl">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/register" className="py-0 text-small md:text-xl">
                    Register
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link href="/vector" className="py-0 text-small md:text-xl">
                    Vector
                  </Link>
                </li>
                <li>
                  <Link href="/embedding" className="py-0 text-small md:text-xl">
                    Embedding
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="py-0 text-small md:text-xl">
                    Profile
                  </Link>
                </li>
                <li onClick={() => signOut()}>
                  <a className="py-0 text-small md:text-xl">Logout</a>
                </li>
              </>
            )}
            {/*TODO: Wrap inside login*/}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
