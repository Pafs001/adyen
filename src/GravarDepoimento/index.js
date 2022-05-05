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

  return (
    <div>
      <div className="demo-section">
        <h1>Hooks demo</h1>
        <p>Camera status: {recordWebcam.status}</p>
        <div>
          <button
            disabled={
              recordWebcam.status === CAMERA_STATUS.OPEN ||
              recordWebcam.status === CAMERA_STATUS.RECORDING ||
              recordWebcam.status === CAMERA_STATUS.PREVIEW
            }
            onClick={recordWebcam.open}
          >
            Open camera
          </button>
          <button
            disabled={
              recordWebcam.status === CAMERA_STATUS.CLOSED ||
              recordWebcam.status === CAMERA_STATUS.PREVIEW
            }
            onClick={recordWebcam.close}
          >
            Close camera
          </button>
          <button
            disabled={
              recordWebcam.status === CAMERA_STATUS.CLOSED ||
              recordWebcam.status === CAMERA_STATUS.RECORDING ||
              recordWebcam.status === CAMERA_STATUS.PREVIEW
            }
            onClick={recordWebcam.start}
          >
            Start recording
          </button>
          <button
            disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
            onClick={recordWebcam.stop}
          >
            Stop recording
          </button>
          <button
            disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
            onClick={recordWebcam.retake}
          >
            Retake
          </button>
          <button
            disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
            onClick={recordWebcam.download}
          >
            Download
          </button>
          <button
            disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
            onClick={getRecordingFileHooks}
          >
            Get recording
          </button>
        </div>

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
      <div className="demo-section">
        <h1>Component demo</h1>
        <RecordWebcam options={OPTIONS} />
      </div>
      <div className="demo-section">
        <RecordWebcam
          options={OPTIONS}
          render={(props) => {
            const showOpenCamera =
              props.status !== CAMERA_STATUS.OPEN &&
              props.status !== CAMERA_STATUS.RECORDING &&
              props.status !== CAMERA_STATUS.PREVIEW;
            const showCloseCamera =
              props.status === CAMERA_STATUS.OPEN || CAMERA_STATUS.RECORDING;
            const showStart = props.status === CAMERA_STATUS.OPEN;
            const showStop = props.status === CAMERA_STATUS.RECORDING;
            const showRetake = props.status === CAMERA_STATUS.PREVIEW;
            const showDownload = props.status === CAMERA_STATUS.PREVIEW;

            return (
              <div>
                <h1>Component render prop demo</h1>
                <p>Camera status: {props.status}</p>
                <div>
                  <button disabled={!showOpenCamera} onClick={props.openCamera}>
                    Open camera
                  </button>
                  <button
                    disabled={showOpenCamera || showRetake || !showCloseCamera}
                    onClick={props.closeCamera}
                  >
                    Close camera
                  </button>

                  <button disabled={!showStart} onClick={props.start}>
                    Start recording
                  </button>
                  <button disabled={!showStop} onClick={props.stop}>
                    Stop recording
                  </button>
                  <button disabled={!showRetake} onClick={props.retake}>
                    Retake
                  </button>
                  <button disabled={!showDownload} onClick={props.download}>
                    Download
                  </button>
                  <button
                    disabled={!showDownload}
                    onClick={async () => {
                      const blob = await props.getRecording();
                      getRecordingFileRenderProp(blob);
                    }}
                  >
                    Get recording blob
                  </button>
                </div>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

