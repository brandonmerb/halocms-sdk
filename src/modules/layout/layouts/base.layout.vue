<template>
  <div class="card">
    This indicates that we're running!!!
  </div>
  <div class="card">
    Second value: 
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { DependencyInjectionMiddleware, LoggerToken, LoggerInterface } from '@atomicdesign/atomic-singularity';

onMounted(() => {
  const l = DependencyInjectionMiddleware.instance.inject<LoggerInterface>(LoggerToken);
  console.log(l);
  l.info("This works!!");
})

</script>
<style>
.card {
  background-color: #FFF !important;
}
</style>