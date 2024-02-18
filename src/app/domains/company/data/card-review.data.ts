import { CardReview } from "../interfaces/card-review.interface";

export const reviews: CardReview[] = [
  {
    stars: 5,
    user: {
      name: 'Hernán D.',
      place: 'Callao, Lima',
      avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png',
      comment: 'Estoy conforme con el servicio brindado. Contraté empleada doméstica por hora y realizó la tarea con eficacia y honestidad. Tanto la parte de limpieza como de planchado de ropa quedó muy bien. La contraté para otro trabajo.'
    }
  },
  {
    stars: 5,
    user: {
      name: 'Karina R.',
      place: 'San Isidro, Lima',
      avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png',
      comment: 'Excelente trabajo. Muy profesional y serio. Totalmente confiable. Quedé muy conforme, cobró barato, usó buenos materiales y fué limpio y ordenado. Además es plomero y electricista. Yo lo recomiendo.'
    }
  },
  {
    stars: 5,
    user: {
      name: 'Susana M.',
      place: 'Huamanga, Ayacucho',
      avatar: 'https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png',
      comment: 'Natalia fue muy rápida en la ejecución de las tareas, sumamente responsable, callada, detallista y cumplió con lo asignado de manera brillante. Gracias por todo! Utilizaré los servicios nuevamente.'
    }
  },
]
