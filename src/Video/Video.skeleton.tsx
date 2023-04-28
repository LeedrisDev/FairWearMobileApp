import React from 'react';

const VideoSkeleton = ({ error } :any) => (
  <div className="skeleton__video">
    {error ?
      ""
      :
      <div className="skeleton__video--loading">
        loader
      </div>
      }
  </div>
);

export default VideoSkeleton;
