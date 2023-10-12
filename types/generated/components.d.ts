import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksFluid extends Schema.Component {
  collectionName: 'components_blocks_fluids';
  info: {
    displayName: 'fluid';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'elements.button-link'>;
    heroImage: Attribute.Media;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'pricing';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    plan: Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksProducts extends Schema.Component {
  collectionName: 'components_blocks_products';
  info: {
    displayName: 'products';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    button: Attribute.Component<'elements.button-link', true>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'row';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'button link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    images: Attribute.Media;
    heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsPricingCard extends Schema.Component {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'pricing card';
    description: '';
  };
  attributes: {
    planType: Attribute.String;
    planDescription: Attribute.String;
    planPrice: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.pricing-card',
      'oneToMany',
      'api::service.service'
    >;
    link: Attribute.Component<'elements.button-link'>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'meta data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.fluid': BlocksFluid;
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.products': BlocksProducts;
      'blocks.row': BlocksRow;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.pricing-card': ElementsPricingCard;
      'seo.meta-data': SeoMetaData;
    }
  }
}
