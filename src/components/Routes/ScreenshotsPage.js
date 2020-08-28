import React from 'react';
import WithLayout from '../Containers/withLayout';
import ScreenshotMaker from '../ScreenshotMaker';

const ScreenshotsPage = () => {
    return (
        <WithLayout title="Screenshot save">
            <ScreenshotMaker />
        </WithLayout>
    );
};

export default ScreenshotsPage;
