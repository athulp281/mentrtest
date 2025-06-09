import React from 'react';

const ErrorMsg = ({error}) => {
  return (
    <>
     <p style={{color:'red',paddingBottom:0,fontSize:10}}>{error}</p> 
    </>
  );
};

export default ErrorMsg;