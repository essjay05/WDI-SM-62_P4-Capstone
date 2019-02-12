import React from 'react';

export default ({ title, image, description, techUsed, deployedLink, githubLink }) => {

    return (
        <div>
            <label>Title: </label>
            <input
                type="text"
                name="title"
                placeholder="Title of your Project"
                value={title}
                />
            <label>Image Url: </label>
            <input
                type="text"
                name="image"
                placeholder="Image url"
                value={image}
                />
            <label>Description: </label>
            <input
                type="text"
                name="description"
                placeholder="Brief blurb about your project."
                value={description}
                />
            <label>Technology/Tools Used:</label>
            <input
                type="text"
                name="techUsed"
                placeholder="ie. HTML, CSS, React.js"
                value={techUsed}
                />
            <label>Deployed Link URL:</label>
            <input
                type="text"
                name="deployedLink"
                placeholder="(ie. Heroku link)"
                value={deployedLink}
                />
            <label>GitHub Link:</label>
            <input
                type="text"
                name="githubLink"
                placeholder="www.github.com/(insert your username here)"
                value={githubLink}
                />
        </div>  
    )
}
// import ReactS3 from 'react-s3';

// import S3FileUpload from 'react-s3';
// //Optional Import
// import { uploadFile } from 'react-s3';
 
// const config = {
//     bucketName: 'port-4710',
//     dirName: 'userProfilePhotos', /* optional */
//     region: 'us-west-1',
//     accessKeyId: process.env.AWS_accessKeyId,
//     secretAccessKey: process.env.AWS_secretAccessKey
// }
 
// /*  Notice that if you don't provide a dirName, the file will be automatically uploaded to the root of your bucket */
 
 
 
// S3FileUpload
//     .uploadFile(file, config)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
 
// //** OR *//
 
// uploadFile(file, config)
//     .then(data => console.log(data))
//     .catch(err => console.error(err))
 
//   /**
//    * {
//    *   Response: {
//    *     bucket: "your-bucket-name",
//    *     key: "photos/image.jpg",
//    *     location: "https://your-bucket.s3.amazonaws.com/photos/image.jpg"
//    *   }
//    * }
//    */
// });

