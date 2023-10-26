import { MiddlewareUseFunction, createNebula } from '@atomicdesign/atomic-singularity'
import { type HaloCMSNebula } from '@/interfaces/halocms-module.interface';

import baseLayoutVue from './layouts/base.layout.vue';

export const HaloCMSSDKLayoutModule = createNebula<HaloCMSNebula>({
  name: "Halo CMS SDK: Layout",

  masterTemplate: baseLayoutVue
}).build();