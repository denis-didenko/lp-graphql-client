import React from 'react';

const useLayout = (props) => {
  return (
    <>
      <header>
        <h1 className="page-title">{props.title}</h1>
      </header>
      <main>{props.children}</main>
    </>
  );
};

export default useLayout;
