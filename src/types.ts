/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Category = 'Gioielli' | 'Home Decor' | 'Accessori' | 'Orologi';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  longDescription: string;
  image: string;
  details: string[];
  dimensions?: string;
}

export interface ValueCard {
  icon: string;
  title: string;
  description: string;
}

export interface CustomizationStep {
  step: number;
  title: string;
  description: string;
}
