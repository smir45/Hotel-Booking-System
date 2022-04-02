const imageKit = require("../../utils/imagekit.config");
const {Destination} = require("../../models");

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
          transformation: [
            {
              height: "200",
              width: "200",
              quality: "150",
              format: "png",
              overlayText: "Accommod",
              overlayTextColor: "white",
              focus: "auto",
            },
          ],
        });
        res.json({
          status: "success",
          data: modifiedUrl,
          message: "Successfully uploaded files",
        });
        // console.log("newDestinationThumbnail", newDestinationThumbnail);
      }
    }
  );
};

module.exports = ImageUpload;
