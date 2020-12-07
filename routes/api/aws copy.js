// const express = require("express");
// const AWS = require("aws-sdk");
// const { Credentials } = require("aws-sdk");
// const { v4: uuidv4 } = require("uuid");
// var crypto = require("crypto-js");

// const { aws } = require("../../config/index");
// const expressAsyncHandler = require("express-async-handler");

// const router = express.Router();

// const access = new Credentials({
//     accessKeyId: aws.awsAccessKey,
//     secretAccessKey: aws.awsSecretKey,
// });

// router.post(
//     "/",
//     expressAsyncHandler(async function (req, res) {
//         const { fileName } = req.body;
//         console.log(fileName);

//         const s3 = new AWS.S3({
//             accessKeyId: aws.awsAccessKey,
//             secretAccessKey: aws.awsSecretKey,
//             signatureVersion: "v4",
//             region: aws.awsRegion,
//         });

//         const getSingedUrl = async () => {
//             function getSignatureKey(key, dateStamp, regionName, serviceName) {
//                 var kDate = crypto.HmacSHA256(dateStamp, "AWS4" + key);
//                 var kRegion = crypto.HmacSHA256(regionName, kDate);
//                 var kService = crypto.HmacSHA256(serviceName, kRegion);
//                 var kSigning = crypto.HmacSHA256("aws4_request", kService);
//                 return kSigning;
//             }

//             const params = {
//                 Bucket: aws.awsBucket,
//                 Key: fileName,
//                 Expires: 60 * 5,
//             };

//             try {
//                 const url = await new Promise((resolve, reject) => {
//                     s3.getSignedUrl("getObject", params, (err, url) => {
//                         err ? reject(err) : resolve(url);
//                     });
//                 });
//                 return url;
//             } catch (err) {
//                 if (err) {
//                     console.log(err);
//                 }
//             }
//         };
//         const url = await getSingedUrl();
//         console.log("URL", url);
//         return res.json({ url: url });
//     })
// );

// module.exports = router;

// // const { fileName } = req.body;
// // console.log(fileName);

// // const s3 = new AWS.S3({
// //     accessKeyId: aws.awsAccessKey,
// //     secretAccessKey: aws.awsSecretKey,
// //     region: "us-east-2",
// //     signatureVersion: "v4",
// // });
// // const url = s3.getSignedUrl("getObject", {
// //     Bucket: aws.awsBucket,
// //     Key: fileName,
// //     Expires: 60 * 5,
// // });
// // console.log(url);
// // return res.json({ url: url });
/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with AWS SDK for JavaScript version 3 (v3),
which is pending release.  The preview version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/s3-example-creating-buckets.html.
Purpose:
s3_put_presignedURL.ts creates a presigned URL to upload a file to an Amazon Simple Storage Service (Amazon S3) bucket.
Note: This example immediately deletes the object and bucket.
Inputs (replace in code):
- REGION
- KEY
- BODY
Running the code:
ts-node s3_put_presignedURL.ts
[Outputs | Returns]:
Uploads the specified file to the specified bucket.
*/

// snippet-start:[s3.JavaScript.buckets.presignedurlv3]
// Import the required AWS SDK clients and commands for Node.js

const {
    S3,
    CreateBucketCommand,
    DeleteObjectCommand,
    PutObjectCommand,
    DeleteBucketCommand,
} = require("@aws-sdk/client-s3");
const { S3RequestPresigner } = require("@aws-sdk/s3-request-presigner");
const { createRequest } = require("@aws-sdk/util-create-request");
const { formatUrl } = require("@aws-sdk/util-format-url");
const fetch = require("node-fetch");

// Set the AWS Region
const REGION = "REGION";

// Set parameters
let signedUrl;
let response;

// Create a random name for the Amazon Simple Storage Service (Amazon S3) bucket
const BUCKET = `test-bucket-${Math.ceil(Math.random() * 10 ** 10)}`;
// Create a random name for object to upload to S3 bucket
const KEY = `test-object-${Math.ceil(Math.random() * 10 ** 10)}`;
const BODY = "BODY";
const EXPIRATION = 60 * 60 * 1000;

// Create Amazon S3 client object
const v3Client = new S3({ REGION });

const run = async () => {
    try {
        //Create an S3 bucket
        console.log(`Creating bucket ${BUCKET}`);
        await v3Client.send(new CreateBucketCommand(BUCKET));
        console.log(`Waiting for "${BUCKET}" bucket creation...`);
    } catch (err) {
        console.log("Error creating bucket", err);
    }
    try {
        //Create an S3RequestPresigner object
        const signer = new S3RequestPresigner({ ...v3Client.config });
        // Create request
        const request = await createRequest(
            v3Client,
            new PutObjectCommand({ KEY, BUCKET })
        );
        // Define the duration until expiration of the presigned URL
        const expiration = new Date(Date.now() + EXPIRATION);

        // Create and format presigned URL
        signedUrl = formatUrl(await signer.presign(request, expiration));
        console.log(
            `\nPutting "${KEY}" using signedUrl with body "${BODY}" in v3`
        );
    } catch (err) {
        console.log("Error creating presigned URL", err);
    }
    try {
        // Upload the object to the Amazon S3 bucket using the presigned URL
        // Use node-fetch to make the HTTP request to the presigend URL
        // we use to upload the file

        response = await fetch(signedUrl, {
            method: "PUT",
            headers: {
                "content-type": "application/octet-stream",
            },
            body: BODY,
        });
    } catch (err) {
        console.log("Error uploading object", err);
    }
    try {
        // Delete the object
        console.log(`\nDeleting object "${KEY}" from bucket`);
        await v3Client.send(new DeleteObjectCommand(BUCKET, KEY));
    } catch (err) {
        console.log("Error deleting object", err);
    }
    try {
        // Delete the bucket
        console.log(`\nDeleting bucket ${BUCKET}`);
        await v3Client.send(new DeleteBucketCommand(BUCKET));
    } catch (err) {
        console.log("Error deleting bucket", err);
    }
};
run();
// snippet-end:[s3.JavaScript.buckets.presignedurlv3]
