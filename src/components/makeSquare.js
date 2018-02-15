import React from 'react';
import sizeMe from 'react-sizeme';

export default Component => {
  const calculateDimensions = ({ width, height }) =>
    width < height ? width : height;

  const toCss = length => ({ width: length, height: length });

  const Wrapper = ({ size, ...rest }) => (
    <div style={toCss(calculateDimensions(size))}>
      <Component {...rest} />
    </div>
  );

  return sizeMe({ monitorHeight: true })(Wrapper);
};
