let imgChange = (e) => {
    document.querySelector('.bg_image').style.backgroundImage = `url(${e})`;
}
nextParticle = new NextParticle({
    image: document.all.logo,
    width: window.innerWidth,
    height: window.innerHeight,
    maxWidth: window.innerWidth * 0.8,
    particleGap: 1
  });
  window.onresize = function () {
    if (window.innerWidth > 600) {
      nextParticle.width = window.innerWidth - 20;
      nextParticle.height = window.innerHeight - 20;
      nextParticle.start();
    }
  };