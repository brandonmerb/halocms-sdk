import { createNebula } from '@atomicdesign/atomic-singularity'
import { type HaloCMSNebula } from '@/interfaces/halocms-module.interface';

import { HaloCMSSDKAuthenticationModule } from "@authentication";
import { HaloCMSSDKLayoutModule } from "@layout";
import { useVuetify } from '@/modules/vuetify/vuetify.nebula';
import { createPinia } from 'pinia';


export const HaloCMSSDKDefaultModules = createNebula<HaloCMSNebula>({
  name: "Halo CMS SDK: Default modules",

  imports: [
    HaloCMSSDKAuthenticationModule(),
    HaloCMSSDKLayoutModule(),
    useVuetify(),
  ],

  vuePlugins: [
    createPinia()
  ]
}).build();