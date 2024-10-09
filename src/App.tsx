import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CICDConfig from './pages/CICDConfig';
import LoggingService from './pages/LoggingService';
import MetricsIntegration from './pages/MetricsIntegration';
import IdentityServer from './pages/IdentityServer';
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';
import PermissionManagement from './pages/PermissionManagement';
import CustomPages from './pages/CustomPages';
import AuditLog from './pages/AuditLog';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 pt-16 lg:pt-0">
            <div className="container mx-auto px-6 py-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cicd" element={<CICDConfig />} />
                <Route path="/logging" element={<LoggingService />} />
                <Route path="/metrics" element={<MetricsIntegration />} />
                <Route path="/identity" element={<IdentityServer />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/roles" element={<RoleManagement />} />
                <Route path="/permissions" element={<PermissionManagement />} />
                <Route path="/custom-pages" element={<CustomPages />} />
                <Route path="/audit-log" element={<AuditLog />} />
                <Route path="/notifications" element={<Notifications />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;