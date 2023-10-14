import { type HaloCMSModule } from '@/index';
import { createModule } from '@atomicdesign/atomic-singularity'

export const HaloCMSSDKAuthenticationModule: HaloCMSModule = createModule<HaloCMSModule>({
  name: "Halo CMS SDK: Authentication"
})