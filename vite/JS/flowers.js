const flowers = [
  {
    title: "Rose",
    description:
      "A classic symbol of love and beauty with vibrant petals and a delicate fragrance.",
    price: 9.99,
    imageUrl: "/rose.jpg",
    altText: "close-up image of a red rose and green stem with a few leaves",

    spring_summer: "Y",
    fall_winter: "N",

    warm_vibrant: "Y",
    soft_pastel: "N",

    sale: "N",
  },
  {
    title: "Tulip",
    description:
      "A popular spring flower known for its elegant shape and bright colors.",
    price: 7.49,
    imageUrl: "/tulip.jpg",
    altText: "close-up image of a orange and yellow tulip",

    spring_summer: "Y",
    fall_winter: "N",

    warm_vibrant: "Y",
    soft_pastel: "N",

    sale: "N",
  },
  {
    title: "Sunflower",
    description:
      "A large, cheerful flower with bright yellow petals and a dark center.",
    price: 8.25,
    imageUrl: "/sunflower.jpg",
    altText: "close-up image of a yellow sunflower",

    spring_summer: "N",
    fall_winter: "Y",

    warm_vibrant: "Y",
    soft_pastel: "N",

    sale: "N",
  },
  {
    title: "Lily",
    description:
      "A graceful flower with large, fragrant blooms in various colors.",
    price: 12.75,
    imageUrl: "/lily.jpg",
    altText: "close-up image of a white lily",

    spring_summer: "Y",
    fall_winter: "N",

    warm_vibrant: "Y",
    soft_pastel: "Y",

    sale: "Y",
  },
  {
    title: "Daisy",
    description:
      "A simple yet charming flower with white petals and a sunny yellow center.",
    price: 5.99,
    imageUrl: "/daisy.jpg",
    altText: "close-up image of an oxeye (white) daisy",

    spring_summer: "Y",
    fall_winter: "N",

    warm_vibrant: "Y",
    soft_pastel: "N",

    sale: "N",
  },
  {
    title: "Orchid",
    description:
      "An exotic flower with intricate, delicate blooms and vibrant colors.",
    price: 14.49,
    imageUrl: "/orchid.png",
    altText: "close-up image of a pink orchid",

    spring_summer: "N",
    fall_winter: "Y",

    warm_vibrant: "N",
    soft_pastel: "Y",

    sale: "Y",
  },
  {
    title: "Hydrangea",
    description:
      "A beautiful, bushy flower with large clusters of small blooms.",
    price: 11.25,
    imageUrl: "/hydrangea.jpg",
    altText: "close-up image of blue hydrangea",

    spring_summer: "Y",
    fall_winter: "N",

    warm_vibrant: "N",
    soft_pastel: "Y",

    sale: "Y",
  },
  {
    title: "Peony",
    description:
      "A lush, fragrant flower with layers of soft, pastel-colored petals.",
    price: 13.5,
    imageUrl: "/peony.jpg",
    altText: "close up of a pink and white gradient peony",

    spring_summer: "Y",
    fall_winter: "N",

    warm_vibrant: "N",
    soft_pastel: "Y",

    sale: "Y",
  },
  {
    title: "Lavender",
    description:
      "A soothing, aromatic flower known for its calming scent and purple blooms.",
    price: 6.75,
    imageUrl: "/lavender.jpeg",
    altText: "close-up image of a purple lavender",

    spring_summer: "Y",
    fall_winter: "N",

    warm_vibrant: "N",
    soft_pastel: "Y",

    sale: "Y",
  },
  {
    title: "Marigold",
    description: "A bright, cheerful flower with warm orange and yellow hues.",
    price: 5.25,
    imageUrl: "/marigold.jpeg",
    altText: "close-up image of an orange marigold",

    spring_summer: "N",
    fall_winter: "Y",

    warm_vibrant: "Y",
    soft_pastel: "N",

    sale: "N",
  },
  {
    title: "Dahlia",
    description:
      "A stunning flower with intricate petal patterns in a range of colors.",
    price: 10.99,
    imageUrl: "/dahlia.jpeg",
    altText: "close-up image of a pink-orange Dahlia",

    spring_summer: "Y",
    fall_winter: "N",

    warm_vibrant: "Y",
    soft_pastel: "N",

    sale: "N",
  },
  {
    title: "Iris",
    description:
      "A unique flower with elegant, sword-like petals and a variety of colors.",
    price: 8.5,
    imageUrl: "/iris.jpeg",
    altText: "close-up image of a purple iris flower",

    spring_summer: "Y",
    fall_winter: "Y",

    warm_vibrant: "Y",
    soft_pastel: "Y",

    sale: "N",
  },
  {
    title: "Gardenia",
    description:
      "A fragrant white flower often used in perfumes and symbolic of purity.",
    price: 12.0,
    imageUrl: "/gardenia.jpeg",
    altText: "close-up image of a white gardenia flower",

    spring_summer: "Y",
    fall_winter: "N",

    warm_vibrant: "N",
    soft_pastel: "Y",

    sale: "N",
  },
  {
    title: "Carnation",
    description:
      "A popular flower with ruffled petals available in many colors.",
    price: 6.99,
    imageUrl: "/carnation.png",
    altText: "close-up of magenta, pink, yellow, and white carnation flowers",

    spring_summer: "N",
    fall_winter: "Y",

    warm_vibrant: "Y",
    soft_pastel: "N",

    sale: "N",
  },
  {
    title: "Cherry Blossom",
    description:
      "A delicate, pink flower that blooms on cherry trees, symbolizing spring.",
    price: 15.0,
    imageUrl: "/blossom.jpeg",
    altText: "close up image of cherry blossom",

    spring_summer: "Y",
    fall_winter: "N",

    warm_vibrant: "N",
    soft_pastel: "Y",

    sale: "Y",
  },

  {
    title: "Chrysanthemum",
    description:
      "A vibrant flower with a rich history, symbolizing joy and positivity, available in a variety of colors.",
    price: 10.5,
    imageUrl: "/chrysanthemum.jpeg",
    altText: "close up image of a yellow and pink chrysanthemum",

    spring_summer: "N",
    fall_winter: "Y",

    warm_vibrant: "Y",
    soft_pastel: "N",

    sale: "N",
  },
];

export { flowers };

/* 
Spring/Summer Flowers: Tulip, Lily, Peony, Rose, Daisy, Lavender, Hydrangea, Dahlia

Fall/Winter Flowers: Sunflower, Orchid, Carnation, Marigold, Chrysanthemum 



Warm & Vibrant Colors: Rose, Tulip, Sunflower, Orchid, Marigold, Dahlia

Soft & Pastel Colors: Peony, Cherry Blossom, Gardenia, Lavender, Hydrangea 

Sale Deal: Lily, Orchid, Hydrangea, Peony, Cherry Blossom, Lavender
*/
