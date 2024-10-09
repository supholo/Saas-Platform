import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Settings, FileText, BarChart2, Users, Layout, ClipboardList, Bell, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userManagementOpen, setUserManagementOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleUserManagement = () => setUserManagementOpen(!userManagementOpen);

  const NavItem = ({ to, icon, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`flex items-center py-2 px-4 rounded transition duration-200 ${
          isActive
            ? 'bg-indigo-700 text-white'
            : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'
        }`}
      >
        {icon}
        <span className="mx-4">{children}</span>
      </Link>
    );
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed z-30 top-4 left-4 p-2 bg-indigo-800 text-white rounded-md lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`bg-gradient-to-b from-indigo-800 to-indigo-600 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-20 overflow-y-auto`}
      >
        <nav className="space-y-3">
          <NavItem to="/" icon={<Home size={20} />}>Dashboard</NavItem>
          <NavItem to="/cicd" icon={<Settings size={20} />}>CI/CD Config</NavItem>
          <NavItem to="/logging" icon={<FileText size={20} />}>Logging Service</NavItem>
          <NavItem to="/metrics" icon={<BarChart2 size={20} />}>Metrics Integration</NavItem>
          <NavItem to="/identity" icon={<Users size={20} />}>Identity Server</NavItem>
          <div>
            <button
              onClick={toggleUserManagement}
              className="flex items-center w-full py-2 px-4 rounded transition duration-200 text-indigo-100 hover:bg-indigo-700 hover:text-white"
            >
              <Users size={20} />
              <span className="mx-4">User Management</span>
              {userManagementOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {userManagementOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <NavItem to="/users" icon={<Users size={16} />}>Users</NavItem>
                <NavItem to="/roles" icon={<Users size={16} />}>Roles</NavItem>
                <NavItem to="/permissions" icon={<Users size={16} />}>Permissions</NavItem>
              </div>
            )}
          </div>
          <NavItem to="/custom-pages" icon={<Layout size={20} />}>Custom Pages</NavItem>
          <NavItem to="/audit-log" icon={<ClipboardList size={20} />}>Audit Log</NavItem>
          <NavItem to="/notifications" icon={<Bell size={20} />}>Notifications</NavItem>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;