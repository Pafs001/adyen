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

import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function GravarPalavras() {
  let navigate = useNavigate();
  const [OPTIONS, setOptions] = React.useState({
    filename: " ",
    fileType: "mp4",
    recordingLength: 63,
    width: 1920,
    height: 1080
  });
  const recordWebcam = useRecordWebcam(OPTIONS);
  const [isReady, setIsReady] = React.useState(false);
  
  const numberInvalids =  [
    '000.000.000-00',
    '111.111.111-11',
    '222-222-222-22',
    '333.333.333-33',
    '444.444.444-44',
    '555.555.555-55',
    '666.666.666-66',
    '888.888.888-88',
    '999.999.999-99'
  ];

  const schema = Yup.object().shape({
    cpf: Yup.string()
    .notOneOf(numberInvalids, 'Esse número não pode ser usado.')
    .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,  "Formato válido XXX.XXX.XXX-XX")
    .required('É necessário informar o CPF no formato válido.'),
  });

  const initialValues = { cpf: ''};
  let [count, setCount] = React.useState(60);
  
  const myRef = React.useRef(null);
  myRef.current = () => {
    setCount((count) => count - 1);
  };

  React.useEffect(() => {
    if(isReady){
      let id = setInterval(() => {
        myRef.current();
      }, 1000);
      return () => clearInterval(id);
    }
  }, [isReady]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values)
      setOptions((preState) => ({...preState, filename: `fut_${values.cpf}`}))
    }
  });

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
          <form onSubmit={formik.handleSubmit}>
            
            <div className='form-row'>
              <input
                disabled={OPTIONS.filename !== " "}
                autoComplete="off"
                id="cpf"
                name="cpf"
                type="text"
                className='input-doc'
                placeholder='Digite o CPF Ex: 000.000.000-00'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cpf}
              />
              <button disabled={OPTIONS.filename !== " "} className='sm-button' type="submit">OK</button>
            </div>
            
            <p className='input-error'> 
              {
                formik.errors.cpf && formik.touched.cpf 
                ? formik.errors.cpf : null
              }
            </p>
            
          </form>
        

        
          
        
        <button
            disabled={
              OPTIONS.filename === " " ||
              recordWebcam.status === CAMERA_STATUS.CLOSED ||
              recordWebcam.status === CAMERA_STATUS.RECORDING ||
              recordWebcam.status === CAMERA_STATUS.PREVIEW
            }
            onClick={() => {
              recordWebcam.start();
              setInterval(() => {
                setIsReady(true);
              }, 3100);
            }}
            className='button'
          >
            Iniciar Gravação
          </button>
          <button
            disabled={
              !isReady
              
            }
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
            disabled={recordWebcam.status !== CAMERA_STATUS.CLOSED}
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
        <div className="demo-section">
        {recordWebcam.status === 'RECORDING' ? <div className='rec-indicator'>{count}</div> : null}
        
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
          muted
        />
        {/*
          <video
            ref={recordWebcam.previewRef}
            style={{
              display: `${
                recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"
              }`
            }}
            autoPlay
            loop
            controls
          />
        */}
        
      </div>
      </div>
      
    </div>
  );
};

