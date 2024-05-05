import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const VideoComponent = (props) => {
  //const {previewVideoLink, previewImage, width = `271`, height = `175`, isPlaying} = props;
  const { previewImage, width = `271`, height = `175`, isPlaying} = props;
  let videoRef = useRef();
  // useEffect(() => {
  //   const playVideo = async () => {
  //     try {
  //       await videoRef.current.play();
  //     } catch (error) {
  //       throw Error(`Error playing video:`, error);
  //     }
  //   };

  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       playVideo();
  //     } else {
  //       videoRef.current.pause();
  //     }
  //   }
  //   return () => {
  //     const resetVideo = () => {
  //       if (videoRef.current) {
  //         videoRef.current.load();
  //         videoRef.current.pause();
  //         videoRef.current.currentTime = 0;
  //       }
  //     };
  //     resetVideo();
  //   };
  // }, [isPlaying]);

  return (
     <video
        ref={videoRef}
        // src={previewVideoLink}
        src = ''
        className="player__video"
        poster={previewImage}
        muted
        width={width}
        height={height}
      >
      </video>

  );
};

VideoComponent.propTypes = {
  // previewVideoLink: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired,
};

export default VideoComponent;
