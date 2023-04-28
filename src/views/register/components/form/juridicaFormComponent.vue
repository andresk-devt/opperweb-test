<template>
  <div class="input-container">
    <label for="razon_social" class="input-container__label">Razon social</label>
    <div class="input-container-content">
      <input id="razon_social" class="input-container__input" />
    </div>
  </div>
  <div class="input-container">
    <label for="nit" class="input-container__label">Nit</label>
    <div class="input-container-content">
      <input id="nit" class="input-container__input" />
    </div>
  </div>
  <div class="input-container">
    <label for="phone" class="input-container__label">Telefono</label>
    <div class="input-container-content">
      <input id="phone" class="input-container__input" />
    </div>
  </div>
  <div class="input-container">
    <label for="email" class="input-container__label">Email</label>
    <div class="input-container-content">
      <input
        id="email"
        class="input-container__input"
        placeholder="usuario@yabu.com"
      />
    </div>
  </div>
  <div class="input-container">
    <label for="password" class="input-container__label">Contraseña</label>
    <div class="input-container-content">
      <input
        id="password"
        class="input-container__input"
        placeholder="Password"
      />
      <ion-icon name="eye-outline"></ion-icon>
    </div>
  </div>
  <div class="input-container">
    <label for="confirm_password" class="input-container__label"
      >Confirmar contraseña</label
    >
    <div class="input-container-content">
      <input
        id="confirm_password"
        class="input-container__input"
        placeholder="Confirm Password"
      />
      <ion-icon name="eye-outline"></ion-icon>
    </div>
  </div>
</template>
