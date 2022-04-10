const { Blog } = require("../../models");
const imageKit = require("../../utils/imagekit.config");
const slugify = require("slugify");

module.exports.postBlog = async (req, res) => {
  try {
    const data = req.body;
    const slugdata = data.title.toLowerCase().replace(/\s/g, "-");

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
          const newBlog = new Blog({
            slug: slugdata,
            title: data.title,
            description: data.description,
            image: modifiedUrl,
          });
          const blogData = await newBlog.save();
          res.json({
            status: "success",
            data: modifiedUrl,
            message: "Successfully uploaded files",
          });
        }
      }
    );
  } catch (err) {
    res.json(err);
    console.log(err);
  }
};

module.exports.getBlogs = async (req, res) => {
  const blogs = await Blog.findAll();
  res.status(200).json({
    status: "success",
    message: "Blogs fetched successfully",
    data: blogs,
  });
};

module.exports.createBlog = async (req, res) => {
  const { title, description } = req.body;
  try {
    const slugifiedTitle = slugify(title, {
      replacement: "-",
      remove: /[*+~.()'"!:@]/g,
      lower: true,
    });

    const blog = await Blog.create({
      title,
      description,
      slug: slugifiedTitle,
    });

    res.status(200).json({
      status: "success",
      message: "Blog created successfully",
      data: blog,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: "An error occured during blog creation. Please try again.",
    });
  }
};
