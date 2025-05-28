import { useState } from "react";

export default function CreateForm() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (!formData.name || !formData.price || !formData.description) {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = formData;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, formData]);
    }

    setFormData({ name: "", price: "", description: "" });
  };

  const handleEdit = (index) => {
    setFormData(products[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
  };

  return (
    <div
      style={{
        padding: 20,
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>
        Create / Manage Products
      </h2>

      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            padding: 10,
            marginRight: 10,
            borderRadius: 5,
            border: "1px solid #ccc",
            width: "25%",
          }}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          style={{
            padding: 10,
            marginRight: 10,
            borderRadius: 5,
            border: "1px solid #ccc",
            width: "20%",
          }}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={{
            padding: 10,
            marginRight: 10,
            borderRadius: 5,
            border: "1px solid #ccc",
            width: "30%",
          }}
        />
        <button
          onClick={handleAddOrUpdate}
          style={{
            padding: 10,
            backgroundColor: "#28a745",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <h3 style={{ marginBottom: 10 }}>Product List</h3>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {products.map((item, index) => (
            <li
              key={index}
              style={{
                background: "#f8f9fa",
                padding: "10px 15px",
                marginBottom: 10,
                borderRadius: 6,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <strong>{item.name}</strong> - ₹{item.price} <br />
                <small>{item.description}</small>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(index)}
                  style={{
                    marginRight: 10,
                    padding: "6px 10px",
                    backgroundColor: "#ffc107",
                    border: "none",
                    color: "#fff",
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "#dc3545",
                    border: "none",
                    color: "#fff",
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                >
                  🗑️ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
