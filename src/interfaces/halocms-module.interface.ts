import { type AtomicOriginModule } from '@atomicdesign/atomic-origin';
import { type AtomicVueNebula } from '@atomicdesign/atomic-vue';

export interface HaloCMSNebula<ConfigurationType = {}> extends AtomicOriginModule<ConfigurationType>, AtomicVueNebula<ConfigurationType>  {
}