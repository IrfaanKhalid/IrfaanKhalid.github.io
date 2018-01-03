<template>
  <section class="container">
    <div>
      <img src = "../img/me.png" class="headshot">
      <h1 class="title">
        Hi! I'm Irfaan.
      </h1>
      <h2 class="subtitle">
        Click the links below to learn more about me.
      </h2>
      <div class="links">
        <a href="https://github.com/IrfaanKhalid/" target="_blank" class="button--grey">GitHub</a>
        <a href="https://www.linkedin.com/in/irfaankhalid/" target="_blank" class="button--grey">LinkedIn</a>
        <a href="https://www.instagram.com/irfdawg/" target="_blank" class="button--grey">Instagram</a>
        <a href="resume.pdf" target="_blank" class="button--grey">Resume</a>
        <a href="https://www.youtube.com/watch?v=dDkaGBkcqQ0" target="_blank" class="button--grey">My Most Recent Conference Talk</a>
      </div>
    </div>
  </section>
</template>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
}

.headshot {
  border-radius: 50%;
  width: 40vh;
  height: 40vh;
}
</style>
