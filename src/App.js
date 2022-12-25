// import { useGlobalContext } from './Components/context';
import { TextInput, Center } from '@mantine/core';
import { useState } from 'react';
import Context from './Components/Context/Context';

function App() {
  const [inputData, setInputData] = useState('');
  const [data, setData] = useState();
  const weatherData = Context(data);

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      setData(inputData);
      setInputData('');
    }
  };
  // console.log(weatherData?.location);

  return (
    <div className='App'>
      <div className='bg-green-500 p-10 text-white text-xl'>Weather App</div>
      <Center style={{ width: '100%', height: '100%' }}>
        <div className='mt-16'>
          <TextInput
            placeholder='Type here'
            label='City'
            withAsterisk
            value={inputData}
            onKeyDown={handleInput}
            onChange={(e) => setInputData(e.currentTarget.value)}
          />
        </div>
      </Center>
      {data && data?.length ? (
        <div className='flex flex-col justify-center items-center mt-8'>
          <div className='flex flex-col justify-center items-center '>
            <h3>
              City : {weatherData?.location?.name},
              {weatherData?.location?.region},{weatherData?.location?.country}
            </h3>
          </div>
          <div>
            <h3>
              Temperature : {weatherData?.current?.temp_c} &#8451; -{' '}
              {weatherData?.current?.temp_f} &#8457;
            </h3>
          </div>
          <div className='flex items-center -mt-4'>
            <h3>Condition : {weatherData?.current?.condition?.text}</h3>
            <img
              src={weatherData?.current?.condition?.icon}
              alt={weatherData?.location?.name}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
