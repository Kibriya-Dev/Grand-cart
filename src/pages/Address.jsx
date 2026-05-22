import "./Address.css";
import { useState, useEffect } from "react";

function Address() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    address: ""
  });

  // LOAD SAVED ADDRESS
  useEffect(() => {

    const saved =
      JSON.parse(localStorage.getItem("address"));

    if (saved) {
      setForm(saved);
    }

  }, []);

  // SAVE
 const handleSave = () => {
  localStorage.setItem("address", JSON.stringify(form));
  alert("Address Saved ✅");
  navigate("/checkout"); // 🔥 auto back
};

  return (
    <div className="address-page">

      <h1>My Address</h1>

      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={form.phone}
        onChange={(e) =>
          setForm({
            ...form,
            phone: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="City"
        value={form.city}
        onChange={(e) =>
          setForm({
            ...form,
            city: e.target.value
          })
        }
      />

      <textarea
        placeholder="Full Address"
        value={form.address}
        onChange={(e) =>
          setForm({
            ...form,
            address: e.target.value
          })
        }
      />

      <button onClick={handleSave}>
        Save Address
      </button>

    </div>
  );
}

export default Address;