import { type HaloCMSModule } from '@/index';
import { MiddlewareUseFunction, createNebula } from '@atomicdesign/atomic-singularity'

export const HaloCMSSDKAuthenticationModule = createNebula<HaloCMSModule>({
  name: "Halo CMS SDK: Authentication"
}).build();