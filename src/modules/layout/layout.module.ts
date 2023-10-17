import { MiddlewareUseFunction, createModule } from '@atomicdesign/atomic-singularity'
import { type HaloCMSModule } from '@/interfaces/halocms-module.interface';

import baseLayoutVue from './layouts/base.layout.vue';

export const HaloCMSSDKLayoutModule = createModule<HaloCMSModule>({
  name: "Halo CMS SDK: Layout",

  masterTemplate: baseLayoutVue
})