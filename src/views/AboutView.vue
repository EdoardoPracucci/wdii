<template>
  <div class="about">
    <h1 class="testClass">This is an about page</h1>
  </div>
</template>

<style scoped>

.testClass{
  color: red;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
