import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { LayoutOptions } from "./layout-options.interface";

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

  function updateLayoutOptions(layoutOptions: LayoutOptions) {
    pageTitle.value = layoutOptions.pageTitle ?? "";
    pageHeading.value = layoutOptions.pageHeading ?? "";
    showSystemBar.value = layoutOptions.showSystemBar ?? false;
    showAppBar.value = layoutOptions.showAppBar ?? false;
    showSideNav.value = layoutOptions.showSideNav ?? false;
    showMainAsFlex.value = layoutOptions.showMainAsFlex ?? false;
    showContentInContainer.value = layoutOptions.showContentInContainer ?? false;
    showContentContainerIsFluid.value = layoutOptions.showContentContainerIsFluid ?? false;
    showContentContainerFillsHeight.value = layoutOptions.showContentContainerFillsHeight ?? false;
    showHeader.value = layoutOptions.showHeader ?? false;
    showHeaderActions.value = layoutOptions.showHeaderActions ?? false;
    showNavigation.value = layoutOptions.showNavigation ?? false;
    showFooter.value = layoutOptions.showFooter ?? false;
    showCustomSideNav.value = layoutOptions.showCustomSideNav ?? false;
  }

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
    showCustomSideNav,

    // Actions
    updateLayoutOptions
  }
})