<template>
  <v-app>
    <!-- Application Toolbar -->
    <v-system-bar v-if="store.showSystemBar">
      <router-view name="systemBar"></router-view>
    </v-system-bar>

    <v-navigation-drawer v-if="store.showSideNav && store.showCustomSideNav !== true">
      <router-view name="navigationDrawer" />
    </v-navigation-drawer>
    <router-view name="navigationDrawer" v-else-if="store.showSideNav && store.showCustomSideNav" />

    <v-app-bar v-if="store.showAppBar">
      <!-- -->
      <router-view name="appBar" />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main :class="{'d-flex': store.showMainAsFlex}">
      <!-- <atomicdesign-toast-display-component /> -->
      <!-- Provides the application the proper gutter -->
      <v-container :fluid="store.showContentContainerIsFluid" v-if="store.showContentInContainer" :class="{'fill-height':store.showContentContainerFillsHeight}">
        <!-- If using vue-router -->
        <router-view />
      </v-container>
      <router-view v-else />
    </v-main>

    <v-footer v-if="store.showFooter">
      <router-view name="footer" />
      <!-- -->
    </v-footer>
  </v-app>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { LoggerToken, LoggerInterface, useDI, SystemVersionToken } from '@atomicdesign/atomic-singularity';
import { useLayoutStore } from '../layout.store';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useLayoutStore();

router.beforeEach((to, from, next) => {
  if (to.meta.layout) {
    console.log(to.meta.layout);
    store.updateLayoutOptions(to.meta.layout);
  }
});

// const di = useDI();

</script>
<style>
</style>