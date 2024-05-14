import React, {useRef} from 'react';
import PropTypes from 'prop-types';

const VideoComponent = (props) => {
  const {previewImage, width = `271`, height = `175`} = props;
  let videoRef = useRef();

  return (
    <video
      ref={videoRef}
      src=""
      className="player__video"
      poster={previewImage}
      muted
      width={width}
      height={height}
    ></video>
  );
};

VideoComponent.propTypes = {
  previewImage: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default VideoComponent;
