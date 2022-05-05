import React from 'react'
import {
  RecordWebcam,
  useRecordWebcam,
  CAMERA_STATUS
} from "react-record-webcam";

import "../index.css";
import {
  useNavigate,
} from "react-router-dom";


export default function GravarDepoimento() {
  let navigate = useNavigate();
  const [OPTIONS, setOptions] = React.useState({
    filename: " ",
    fileType: "mp4",
    recordingLength: 60,
    width: 1920,
    height: 1080
  });
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
        
        
        <input
          type="text" 
          id="cpf" 
          name="cpf" 
          required
          placeholder='Digite seu CPF aqui.'
          autoComplete={false}
          pattern="[0-9]"
          title="CPF apenas números."
          className='input-doc'
          onChange={ (data) => setOptions((preState) => ({...preState, filename: `dep_${data.target.value}`}))}
        />

        <button
            disabled={
              OPTIONS.filename === " " ||
              recordWebcam.status === CAMERA_STATUS.CLOSED ||
              recordWebcam.status === CAMERA_STATUS.RECORDING ||
              recordWebcam.status === CAMERA_STATUS.PREVIEW
            }
            onClick={recordWebcam.start}
            className='button'
          >
            Iniciar Gravação
          </button>
          <button
            disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
            onClick={() => {
              recordWebcam.stop();
              setTimeout(() => {
                recordWebcam.close();
              }, 1800);
              
            }}
            className='button'
          >
            Finalizar Gravação
          </button>
          <button
            // disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
            onClick={() => {
              recordWebcam.download();
              setTimeout(() => {
                recordWebcam.close()
              }, 1800);
              setTimeout(() => {
                navigate("/agradecemos");
              }, 3000);
            }}
            className='button'
          >
            Enviar vídeo
          </button>
          {/*
            <button
              disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
              onClick={getRecordingFileHooks}
              className='button'
            >
              Preview
            </button>

            <button
              disabled={recordWebcam.status !== CAMERA_STATUS.CLOSED}
              onClick={recordWebcam.retake}  
              className='button'
            >
            Nova gravação
          </button>
            
          */}
          

        </div>
      </div>
      <div className="demo-section">
        
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

