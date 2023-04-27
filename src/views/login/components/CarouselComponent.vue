<template>
  <div
    id="carousel"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-interval="3000"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="circle-style"></div>
      <div class="carousel-item">
        <div class="carouse-item-container">
          <img
            src="@/assets/images/first-character.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="content-information">
            <!-- Hola a todos -->
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <div class="carouse-item-container">
          <img
            src="@/assets/images/second-character.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="content-information">
            <!-- Hola a todos -->
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="carouse-item-container">
          <img
            src="@/assets/images/third-character.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="content-information">
            <!-- Hola a todos -->
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<style scoped>
.carousel-inner {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: var(--purple-color);
  position: relative;
}
.carousel-item img {
  object-fit: scale-down;
  height: 70%;
}
.carousel-item-container {
  display: flex;
  flex-direction: column;
}
.content-information {
  position: absolute;
  border: 15%;
  bottom: 15%;
  margin: auto;
  text-align: center;
  color: white;
  transform: translate(-50%, -50%);
}
.circle-style {
  width: 70%;
  height: 65%;
  border-radius: 50%;
  background-color: var(--pink-light-color);
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
