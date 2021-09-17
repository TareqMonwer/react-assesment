import React, { useState } from 'react';
import Layout from 'containers/Layout';
import Button from 'components/common/Button/Button';

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
        <Button onClick={handleSetCount} />
      </div>
    </Layout>
  );
}

export default CounterPage;