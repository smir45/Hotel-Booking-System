const Joi = require("joi");

const UserPasswordSchema = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string()
      .min(6)
      .pattern(/[a-z]/, "Password must have atleast one lowercase")
      .pattern(/[A-Z]/, "Password must have atleast uppercase")
      .pattern(/\d/, "Password must have atleast one number")
      .pattern(/[^a-zA-z0-9]/, "Password must have atleast one symbol")
      .messages({
        "string.pattern.name": "{{#name}}",
      })
      .required(),
  });
  validateRequest(req.body, next, schema, res, true);
};

const loginValidation = (data) => {
  const schema = {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  };
  return Joi.validate(data, schema);
};

module.exports = { UserPasswordSchema, loginValidation };
