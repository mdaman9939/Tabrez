import { useState } from "react";
import menuPermissions from "../config/menuPermissions";

export default function SuperAdminPage() {
  // Use state so changes can be saved and reflected dynamically
  const [permissions, setPermissions] = useState(menuPermissions);

  // Handler to toggle menu permission for a role
  function togglePermission(role, menu, item) {
    setPermissions((prev) => {
      // Copy previous permissions deeply
      const newPermissions = { ...prev };
      const subItems = newPermissions[role][menu];

      if (subItems.includes(item)) {
        // Remove item if already present
        newPermissions[role][menu] = subItems.filter((i) => i !== item);
      } else {
        // Add item if not present
        newPermissions[role][menu] = [...subItems, item];
      }
      return newPermissions;
    });
  }

  // Get all menus and sub-items from the config to display all possible permissions
  // Assuming menuPermissions has a structure like:
  // { role: { menu: [subItem1, subItem2, ...] } }
  // You might want to adjust based on your actual config shape

  // Extract all possible menu items from all roles to show as options
  const allMenus = {};

  Object.values(menuPermissions).forEach((menus) => {
    Object.entries(menus).forEach(([menu, items]) => {
      if (!allMenus[menu]) allMenus[menu] = new Set();
      items.forEach((item) => allMenus[menu].add(item));
    });
  });

  // Convert sets to arrays
  Object.keys(allMenus).forEach((menu) => {
    allMenus[menu] = Array.from(allMenus[menu]);
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>🛡️ Super Admin Role Manager</h2>
      {Object.entries(permissions).map(([role, menus]) => (
        <div key={role} style={{ marginBottom: "30px" }}>
          <h3>{role.toUpperCase()}</h3>

          {/* For each menu, show all possible subItems with checkboxes */}
          {Object.entries(allMenus).map(([menu, allSubItems]) => (
            <div key={menu} style={{ marginBottom: "15px" }}>
              <strong>{menu}</strong>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {allSubItems.map((item) => {
                  const isChecked = menus[menu] && menus[menu].includes(item);

                  return (
                    <li key={item}>
                      <label>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => togglePermission(role, menu, item)}
                        />{" "}
                        {item}
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
