import React, { useState } from 'react';
import { Bell, Search, User, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

  return (
    <header className="bg-white shadow-md z-10 relative">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center w-full lg:w-auto">
            <div className="w-full lg:w-auto lg:flex-1 lg:mr-4">
              <input
                className="bg-gray-200 text-gray-700 border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Search..."
              />
            </div>
            <button className="ml-2 text-gray-600 focus:outline-none lg:hidden">
              <Search size={20} />
            </button>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <button
                onClick={toggleNotifications}
                className="flex mx-4 text-gray-600 focus:outline-none"
              >
                <Bell size={20} />
              </button>
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-20">
                  <div className="py-2">
                    <div className="px-4 py-2 text-sm text-gray-700">
                      <p className="font-bold">New user registered</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                    <div className="px-4 py-2 text-sm text-gray-700">
                      <p className="font-bold">System update completed</p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User profile"
                />
                <ChevronDown size={16} className="ml-1" />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20">
                  <a
                    href="#profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </a>
                  <a
                    href="#settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <a
                    href="#signout"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;