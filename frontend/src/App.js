import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = () => {
    setLoading(true);
    setError(null);
    fetch("http://denpa.tw1.ru:5000/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки пользователей");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Список пользователей</h1>
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Загрузка..." : "Обновить"}
      </button>

      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
