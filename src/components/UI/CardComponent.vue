<template>
  <div class="card">
    <slot />
  </div>
</template>
<style scoped>
.card {
  cursor: pointer;
  box-shadow: 0px 4px 16px 0px rgb(255 255 255 / 30%);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.2s ease-out;
  background-clip: padding-box;
  background: #f5f5f5;
  border: 1px solid #333;
}

.card.logo {
  height: 120px;
  width: 120px;
  border-radius: 20px;
  overflow: hidden;
  border: none;
  background: transparent;
}

.card:hover {
  transform: scale(0.9);
}

.card.tile {
  border-radius: 8px;
}

.card.logo:hover {
  transform: scale(0.85);
}

@media (min-width: 768px) and (max-width: 992px) {
  .card.logo {
    height: 80px;
    width: 80px;
    border-radius: 12px;
  }
}
@media (min-width: 476px) and (max-width: 768px) {
  .card.logo {
    height: 70px;
    width: 70px;
    border-radius: 8px;
  }
}

@media (min-width: 300px) and (max-width: 476px) {
  .card.logo {
    height: 50px;
    width: 50px;
    border-radius: 4px;
  }
}

@media (max-width: 300px) {
  .card.logo {
    height: 40px;
    width: 40px;
    border-radius: 4px;
  }
}
</style>
