'use client';

import { GTM } from '@/lib/colors';

export type Brand = {
  /** Buttons, progress bar, active states */
  primary: string;
  /** Soft tint for hovers / tag backgrounds */
  soft: string;
  /** Dark block (testimonial card) */
  dark: string;
  /** Light accent for text on the dark block */
  light: string;
  /** Header background */
  bg: string;
  bgScrolled: string;
};

const COPPER: Brand = {
  primary: GTM.copper,
  soft: GTM.tag,
  dark: GTM.charcoal,
  light: GTM.copperLight,
  bg: GTM.warm,
  bgScrolled: 'rgba(250,249,246,0.85)',
};

/** Palette for shared components. One brand site-wide; kept as a hook so a per-route theme can return later. */
export function useBrand(): Brand {
  return COPPER;
}
