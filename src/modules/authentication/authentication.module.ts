import { type HaloCMSModule } from '@/index';
import { MiddlewareUseFunction, createModule } from '@atomicdesign/atomic-singularity'

export const HaloCMSSDKAuthenticationModule = createModule<HaloCMSModule>({
  name: "Halo CMS SDK: Authentication"
})