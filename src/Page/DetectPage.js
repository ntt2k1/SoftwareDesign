import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import GlobalAudio from '../Data/GlobalAudio';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer, toast } from 'react-toastify';
// CALL IT ONCE IN YOUR APP
injectStyle();

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const inputRef = useRef();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    GlobalAudio.forEach((e) => {
      e.audio.load();
      e.audio.volume = 0.5;
    });
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);

    handleSubmit();
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    const formData = new FormData();
    var imagefile = document.querySelector('#file');
    formData.append('myFile', imagefile.files[0]);
    const response = await toast.promise(
      axios.post('https://soundy-server.herokuapp.com/uploadfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }),
      {
        pending: 'Processing, the first time may be a bit longer',
        success: 'Enjoy the sound 👌',
        error: 'Error, please choose another image 🤯',
      }
    );
    if (response) {
      let classified = response.data;
      const sound = classified.filter((classname) => classname.score > 0.3);
      console.log(sound);
      GlobalAudio.forEach((element) => {
        sound.forEach((s) => {
          if (element.name == s.class) {
            element.audio.play();
          }
        });
      });
    }
  };

  const handleImageClick = () => {
    inputRef.current.click();
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        maxHeight: '1000',
      }}
    >
      <form
        method="post"
        action="http://localhost:3001/uploadfile"
        enctype="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <input
          ref={inputRef}
          type="file"
          id="file"
          name="myFile"
          onChange={onSelectFile}
          style={{ display: 'none' }}
        />
        {selectedFile ? (
          <img
            style={{
              width: '100%',
              height: 'auto',
            }}
            src={preview}
            onClick={handleImageClick}
          />
        ) : (
          <img
            style={{
              width: '100%',
              height: 'auto',
            }}
            src="https://cdn.wallpapersafari.com/44/30/F3KQum.jpg"
            onClick={handleImageClick}
          />
        )}
      </form>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default ImageUpload;
