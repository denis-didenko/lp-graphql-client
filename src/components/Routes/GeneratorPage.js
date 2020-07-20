import React from 'react';
import UseLayout from '../Hooks/useLayout';
import GeneratorUrls from '../GeneratorUrls';

const GeneratorPage = () => {
  return (
    <UseLayout title="URLs from IDs">
      <GeneratorUrls />
    </UseLayout>
  );
};

export default GeneratorPage;
