
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const borderBottoms = document.querySelectorAll('.border-bottom');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting && !entry.target.classList.contains('slide')) {
        entry.target.classList.remove("appear");
        /* return; */
    } else {
      entry.target.classList.add("appear");
/*       appearOnScroll.unobserve(entry.target); */
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});

borderBottoms.forEach(borderBottom => {
  appearOnScroll.observe(borderBottom);
});