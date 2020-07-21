import React from 'react';
import WithLayout from '../Containers/withLayout';
import BlocksList from '../BlockList';

const BlocksPage = () => {
    return (
        <WithLayout title="Blocks list">
            <BlocksList />
        </WithLayout>
    );
};

export default BlocksPage;
