<template>
<section class="container">
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130644862-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'UA-130644862-1');
    </script>
  </head>

  <div>
    <img src="../img/me.jpg" class="headshot">
    <h1 class="title">Hi! I'm Irfaan.</h1>
    <h2 class="subtitle">Click the links below to learn more about me.</h2>
    <div class="links">
      <a href="https://medium.com/@Irfdawg/" target="_blank" class="button--grey link-button">Blog</a>
      <a
        href="https://github.com/IrfaanKhalid/"
        target="_blank"
        class="button--grey link-button"
      >GitHub</a>
      <a
        href="https://www.linkedin.com/in/irfaankhalid/"
        target="_blank"
        class="button--grey link-button"
      >LinkedIn</a>
      <a
        href="https://www.instagram.com/irfdawg/"
        target="_blank"
        class="button--grey link-button"
      >Instagram</a>
      <a href="resume.pdf" target="_blank" class="button--grey link-button">Resume</a>
      <a
        href="https://www.youtube.com/watch?v=dDkaGBkcqQ0"
        target="_blank"
        class="button--grey link-button"
      >HackCon V Talk</a>
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
  padding-top: 1%;
}

.link-button {
  margin-top: 1vh;
  margin-bottom: 1vh;
  margin-left: 1vw;
  margin-right: 1vw;
}

.headshot {
  border-radius: 50%;
  width: 40vh;
  height: 40vh;
}
</style>
