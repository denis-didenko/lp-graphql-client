import React from 'react';
import UseLayout from '../Hooks/useLayout';
import BlocksList from '../BlockList';

const BlocksPage = () => {
  return (
    <UseLayout title="Blocks list">
      <BlocksList />
    </UseLayout>
  );
};

export default BlocksPage;
