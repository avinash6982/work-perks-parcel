import image01 from "../assets/images/img02.jpeg";
import image02 from "../assets/images/img03.jpeg";
import image03 from "../assets/images/img04.jpeg";

export const mockGalleryFetch = async () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([image01, image02, image03]);
    }, 1000);
  });
