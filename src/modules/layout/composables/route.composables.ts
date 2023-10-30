import { NavigationGuard, useRouter } from 'vue-router';
import { useLayoutStore } from '../layout.store';
import { Store, StoreDefinition } from 'pinia';

/**
 * Configure the Vue Router to use our Layout Guard. This will
 * cause the Layout options to automatically update with whatever
 * data is passed in through the RouteMeta.layout object
 * TODO: Better type safety
 */
export function useLayoutGuard(layoutStore?: any): void {
  const router = useRouter();
  router.beforeEach(createLayoutGuard(layoutStore));
}

/**
 * TODO: Better type safety
 * Create the Navigation Guard function that will interact with the LayoutStore 
 * @returns A Navigation guard function that's configured to change layout with RouteMeta configurations
 */
export function createLayoutGuard(layoutStore?: any): NavigationGuard {
  // TODO: Get better type safety on this
  let store: any = layoutStore;
  if (!layoutStore) {
    store = useLayoutStore();
  }

  return (to, from, next) => {
    if (to.meta.layout) {
      store.updateLayoutOptions(to.meta.layout);
    }
    return next();
  }
}