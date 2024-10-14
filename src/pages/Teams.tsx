import React, { useEffect, useState } from 'react';

interface User {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  email: string;
  phone: string;
  location: {
    city: string;
    country: string;
  };
}

const Teams: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center p-8">Loading...</div>;
  }

  return (
    <div className="p-8 bg-gray-100">
      {/* Teams Title */}
      <h1 className="text-4xl font-bold text-center mb-6">Meet Our Team</h1>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="rounded-full w-32 h-32 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold">{`${user.name.first} ${user.name.last}`}</h3>
            <p className="text-gray-500">Email: {user.email}</p>
            <p className="text-gray-500">Phone: {user.phone}</p>
            <p className="text-gray-500">{`${user.location.city}, ${user.location.country}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
