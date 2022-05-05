import React from 'react'

import {
  RecordWebcam,
  useRecordWebcam,
  CAMERA_STATUS
} from "react-record-webcam";

import "../index.css";

const OPTIONS = {
  filename: "test-filename",
  fileType: "mp4",
  width: 1920,
  height: 1080
};

export default function GravarDepoimento() {
  const recordWebcam = useRecordWebcam(OPTIONS);

  const getRecordingFileHooks = async () => {
    const blob = await recordWebcam.getRecording();
    console.log({ blob });
  };

  const getRecordingFileRenderProp = async (blob) => {
    console.log({ blob });
  };
  React.useEffect(() => {
    recordWebcam.open();
    setTimeout(() => {
      recordWebcam.retake();  
    }, 1000);
  }, []);

  return (
    <div className='content secondary-bg'>
      <div className='row'>
        <div className='recorder-box'>
        <button
            disabled={
              recordWebcam.status === CAMERA_STATUS.CLOSED ||
              recordWebcam.status === CAMERA_STATUS.RECORDING ||
              recordWebcam.status === CAMERA_STATUS.PREVIEW
            }
            onClick={recordWebcam.start}
            className='button'
          >
            Start recording
          </button>
          <button
            disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
            onClick={ recordWebcam.stop}
            className='button'
          >
            Stop recording
          </button>
          <button
            disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
            onClick={recordWebcam.download}
            className='button'
          >
            Download
          </button>
          <button
            disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
            onClick={recordWebcam.retake}
            className='button'
          >
            Nova gravação
          </button>
          <button
            disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
            onClick={getRecordingFileHooks}
            className='button'
          >
            Preview
          </button>
        </div>
      </div>
      <div className="demo-section">
        
        <p>Camera status: {recordWebcam.status}</p>
        

        <video
          ref={recordWebcam.webcamRef}
          style={{
            display: `${
              recordWebcam.status === CAMERA_STATUS.OPEN ||
              recordWebcam.status === CAMERA_STATUS.RECORDING
                ? "block"
                : "none"
            }`
          }}
          autoPlay
        />
        <video
          ref={recordWebcam.previewRef}
          style={{
            display: `${
              recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"
            }`
          }}
          autoPlay
          loop
        />
      </div>
    </div>
  );
};

