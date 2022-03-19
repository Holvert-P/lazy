const observer = new IntersectionObserver((entries) => {
  entries.filter(isVisible).forEach(loadImage);
});

const isVisible = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const image = entry.target;
  const url = image.dataset.src;
  image.src = url;
  observer.unobserve(image);
};

export const registerImage = (image) => {
  observer.observe(image, {
    threeshol: 1,
  });
};
