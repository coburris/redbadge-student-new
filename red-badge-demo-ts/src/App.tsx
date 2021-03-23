import React from "react";
import PropsExample from '../src/components/PropsExample';
import PropsMappingExample from '../src/components/PropsMapping';

function App() {
  const visitedPlaces = ['Portland', 'Hawaii', 'Mexico', 'South Carolina', 'Florida', 'Chicago']
  return <div>
    <PropsExample name="Tom" business="MySpace"/>
    <PropsMappingExample visited ={visitedPlaces} />
    </div>;
}

export default App;
