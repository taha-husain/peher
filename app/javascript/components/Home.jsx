import React from "react";
import YouTube from 'react-youtube';

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Peher</h1>
        <p className="lead">
          A music player powered by Youtube that plays music based on time of the day.
        </p>
        <hr className="my-4" />
        <YouTube
          videoId='Iuv6hY6zsd0'
          id='yt-player'
        />
      </div>
    </div>
  </div>
);
