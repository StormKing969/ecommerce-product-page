import ShoeImg01 from './shoeProduct/productImage/image-product-1.jpg'
import ShoeImg02 from './shoeProduct/productImage/image-product-2.jpg'
import ShoeImg03 from './shoeProduct/productImage/image-product-3.jpg'
import ShoeImg04 from './shoeProduct/productImage/image-product-4.jpg'
import ShoeThumbnail01 from './shoeProduct/productThumbnail/image-product-1-thumbnail.jpg'
import ShoeThumbnail02 from './shoeProduct/productThumbnail/image-product-2-thumbnail.jpg'
import ShoeThumbnail03 from './shoeProduct/productThumbnail/image-product-3-thumbnail.jpg'
import ShoeThumbnail04 from './shoeProduct/productThumbnail/image-product-4-thumbnail.jpg'

const data = [
  {
      id: 1,
      type: "shoe",
      company: "SNEAKER COMPANY",
      title: "Fall Limited Edition Sneakers",
      images: [
          ShoeImg01,
          ShoeImg02,
          ShoeImg03,
          ShoeImg04
      ],
      thumbnail: [
        ShoeThumbnail01,
        ShoeThumbnail02,
        ShoeThumbnail03,
        ShoeThumbnail04
      ],
      description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer",
      price: {
          original: 250,
          newPrice: 125,
          discount: 50
      }
  },
  {
      id: 2,
      type: "oil"
  }
];

export default data;