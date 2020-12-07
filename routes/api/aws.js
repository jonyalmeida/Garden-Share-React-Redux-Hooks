const express = require("express");
const AWS = require("aws-sdk");

const { aws } = require("../../config/index");
const expressAsyncHandler = require("express-async-handler");

const router = express.Router();

router.post(
    "/",
    expressAsyncHandler(async function (req, res) {
        const { fileName, userId } = req.body;
        console.log(fileName, userId);

        const s3 = new AWS.S3({
            accessKeyId: aws.awsAccessKey,
            secretAccessKey: aws.awsSecretKey,
            signatureVersion: "v4",
            region: aws.awsRegion,
        });

        const getSingedUrl = async () => {
            const params = {
                Bucket: `${aws.awsBucket}/${userId}`,
                Key: fileName,
                Expires: 60 * 5 * 1000,
                ACL: "public-read",
            };

            try {
                const url = await new Promise((resolve, reject) => {
                    s3.getSignedUrl("putObject", params, (err, url) => {
                        err ? reject(err) : resolve(url);
                    });
                });
                return url;
            } catch (err) {
                if (err) {
                    console.log(err);
                }
            }
        };

        return res.json({ url: await getSingedUrl() });
    })
);

module.exports = router;
