import React, { Component } from 'react';
import ReactS3 from 'react-s3';

import S3FileUpload from 'react-s3';
//Optional Import
import { uploadFile } from 'react-s3';
 
const config = {
    bucketName: 'port-4710',
    dirName: 'userProfilePhotos', /* optional */
    region: 'us-west-1',
    accessKeyId: process.env.AWS_accessKeyId,
    secretAccessKey: process.env.AWS_secretAccessKey
}
 
/*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
 
 
 
S3FileUpload
    .uploadFile(file, config)
    .then(data => console.log(data))
    .catch(err => console.error(err))
 
//** OR *//
 
uploadFile(file, config)
    .then(data => console.log(data))
    .catch(err => console.error(err))
 
  /**
   * {
   *   Response: {
   *     bucket: "your-bucket-name",
   *     key: "photos/image.jpg",
   *     location: "https://your-bucket.s3.amazonaws.com/photos/image.jpg"
   *   }
   * }
   */
});

export default class UserInfoForm extends Component {
    render() {
        return (
            <div className="userInfo-form-container">
                <s3>
                    aws s3 upload
                </s3>

            </div>
        );
    }
}