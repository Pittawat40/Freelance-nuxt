<template>
  <div class="header">
    <div class="left">
      <span class="mx-3 fs-20 text-uppercase text-white">New Project</span>
    </div>
    <div class="right">
      <i class="fa-solid fa-bars mx-3" id="toggle"></i>
      <span class="mx-4 text-white">Home</span>
      <span class="mx-4 text-white">Work</span>
      <span class="mx-4 text-white">About Us</span>
      <span class="mx-4 text-white">Contact</span>
    </div>
    <div class="navbar" id="navbar">
      <i class="fa-solid fa-bars-staggered mx-2" id="close"></i>
      <span class="mx-3 text-black">Home</span>
      <span class="mx-3 text-black">Work</span>
      <span class="mx-3 text-black">About Us</span>
      <span class="mx-3 text-black">Contact</span>
    </div>
  </div>
  <div class="banner"></div>
  <div class="container">
    <!-- section -->
    <div class="first-section mt-4">
      <div class="list">
        <div class="icon">
          <i class="fa-solid fa-bicycle"></i>
        </div>
        <span class="mt-3 fs-20 bold">Text title</span>
        <span class="mt-1"
          >text description text description text description text description
          text description</span
        >
      </div>
      <div class="list">
        <div class="icon">
          <i class="fa-solid fa-tree"></i>
        </div>
        <span class="mt-3 fs-20 bold">Text title</span>
        <span
          >text description text description text description text description
          text description</span
        >
      </div>
      <div class="list">
        <div class="icon">
          <i class="fa-solid fa-camera"></i>
        </div>
        <span class="mt-3 fs-20 bold">Text title</span>
        <span
          >text description text description text description text description
          text description</span
        >
      </div>
    </div>
    <!-- section -->
  </div>

  <!-- section -->
  <div class="second-section mt-4">
    <div class="container"></div>
  </div>
  <!-- section -->

  <div class="footer">
    <div class="left">
      <span class="fs-20 bold">Helping Hands</span>
      <span>123-456-7890</span>
      <span>500 Terry Francine Street</span>
      <span>San Francisco, CA 94158</span>
    </div>
    <div class="right">
      <div class="social">
        <i class="fa-brands fa-facebook-f mx-2 fs-20"></i>
        <i class="fa-brands fa-x-twitter mx-2 fs-20"></i>
        <i class="fa-brands fa-youtube mx-2 fs-20"></i>
        <i class="fa-brands fa-instagram mx-2 fs-20"></i>
      </div>
      <span>Terms & Conditions</span>
      <span>Privacy Policy</span>
      <span>Accessibility Statement</span>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Kanit", sans-serif;
  font-weight: 300;
}

span,
i {
  cursor: pointer;
}

.fs-20 {
  font-size: 20px;
}

.bold {
  font-weight: bold;
}

.text-primary {
  color: #819a91 !important;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  margin: 0;
  z-index: 1;
  padding: 20px 10px;
  background-color: rgba(26, 27, 32, 0.95);
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
    i {
      display: none;
      color: #fff;
    }
  }
  .navbar {
    height: 100%;
    position: fixed;
    width: 70%;
    background: #d1d8be;
    right: -70%;
    top: 0;
    bottom: 0;
    transition: ease-in-out 0.4s;
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;
    padding: 20px;
  }
  .navbar.open {
    right: 0;
  }
}

.banner {
  position: relative;
  background-image: url("./images/bg.jpg");
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; */
  background-attachment: scroll;
  height: 100dvh;
  width: 100%;
}

.first-section {
  display: flex;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .list {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 50px;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      border-radius: 50%;
      width: 140px;
      height: 140px;
      background-color: #d1d8be;
      cursor: pointer;
      i {
        font-size: 50px;
      }
    }
  }
}

.second-section {
  background-color: #eeefe0;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  width: 100%;
  .left {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 8px;
  }
  .right {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 8px;
    .social {
      display: flex;
      align-items: center;
    }
  }
}

@media (max-width: 1024px) {
  .banner {
    height: 500px;
  }
}

@media (max-width: 430px) {
  .header {
    padding: 10px;
    .right {
      span {
        display: none;
      }
      i {
        display: block;
      }
    }
  }
  .banner {
    height: 200px;
  }

  .first-section {
    flex-direction: column;
    .list {
      padding: 0 20px;
      .icon {
        width: 100px;
        height: 100px;
        i {
          font-size: 40px;
        }
      }
    }
  }

  .footer {
    padding: 20px 0;
    flex-direction: column-reverse;
    gap: 50px;
  }
}
</style>
