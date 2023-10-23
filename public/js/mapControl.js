let mapNum = 1;
const mapCard = document.querySelectorAll(".maps .map-card");
Array.from(mapCard).forEach((card) => {
  card.addEventListener("click", () => {
    if (mapNum === 1) {
      document.querySelector(".map-num1").classList.remove("active");
      document.querySelector(".map-num2").classList.add("active");
      document.querySelector(".map1").classList.add("hidden");
      document.querySelector(".map2").classList.remove("hidden");
      mapNum = 2;
    } else {
      document.querySelector(".map-num1").classList.add("active");
      document.querySelector(".map-num2").classList.remove("active");
      document.querySelector(".map1").classList.remove("hidden");
      document.querySelector(".map2").classList.add("hidden");
      mapNum = 1;
    }
  });
});
