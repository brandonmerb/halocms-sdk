import { type HaloCMSNebula } from '@/index';
import { MiddlewareUseFunction, createNebula } from '@atomicdesign/atomic-singularity'

export const HaloCMSSDKAuthenticationModule = createNebula<HaloCMSNebula>({
  name: "Halo CMS SDK: Authentication"
}).build();