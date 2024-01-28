import { SyliusTaxon } from '../sylius-types/product-types';
import { Collection } from '../types';

export const normalizeCollection = (syliusTaxon: SyliusTaxon): Collection => {
  return {
    seo: {
      title: syliusTaxon.name,
      description: syliusTaxon.description
    },
    code: syliusTaxon.code,
    description: syliusTaxon.description,
    title: syliusTaxon.name,
    updatedAt: syliusTaxon.updatedAt,
    path: `/search/${syliusTaxon.code}`
  };
};
