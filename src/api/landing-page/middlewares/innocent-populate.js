'use strict';

/**
 * `innocent-populate` middleware
 */

const populate = {
  metadata: {
    populate: {
      metaImage: {
        populate: true,
        fields: ["name", "alternativeText", "url"],
      },
    }
  },
  blocks: {
    populate: {
      link: {
        populate: true,
      },
      image: {
        fields: ["name", "alternativeText", "url"],
      },
      card: {
        populate: {
          images: {
            fields: ["name", "alternativeText", "url"],
          },
        }
      },
      products: {
        populate: {
            images: {
            fields: ["name", "alternativeText", "url"],
          },
        }
      },
      plan: {
        populate: ["services", "link"],
      }
    }
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In innocent-populate middleware.');
    ctx.query = {
      populate,
      ...ctx.query,
    }
    await next();
  };
};
