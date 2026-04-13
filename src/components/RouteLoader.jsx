import React from 'react';

const loaderStyles = {
  wrap: {
    minHeight: '46vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px'
  },
  spinner: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    border: '3px solid #d7e7dc',
    borderTopColor: '#1f7a43',
    animation: 'tgRouteSpin 0.9s linear infinite'
  }
};

function RouteLoader() {
  return (
    <div style={loaderStyles.wrap} role="status" aria-label="Loading page">
      <style>{'@keyframes tgRouteSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }'}</style>
      <div style={loaderStyles.spinner} />
    </div>
  );
}

export default RouteLoader;
