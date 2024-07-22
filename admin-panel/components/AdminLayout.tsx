'use client';

import { useSession, signOut } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'authenticated') {
    return (
      <div className="flex">
        <aside className="w-64 bg-blue-800 h-screen text-white">
          <nav>
            <ul className="space-y-2">
              <li><a href="/admin/banner">Banner</a></li>
              <li><a href="/admin/company-profile">Company Profile</a></li>
              <li><a href="/admin/products">Products</a></li>
              <li><a href="/admin/facilities">Facilities</a></li>
            </ul>
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Logout
            </button>
          </nav>
        </aside>
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    );
  }

  return null;
};

export default AdminLayout;
