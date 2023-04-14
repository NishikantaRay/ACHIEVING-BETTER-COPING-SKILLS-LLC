import Joi from '@hapi/joi';
Joi.objectId = require('joi-objectid')(Joi)

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().trim().alphanum().min(3).max(25).trim(true),
    lastName: Joi.string().trim().alphanum().min(3).max(25).trim(true),
    email: Joi.string().trim().email().trim(true).required(),
    password: Joi.string().trim().min(4).trim(true).required(),
    phoneNumber: Joi.string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/),
    avatar: Joi.string().trim(),
    role: Joi.string().trim(),
    allowed_operations: Joi.array(),
    resetPassword_token: Joi.allow(),
    resetPassord_expire: Joi.allow(),
    created_by: Joi.string().trim(),
    status: Joi.string().trim(),
    api_key:Joi.string().trim()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {

    req.validatedBody = value;
    next();
  }
};

export const newCertificateValidator= (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().trim().trim(true),
    email: Joi.string().trim().email().trim(true),
    phone: Joi.string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/),
    org: Joi.string().trim().trim(true),
    course: Joi.string().trim().trim(true),
    dateofJ: Joi.string().trim().trim(true),
    dateofC: Joi.string().trim().trim(true),
    trainer: Joi.string().trim().trim(true),
    duration: Joi.string().trim().trim(true),
    cID: Joi.string().trim().trim(true),
    url: Joi.string().trim().trim(true)
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

export const updateCertificateValidator= (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().trim().alphanum().trim(true),
    email: Joi.string().trim().email().trim(true),
    phone: Joi.string().trim().length(10).pattern(/[6-9]{1}[0-9]{9}/),
    org: Joi.string().trim().alphanum().trim(true),
    course: Joi.string().trim().alphanum().trim(true),
    dateofJ: Joi.string().trim().alphanum().trim(true),
    dateofC: Joi.string().trim().alphanum().trim(true),
    trainer: Joi.string().trim().alphanum().trim(true),
    duration: Joi.string().trim().alphanum().trim(true),
    cID: Joi.string().trim().alphanum().trim(true),
    url: Joi.string().trim().alphanum().trim(true)
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};

export const searchCertificateValidator= (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().trim().email().trim(true).required(),
    cID: Joi.string().trim().alphanum().trim(true).required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
export const deleteCertificateValidator= (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().trim().alphanum().trim(true)
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};