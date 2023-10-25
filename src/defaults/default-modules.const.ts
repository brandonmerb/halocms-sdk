import { createNebula } from '@atomicdesign/atomic-singularity'
import { type HaloCMSModule } from '@/interfaces/halocms-module.interface';

import { HaloCMSSDKAuthenticationModule } from "@authentication";
import { HaloCMSSDKLayoutModule } from "@layout";


export const HaloCMSSDKDefaultModules = createNebula<HaloCMSModule>({
  name: "Halo CMS SDK: Default modules",

  imports: [
    HaloCMSSDKAuthenticationModule(),
    HaloCMSSDKLayoutModule()
  ]
}).build();