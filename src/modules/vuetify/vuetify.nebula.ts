import { HaloCMSNebula } from "@/index";
import { createNebula } from "@atomicdesign/atomic-singularity";

import { createVuetify } from 'vuetify';

export const useVuetify = createNebula<HaloCMSNebula>({
  name: "Halo CMS SDK: Vuetify",

  vuePlugins: [
    createVuetify()
  ]
}).build();