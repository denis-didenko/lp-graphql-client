import React from 'react';
import WithLayout from '../Containers/withLayout';
import GeneratorUrls from '../GeneratorUrls';

const GeneratorPage = () => {
    return (
        <WithLayout title="URLs from IDs">
            <GeneratorUrls />
        </WithLayout>
    );
};

export default GeneratorPage;
