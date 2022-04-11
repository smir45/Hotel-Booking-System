const imageKit = require("../../utils/imagekit.config");
const { images } = require("../../models");
const { link } = require("fs");

const ImageUpload = async (req, res, next) => {
  console.log("destinations", req.body.destinationId);
  destinationId = req.body.destinationId;
  if (!req.files) {
    res.send("No file uploaded");
    return;
  }
  imageKit.upload(
    {
      file: req.files.image.data,
      fileName: req.files.image.name,
      folder: "destinations",
    },
    async function (err, response) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          status: "failed",
          message: "An error occured during file upload. Please try again.",
        });
      } else {
        const { url } = response;
        const modifiedUrl = imageKit.url({
          src: url,
        });
        res.json({
          status: "success",
          data: modifiedUrl,
          message: "Successfully uploaded files",
        });
      }
    }
  );
};

const ImagesUpload = async (req, res, next) => {
  // console.log(req.files)
  if (!req.files) {
    res.send("No file uploaded");
    return;
  }
  req.files.image.map((file) => {
    imageKit.upload(
      {
        file: file.data,
        fileName: file.name,
        folder: "Hotels",
      },
      async (err, response) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            status: "failed",
            message: "An error occured during file upload. Please try again.",
          });
        } else {
          const { url } = response;

          const hotel = await images.create({
            hotelId: req.body.hotelId,
            name: url,
          });
        }
      }
    );

    // console.log(file.data.buffer.toString("base64"));
  });
};

module.exports = { ImageUpload, ImagesUpload };
