import React, { useState } from 'react';
import Layout from 'containers/Layout';

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const handleSetCount = () => setCount(prev => prev + 1)

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl my-5 p-10 border border-gray-300 
        rounded inline-block">
          {count}
        </h1>
        <button
          className="bg-indigo-700 text-white px-3 py-2 rounded"
          onClick={handleSetCount}>
          Button
        </button>
      </div>
    </Layout>
  );
}

export default CounterPage;