import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import styles from "./imguload.module.css";

import { UploadCloud } from 'lucide-react';

const ImgUpload = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div className="App">
      <ImageUploading
        maxNumber={maxNumber}
        multiple
        onChange={onChange}
        value={images}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="">
            <button  className={styles.btn} onClick={onImageUpload}
              style={isDragging ? { color: "white" } : undefined}
               type="button"
              {...dragProps}
            >
              <UploadCloud /> Upload your image
            </button>
            &nbsp;
            {imageList.map((image, index) => (
              <div className="image-item" key={index} >
                <img src={image.dataURL}  width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)} type="button">Update</button>
                  <button onClick={() => onImageRemove(index)} type="button">Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default ImgUpload;