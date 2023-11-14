import { HaloCMSNebula } from "@/index";
import { createNebula } from "@atomicdesign/atomic-singularity";

import 'vuetify/styles'
import { VuetifyOptions, createVuetify } from 'vuetify'

export const useVuetify = createNebula<HaloCMSNebula<VuetifyOptions>>({
  name: "Halo CMS SDK: Vuetify",

  imports: [
    (app: any, module: any) => {console.log(module); return {name: "asdasd"}}
  ],

  configurationSettings: [
    {
      theme: {},

      provider: null
    }
  ],

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
})
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