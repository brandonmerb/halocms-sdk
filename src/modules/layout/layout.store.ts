import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useLayoutStore = defineStore('layoutStore', () => {
  const pageTitle: Ref<string> = ref('');
  const pageHeading: Ref<string> = ref('');

  const showSystemBar: Ref<boolean> = ref(false);
  const showAppBar: Ref<boolean> = ref(false);
  const showSideNav: Ref<boolean> = ref(false);
  const showMainAsFlex: Ref<boolean> = ref(false);
  const showContentInContainer: Ref<boolean> = ref(false);
  const showContentContainerIsFluid: Ref<boolean> = ref(false);
  const showContentContainerFillsHeight: Ref<boolean> = ref(false);
  const showHeader: Ref<boolean> = ref(false);
  const showHeaderActions: Ref<boolean> = ref(false);
  const showNavigation: Ref<boolean> = ref(false);
  const showFooter: Ref<boolean> = ref(false);

  const showCustomSideNav: Ref<boolean> = ref(false);

  return {
    // State
    pageTitle,
    pageHeading,
    showSystemBar,
    showAppBar,
    showSideNav,
    showMainAsFlex,
    showContentInContainer,
    showContentContainerIsFluid,
    showContentContainerFillsHeight,
    showHeader,
    showHeaderActions,
    showNavigation,
    showFooter,
    showCustomSideNav

    // Actions
  }
})