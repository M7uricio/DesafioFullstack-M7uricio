import * as yup from "yup";

const clientSchema = yup.object().shape({
  id: yup.number(),
  name: yup.string().max(50).required(),
  email: yup.string().email().max(50).required(),
  password: yup.string().required(),
  telephone: yup.string().max(50).required(),
  orderedAt: yup.date().notRequired(),
});

const clientUpdateSchema = yup.object().shape({
  name: yup.string().max(50).notRequired(),
  email: yup.string().email().max(50).notRequired(),
  password: yup.string().notRequired(),
  telephone: yup.string().max(50).notRequired(),
});

const clientWithoutPasswordSerializer = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  telephone: yup.string().notRequired(),
  orderedAt: yup.date().notRequired(),
});

export { clientSchema, clientWithoutPasswordSerializer, clientUpdateSchema };
