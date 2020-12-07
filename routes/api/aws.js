const express = require("express");
const AWS = require("aws-sdk");
const { Credentials } = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const { aws } = require("../../config/index");

const router = express.Router();

const access = new Credentials({
    accessKeyId: aws.awsAccessKey,
    secretAccessKey: aws.awsSecretKey,
});

router.post("/", function (req, res) {
    const { fileName } = req.body;
    console.log(fileName);
    const s3 = new AWS.S3({
        accessKeyId: aws.awsAccessKey,
        secretAccessKey: aws.awsSecretKey,
        region: "us-east-2",
        signatureVersion: "v4",
    });
    const url = s3.getSignedUrl("getObject", {
        Bucket: aws.awsBucket,
        Key: uuidv4() + ".jpeg",
        Expires: 60 * 5,
    });
    console.log(url);
    return res.json({ url: url });
});

module.exports = router;
