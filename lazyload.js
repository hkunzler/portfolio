if(window.IntersectionObserver) {
    document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
      var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var lazyImage = entry.target;
            if(lazyImage.dataset.src) {
              lazyImage.src = lazyImage.dataset.src;
            }
            if(lazyImage.dataset.srcset) {
              lazyImage.srcset = lazyImage.dataset.srcset;
            }

            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
  });
} else {
      var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
      lazyImages.forEach(function(image) {
          if(image.dataset.srcset) {
            image.srcset = image.dataset.srcset;
          }
          if(image.dataset.src) {
            image.src = image.dataset.src;
          }
      });
}
