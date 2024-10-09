import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialPermissions = [
  { id: 'perm1', name: 'View Dashboard', category: 'Dashboard' },
  { id: 'perm2', name: 'Edit Dashboard', category: 'Dashboard' },
  { id: 'perm3', name: 'View Users', category: 'User Management' },
  { id: 'perm4', name: 'Edit Users', category: 'User Management' },
  { id: 'perm5', name: 'Delete Users', category: 'User Management' },
  { id: 'perm6', name: 'View Roles', category: 'Role Management' },
  { id: 'perm7', name: 'Edit Roles', category: 'Role Management' },
  { id: 'perm8', name: 'Delete Roles', category: 'Role Management' },
];

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState(initialPermissions);
  const [roles, setRoles] = useState([
    { id: 'role1', name: 'Admin', permissions: { read: [], write: [], update: [], delete: [] } },
    { id: 'role2', name: 'User', permissions: { read: [], write: [], update: [], delete: [] } },
  ]);
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    const sourceType = source.droppableId === 'permissions' ? 'permissions' : 'role';
    const destType = destination.droppableId === 'permissions' ? 'permissions' : 'role';

    if (sourceType === 'permissions' && destType === 'role') {
      const permission = permissions[source.index];
      const updatedRole = {
        ...selectedRole,
        permissions: {
          ...selectedRole.permissions,
          [destination.droppableId]: [
            ...selectedRole.permissions[destination.droppableId],
            permission,
          ],
        },
      };
      setSelectedRole(updatedRole);
      setRoles(roles.map((role) => (role.id === updatedRole.id ? updatedRole : role)));
    } else if (sourceType === 'role' && destType === 'role') {
      const updatedPermissions = Array.from(selectedRole.permissions[source.droppableId]);
      const [reorderedItem] = updatedPermissions.splice(source.index, 1);
      updatedPermissions.splice(destination.index, 0, reorderedItem);

      const updatedRole = {
        ...selectedRole,
        permissions: {
          ...selectedRole.permissions,
          [source.droppableId]: updatedPermissions,
        },
      };
      setSelectedRole(updatedRole);
      setRoles(roles.map((role) => (role.id === updatedRole.id ? updatedRole : role)));
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Permission Management</h1>
      <div className="mb-4">
        <label htmlFor="role-select" className="block text-sm font-medium text-gray-700">
          Select Role
        </label>
        <select
          id="role-select"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedRole.id}
          onChange={(e) => setSelectedRole(roles.find((role) => role.id === e.target.value))}
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex space-x-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Available Permissions</h2>
            <Droppable droppableId="permissions">
              {(provided) => (
                <ul
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-gray-100 p-4 rounded-md min-h-[200px]"
                >
                  {permissions.map((permission, index) => (
                    <Draggable key={permission.id} draggableId={permission.id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-white p-2 mb-2 rounded shadow"
                        >
                          {permission.name}
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Role Permissions</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(selectedRole.permissions).map(([type, perms]) => (
                <div key={type}>
                  <h3 className="text-lg font-medium mb-2 capitalize">{type}</h3>
                  <Droppable droppableId={type}>
                    {(provided) => (
                      <ul
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="bg-gray-100 p-4 rounded-md min-h-[100px]"
                      >
                        {perms.map((permission, index) => (
                          <Draggable key={permission.id} draggableId={permission.id} index={index}>
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="bg-white p-2 mb-2 rounded shadow"
                              >
                                {permission.name}
                              </li>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </ul>
                    )}
                  </Droppable>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default PermissionManagement;