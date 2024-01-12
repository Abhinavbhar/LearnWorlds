import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [data, setData] = useState(null);
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/admin/dashboard', {
          headers: {
            'token': token,
          },
        });
        const responseData = response.data;
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData(); // Trigger the Axios request
  }, [token]); // Include token as a dependency to re-run the effect when it changes

  return (
    <div>
      {data ? (
        <div>
          <p className='text-green-600 text-2xl'>Data from the server: {data}</p>
        </div>
      ) : (
        <p className='text-red-600 text-6xl'>Please login</p>
      )}
    </div>
  );
}

export default AdminDashboard;
