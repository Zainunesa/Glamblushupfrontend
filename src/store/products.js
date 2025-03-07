export const products = [
  // Women's Products (IDs 1-10)
  { id: 1, name: "Luxury Lipstick Set", price: 250.00, sale: true, salePrice: 200.00, image: require("@/assets/wlipstickset.png"), category: "womens", reviews: { rating: 4, count: 10 }, description: "A premium collection of long-lasting, highly pigmented lipsticks in a variety of shades to suit every occasion." },
  { id: 2, name: "Pro Eyeshadow Palette", price: 300.00, sale: false, image: require("@/assets/eyeshadow2.jpg"), category: "womens", reviews: { rating: 4, count: 5 }, description: "A professional eyeshadow palette with 20 highly blendable shades, perfect for both natural and dramatic looks." },
  { id: 3, name: "Matte Foundation Kit", price: 350.00, sale: false, image: require("@/assets/wfoundation.png"), category: "womens", reviews: { rating: 4, count: 7 }, description: "A full-coverage foundation kit with a smooth matte finish, designed to last all day without creasing or fading." },
  { id: 4, name: "Blush & Highlighter Duo", price: 200.00, sale: true, salePrice: 180.00, image: require("@/assets/wblushandhighlighter.webp"), category: "womens", reviews: { rating: 5, count: 2 }, description: "A beautiful blush and highlighter duo that adds a natural glow and flush of color to your complexion." },
  { id: 5, name: "Waterproof Mascara", price: 180.00, sale: false, image: require("@/assets/wmascara.png"), category: "womens", reviews: { rating: 3, count: 1 }, description: "A smudge-proof, long-lasting waterproof mascara that volumizes and lengthens your lashes effortlessly." },
  { id: 6, name: "Velvet Matte Lipstick", price: 220.00, sale: true, salePrice: 180.00, image: require("@/assets/wredlipstick.jpg"), category: "womens", reviews: { rating: 4, count: 8 }, description: "A luxurious matte lipstick with a velvety texture, offering rich color payoff and all-day comfort." },
  { id: 7, name: "Glow Foundation", price: 280.00, sale: false, image: require("@/assets/wglow.webp"), category: "womens", reviews: { rating: 5, count: 10 }, description: "A lightweight, dewy foundation that enhances your natural glow while providing flawless coverage." },
  { id: 8, name: "Setting Spray", price: 190.00, sale: false, image: require("@/assets/wsettingspray.jpg"), category: "womens", reviews: { rating: 4, count: 6 }, description: "A refreshing setting spray that locks in your makeup for up to 12 hours without feeling heavy." },
  { id: 9, name: "Brow Pomade", price: 260.00, sale: false, image: require("@/assets/wbrowpomade.png"), category: "womens", reviews: { rating: 4, count: 6 }, description: "A waterproof, smudge-proof brow pomade for sculpting, defining, and filling in your eyebrows with ease." },
  { id: 10, name: "Flawless Contour Kit", price: 320.00, sale: true, salePrice: 270.00, image: require("@/assets/wcontour.jpg"), category: "womens", reviews: { rating: 5, count: 4 }, description: "A versatile contour kit with a blend of bronzers and highlighters to sculpt and define your features." },

  // Men's Products (IDs 11-20)
  { id: 11, name: "Men's Tinted Moisturizer", price: 150.00, sale: false, image: require("@/assets/mtinted.webp"), category: "mens", reviews: { rating: 4, count: 5 }, description: "A lightweight tinted moisturizer that hydrates and evens out skin tone for a natural look." },
  { id: 12, name: "BB Cream for Men", price: 120.00, sale: true, salePrice: 100.00, image: require("@/assets/mcream.jpg"), category: "mens", reviews: { rating: 4, count: 3 }, description: "A multi-functional BB cream that provides light coverage while nourishing and protecting the skin." },
  { id: 13, name: "Men's Eyebrow Gel", price: 80.00, sale: false, image: require("@/assets/meyebrowgel.webp"), category: "mens", reviews: { rating: 4, count: 9 }, description: "A clear or tinted eyebrow gel that shapes and holds brows in place for a polished appearance." },
  { id: 14, name: "Men's Under-Eye Concealer", price: 200.00, sale: false, image: require("@/assets/mundereye.jpg"), category: "mens", reviews: { rating: 4, count: 7 }, description: "A lightweight under-eye concealer that instantly reduces dark circles and signs of fatigue." },
  { id: 15, name: "Oil-Free Foundation", price: 300.00, sale: false, image: require("@/assets/moilfoundation.jpg"), category: "mens", reviews: { rating: 5, count: 10 }, description: "A breathable, oil-free foundation that provides a matte finish and long-lasting coverage." },
  { id: 16, name: "Men’s Setting Powder", price: 60.00, sale: false, image: require("@/assets/mpowder.avif"), category: "mens", reviews: { rating: 4, count: 12 }, description: "A lightweight setting powder that controls shine and sets makeup in place for all-day wear." },
  { id: 17, name: "Natural Finish Concealer", price: 90.00, sale: true, salePrice: 70.00, image: require("@/assets/mconcealer.jpg"), category: "mens", reviews: { rating: 3, count: 6 }, description: "A natural-finish concealer that covers imperfections while blending seamlessly into the skin." },
  { id: 18, name: "Men's Lip Balm with Tint", price: 250.00, sale: false, image: require("@/assets/mlipbalm.jpg"), category: "mens", reviews: { rating: 5, count: 4 }, description: "A hydrating lip balm with a subtle tint, keeping lips soft and nourished throughout the day." },
  { id: 19, name: "Men's Neutral Eyeshadow", price: 110.00, sale: false, image: require("@/assets/mshadow.avif"), category: "mens", reviews: { rating: 3, count: 8 }, description: "A neutral-toned eyeshadow palette designed for subtle enhancement and definition." },
  { id: 20, name: "Beard and Brow Pencil", price: 140.00, sale: true, salePrice: 120.00, image: require("@/assets/meyebrowpencil.webp"), category: "mens", reviews: { rating: 4, count: 9 }, description: "A dual-purpose pencil to define and fill in both beards and brows for a fuller look." },

  // Kids' Products (IDs 21-30)
  { id: 21, name: "Colorful Lip Gloss", price: 50.00, sale: false, image: require("@/assets/klipglosspack.webp"), category: "kids", reviews: { rating: 4, count: 12 }, description: "A fun and colorful lip gloss that provides a shiny finish with a sweet flavor." },
  { id: 22, name: "Shimmer Blush", price: 45.00, sale: false, image: require("@/assets/kblush.png"), category: "kids", reviews: { rating: 5, count: 8 }, description: "A gentle shimmer blush for a light, playful flush of color on young cheeks." },
  { id: 23, name: "Magic Eyeshadow Crayons", price: 60.00, sale: false, image: require("@/assets/kmagiccrayons.png"), category: "kids", reviews: { rating: 4, count: 10 }, description: "Vibrant and safe eyeshadow crayons that are easy to apply and remove for kids." },
  { id: 24, name: "Peachy Lip Balm", price: 30.00, sale: true, salePrice: 25.00, image: require("@/assets/klipbalm.jpeg"), category: "kids", reviews: { rating: 5, count: 6 }, description: "A moisturizing lip balm with a fruity peach scent that kids love." },
  { id: 25, name: "Sweet Sparkle Nail Polish", price: 40.00, sale: false, image: require("@/assets/knailpolish.png"), category: "kids", reviews: { rating: 4, count: 7 }, description: "A kid-friendly nail polish with sparkle for a fun, festive look." },
  { id: 26, name: "Butterfly Face Glitter", price: 35.00, sale: false, image: require("@/assets/kglitter.webp"), category: "kids", reviews: { rating: 4, count: 5 }, description: "Fun, safe glitter to add a touch of sparkle to your face for special occasions." },
  { id: 27, name: "Rainbow Cheek Stick", price: 50.00, sale: false, image: require("@/assets/krainbow.jpg"), category: "kids", reviews: { rating: 5, count: 9 }, description: "A multicolored cheek stick for a playful, light tint on cheeks." },
  { id: 28, name: "Starry Nail Decals", price: 25.00, sale: false, image: require("@/assets/knails.avif"), category: "kids", reviews: { rating: 4, count: 4 }, description: "Fun star-shaped nail decals for a cool, personalized touch on nails." },
  { id: 29, name: "Unicorn Lip Gloss Set", price: 55.00, sale: true, salePrice: 45.00, image: require("@/assets/klipgloss.png"), category: "kids", reviews: { rating: 5, count: 10 }, description: "A set of sparkling lip glosses with fun unicorn-themed packaging." },
  { id: 30, name: "Glitter Face Stickers", price: 40.00, sale: false, image: require("@/assets/kstickers.avif"), category: "kids", reviews: { rating: 4, count: 3 }, description: "Cute glitter stickers for decorating faces with playful designs." },
];



// To fetch data from the API instead of hard coding it 
// export const fetchProducts = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/products");
//     const products = await response.json();

//     return products.map(p => ({
//       id: p.id,
//       name: p.name,
//       price: p.price,
//       sale: p.sale,
//       salePrice: p.sale_price,
//       image: require(`@/assets/${p.image}`),
//       category: p.category,
//       reviews: { rating: p.rating, count: p.review_count },
//       description: p.description
//     }));
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// };
