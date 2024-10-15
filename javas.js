import React, { useState, useEffect } from 'react';

function StageLoader() {
  const [stageData, setStageData] = useState(null);

  useEffect(() => {
    const fetchStageData = async () => {
      try {
        const response = await fetch('/api/stage-data');
        const data = await response.json();
        setStageData(data);
      } catch (error) {
        console.error('Error fetching stage data:', error);
      }
    };

    fetchStageData();
  }, []);

  if (!stageData) {
    return <div>Loading...</div>;
  }

  const { seed, smallPlant, plant } = stageData;

  return (
    <div>
      <h2>Seed Data</h2>
      <p>{seed.data}</p>

      <h2>Small Plant Data</h2>
      <p>{smallPlant.data}</p>

      <h2>Plant Data</h2>
      <p>{plant.data}</p>
    </div>
  );
}

export default StageLoader;