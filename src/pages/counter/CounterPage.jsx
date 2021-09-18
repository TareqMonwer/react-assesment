import { useSelector, useDispatch } from 'react-redux';
import { increment } from 'services/counterService';
import Layout from 'containers/Layout';
import Button from 'components/common/Button/Button';

const CounterPage = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl my-5 p-10 border border-gray-300 
        rounded inline-block">
          {count}
        </h1>
        <Button onClick={() => dispatch(increment())} />
      </div>
    </Layout>
  );
}

export default CounterPage;