import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_SCREENSHOT } from '../../gql/queryLp';

const ScreenshotMaker = () => {
    const [url, setUrl] = useState('');
    const [saveScreenshot, { data }] = useMutation(SAVE_SCREENSHOT);

    const onFormSubmit = e => {
        e.preventDefault();
        saveScreenshot({ variables: { url } });
    };

    return (
        <form action="" onSubmit={onFormSubmit}>
            <div className="form-item">
                <label>Url</label>
                <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
            </div>

            <button className="screenshot-submit" type="submit">
                Submit
            </button>
        </form>
    );
};

export default ScreenshotMaker;
