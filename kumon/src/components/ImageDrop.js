import React, {Component} from 'react';
import Dropzone from 'react-dropzone';

class ImageDrop extends Component {
  render () {
    return (
      <div>
        <h1>Image Drop</h1>
        <Dropzone>Drop file here</Dropzone>
      </div>
    )
  }
}

export default ImageDrop;
