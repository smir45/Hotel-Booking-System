const { Blog } = require("../../models");
const imageKit = require("../../utils/imagekit.config");

module.exports.postBlog = async (req, res) => {
  const { title, desctiption } = req.body;

  var modifiedUrl;

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
        modifiedUrl = imageKit.url({
          src: url,
        });
        const blog = new Blog({
            title,
            desctiption,
            image: modifiedUrl,
          });
          await blog.save();
        res.status(200).json({
            status: "success",
            message: "Blog post created successfully",
            data: {
                title,
                desctiption,
                image: modifiedUrl,
            },
        });
      }
    }
  );
  
  
};


module.exports.getBlogs = async (req, res) => {
    const blogs = await Blog.findAll();
    res.status(200).json({
        status: "success",
        data: blogs,
    });
}