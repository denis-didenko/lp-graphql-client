import React from 'react';

const withLayout = props => {
    return (
        <>
            <header>
                <h1 className="page-title">{props.title}</h1>
            </header>
            <main>{props.children}</main>
        </>
    );
};

export default withLayout;
