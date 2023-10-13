import { createModule } from '@atomicdesign/atomic-singularity'
import { type HaloCMSModule } from '@/interfaces/halocms-module.interface';

import { HaloCMSSDKAuthenticationModule } from "@authentication";
import { HaloCMSSDKLayoutModule } from "@layout";


export const HaloCMSSDKDefaultModules: HaloCMSModule = createModule({
  name: "Halo CMS SDK: Default modules",

  imports: [
    HaloCMSSDKAuthenticationModule,
    HaloCMSSDKLayoutModule
  ]
})