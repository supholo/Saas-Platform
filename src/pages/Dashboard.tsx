import React from 'react';
import { BarChart2, Users, FileText, Bell } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import WarningBoundary from '../components/WarningBoundary';

const Dashboard = () => {
  const podData = [
    { name: 'Pod 1', health: 95 },
    { name: 'Pod 2', health: 88 },
    { name: 'Pod 3', health: 92 },
    { name: 'Pod 4', health: 98 },
    { name: 'Pod 5', health: 85 },
    { name: 'Pod 6', health: 90 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard icon={<BarChart2 size={24} />} title="Active Users" value="1,234" />
        <DashboardCard icon={<Users size={24} />} title="Total Users" value="5,678" />
        <DashboardCard icon={<FileText size={24} />} title="Log Entries" value="10,234" />
        <DashboardCard icon={<Bell size={24} />} title="Notifications" value="42" />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Kubernetes Pod Health</h2>
        <div className="bg-white shadow-md rounded-lg p-4" style={{ height: '300px' }}>
          <WarningBoundary>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={podData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="health" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </WarningBoundary>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((item) => (
                <tr key={item} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/40?img=${item}`} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">User {item}</div>
                        <div className="text-sm text-gray-500">user{item}@example.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Logged in
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date().toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="text-indigo-500">{icon}</div>
        <span className="text-2xl font-bold">{value}</span>
      </div>
      <h3 className="text-gray-600 text-sm">{title}</h3>
    </div>
  );
};

export default Dashboard;