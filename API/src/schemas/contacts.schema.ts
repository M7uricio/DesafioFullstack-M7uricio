import * as yup from "yup";

const contactsSchema = yup.object().shape({
  id: yup.number(),
  name: yup.string().max(50).required(),
  email: yup.string().email().max(50).required(),
  telephone: yup.string().max(50).required(),
  orderedAt: yup.string().notRequired(),
});

const contactsUpdateSchema = yup.object().shape({
  name: yup.string().max(50).notRequired(),
  email: yup.string().email().max(50).notRequired(),
  telephone: yup.string().max(50).notRequired(),
});

export { contactsSchema, contactsUpdateSchema };
