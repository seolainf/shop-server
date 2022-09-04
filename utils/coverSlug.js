import slugify from "slugify";

export const coverSlug = (slug) => {
  return slugify(slug, {
    replacement: "-",
    remove: undefined,
    lower: true,
    strict: true,
    locale: "vi",
    trim: true,
  });
};
