import { HaloCMSNebula } from "@/index";
import { createNebula } from "@atomicdesign/atomic-singularity";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

interface Test1 {
  evenCoolerKey: string;
}

interface Test2 {
  other: number;
  mainKey: {
    subKey: string;
  }
}

export const useVuetify = createNebula<HaloCMSNebula, Test2 & Test1>({
  name: "Halo CMS SDK: Vuetify",

  vuePlugins: [
    createVuetify({
      theme: {
        themes: {
          light: {
            variables: {
              "theme-background": "#F4F4F4"
            }
          }
        }
      }
    })
  ]
}).build();
  // .addConfigurable("")
  // .addConfiguration("activeTheme", "light", "light")
  // .addConfiguration("")
  // .build();


  // export const useMadeup = createNebula({
  //   name: "asd",

  //   // configuration: {
  //   //   testValue: "asdasd"
  //   // }
  //   configure: [
  //     useVuetify
  //       .addConfigurableOption("evenCoolerKey", "test")
  //       .addConfigurableOption("other", 3)
  //     ]
  // });