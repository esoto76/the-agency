<script setup lang="ts"></script>

<template>
  <nav class="navbox">
    <div class="navbox-inner">
      <router-link
        to="/"
        class="nav-btn"
        active-class="is-active"
        exact-active-class="is-exact-active"
      >
        <div class="nav-btn-icon-bx"><span class="material-icons">home</span></div>
        <div class="nav-btn-title">home</div> </router-link
      ><router-link
        to="/contact"
        class="nav-btn"
        active-class="is-active"
        exact-active-class="is-exact-active"
      >
        <div class="nav-btn-icon-bx">
          <span class="material-icons">contact_support</span>
        </div>
        <div class="nav-btn-title">contact</div> </router-link
      ><router-link
        to="/rentals"
        class="nav-btn"
        active-class="is-active"
        exact-active-class="is-exact-active"
      >
        <div class="nav-btn-icon-bx">
          <span class="material-icons">maps_home_work</span>
        </div>
        <div class="nav-btn-title">rentals</div> </router-link
      ><a
        href="https://benchmarkrentals.managebuilding.com/Resident/PublicPages/Home.aspx?ReturnUrl=%2fResident"
        class="nav-btn"
      >
        <div class="nav-btn-icon-bx">
          <span class="material-icons">manage_accounts</span>
        </div>
        <div class="nav-btn-title">sign in</div>
      </a>
      <a
        href="https://benchmarkrentals.managebuilding.com/Resident/rental-application/new"
        class="nav-btn"
      >
        <div class="nav-btn-icon-bx">
          <span class="material-icons">assignment</span>
        </div>
        <div class="nav-btn-title">apply</div>
      </a>
    </div>
  </nav>
</template>
