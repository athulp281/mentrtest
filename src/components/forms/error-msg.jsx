import React from 'react';

const ErrorMsg = ({error}) => {
  return (
    <>
     <div style={{color:'red',paddingBottom:0,fontSize:10}}>{error}</div> 
    </>
  );
};

export default ErrorMsg;