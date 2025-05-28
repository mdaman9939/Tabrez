import { Link, Route, Routes } from "react-router-dom";
import menuPermissions from "./config/menuPermissions";

export default function Dashboard() {
  const role = localStorage.getItem("role");

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "25px 30px",
          borderRadius: "12px",
          boxShadow: "0 0 12px rgba(0,0,0,0.1)",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ marginBottom: "20px", textAlign: "center" }}>
          Dashboard <span style={{ fontSize: "16px" }}>({role})</span>
        </h1>

        {/* Navigation */}
        <nav style={{ marginBottom: "30px" }}>
          {["Sales", "Purchase"].map((section) => {
            const items = menuPermissions[role]?.[section] || [];
            return items.length > 0 ? (
              <div key={section} style={{ marginBottom: "20px" }}>
                <h3>{section}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <Link
                        to={`/dashboard/${item
                          .toLowerCase()
                          .replace(/ /g, "-")}`}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null;
          })}
        </nav>

        {/* Routes wrapped inside <Routes> */}
        <Routes>
          <Route path="new-invoice" element={<div>New Invoice Page</div>} />
          <Route path="view-invoice" element={<div>View Invoice Page</div>} />
          <Route path="new-estimate" element={<div>New Estimate Page</div>} />
          <Route path="sale-return" element={<div>Sale Return Page</div>} />
          <Route path="view-return" element={<div>View Return Page</div>} />
          <Route path="add-purchase" element={<div>Add Purchase Page</div>} />
          <Route path="view-purchase" element={<div>View Purchase Page</div>} />
          <Route path="add-supplier" element={<div>Add Supplier Page</div>} />
          <Route
            path="new-purchase-order"
            element={<div>New Purchase Order Page</div>}
          />
          <Route
            path="view-purchase-order"
            element={<div>View Purchase Order Page</div>}
          />
        </Routes>
      </div>
    </div>
  );
}
