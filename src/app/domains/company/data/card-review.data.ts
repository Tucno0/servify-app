import { CardReview } from "../interfaces/card-review.interface";

export const reviews: CardReview[] = [
  {
    stars: 5,
    user: {
      name: 'Leslie Alexander',
      profession: 'Freelance React Developer',
      avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png',
      comment: 'You made it so simple. My new site is so much faster and easier to work with than my old site.'
    }
  },
  {
    stars: 5,
    user: {
      name: 'Jacob Jones',
      profession: 'Digital Marketer',
      avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png',
      comment: 'Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.'
    }
  },
  {
    stars: 5,
    user: {
      name: 'Jenny Wilson',
      profession: 'Graphic Designer',
      avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png',
      comment: 'I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.'
    }
  },
]
