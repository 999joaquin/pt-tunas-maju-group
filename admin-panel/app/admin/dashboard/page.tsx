'use client';
import AdminLayout from '../../../components/AdminLayout';


import { useSession, signOut } from 'next-auth/react';

const AdminDashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <p>Access Denied</p>;
  }

  return (
    <div className="min-h-screen bg-blue-500 text-white">
      <div className="flex">
        <aside className="w-64 bg-blue-800 h-screen">
          <nav>
            <ul className="space-y-2 p-4">
              <li><a href="/admin/banner">Banner</a></li>
              <li><a href="/admin/company-profile">Company Profile</a></li>
              <li><a href="/admin/products">Products</a></li>
              <li><a href="/admin/facilities">Facilities</a></li>
            </ul>
          </nav>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          >
            Logout
          </button>
        </aside>
        <main className="flex-1 p-8">
          <h1 className="text-4xl font-bold">Welcome, {session.user.name}</h1>
        </main>
      </div>
    </div>
  );
};

const Dashboard = () => {
    return (
      <AdminLayout>
        <h1 className="text-4xl font-bold">Welcome to the Admin Dashboard</h1>
      </AdminLayout>
    );
  };

export default AdminDashboard;
