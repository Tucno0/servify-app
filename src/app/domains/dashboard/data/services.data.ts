import { Service } from "@dashboard/interfaces/service.interface";

const tareasDestacadas = [
  {
    id: crypto.randomUUID(),
    name: 'Montaje de muebles',
    description: "¿Tienes que armar un nuevo escritorio o librería? Los taskers pueden montar cualquiera de tus muebles de forma rápida y eficiente.",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448512/fygl4k4kujomneisofae.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de TV',
    description: "Los taskers pueden montar correctamente su televisor en la pared y dejarlo felizmente haciendo clic en el control remoto.",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448636/dwr5db1lu0jzugihonrq.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Reparaciones en el hogar',
    description: "Los gatos (y Jills) de todos los oficios pueden encargarse de la mayoría de las reparaciones menores de su hogar.",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1553040641/qsctdbs3smwibuvk93n6.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Ayuda para mudarse',
    description: "¿Necesita que se lleven algo o ayuda en su casa como parte de una mudanza? Nuestros taskers están aquí para ayudarte.",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595453855/dscyshhel4nuwah847ji.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Levantamiento de cargas pesadas',
    description: "Obtenga ayuda para levantar objetos pesados sin sacrificar su espalda. Desde sofás hasta camas y cómodas, los taskers pueden proporcionar servicios de levantamiento de objetos pesados.",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448566/e2tzbrtpfnictktixnzl.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza del hogar',
    description: "Podemos ocuparnos de toda su casa y dejar su espacio relucientemente limpio.",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428350682/m4fuputgle72sdev7j8e.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza de primavera',
    description: "El polen, el pelo de gato y los conejitos de polvo, Dios mío. Conseguiremos que su hogar quede limpio y libre de alérgenos en poco tiempo.",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1456448627/yzdt4pmy5llhrowf6ibq.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Asistente personal',
    description: "Los taskers organizados y eficientes pueden ser tu par de manos extra, manejando cualquier tarea. ¡Contrata a un asistente personal hoy mismo!",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1429633088/lyydp8culnzq06hyr74t.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Colgar cuadros',
    description: "¿Necesitas ayuda para colgar todos esos cuadros? Los taskers colgarán cuadros y obras de arte, asegurándose de que estén nivelados y montados de forma segura.",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448653/obbxeoij8p0a80p1pfjl.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de trabajo de jardinería',
    description: "Podemos limpiar su jardín y eliminar cualquier desperdicio o basura del jardín.",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448794/gweisgd5bxoafin5euse.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Espera en la fila',
    description: "¡Contrata a un tasker para que sea un profesional de la fila! Pueden esperar en la fila para cualquier evento en el que necesite ayuda, incluso las compras del Black Friday.",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1574201893/e09t31eccesh94hizo6y.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de Organización de Closets',
    description: "Permítanos ayudarlo a limpiar su armario y organizar las cosas.",
    category: {
      name: 'Tareas destacadas',
    },
    price: 99.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428351045/wxgm1qq6n0eo7tr4kwud.jpg",
  },
]

const encargadoMantenimiento = [
  {
    id: crypto.randomUUID(),
    name: 'Reparaciones en el hogar',
    description: "Los gatos (y Jills) de todos los oficios pueden encargarse de la mayoría de las reparaciones menores de su hogar.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1553040641/qsctdbs3smwibuvk93n6.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de muebles',
    description: "¿Tienes que armar un nuevo escritorio o librería? Los taskers pueden montar cualquiera de tus muebles de forma rápida y eficiente.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448512/fygl4k4kujomneisofae.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de TV',
    description: "Los taskers pueden montar correctamente su televisor en la pared y dejarlo felizmente haciendo clic en el control remoto.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448636/dwr5db1lu0jzugihonrq.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Instalación de ventiladores de techo',
    description: "Los taskers pueden instalar, reemplazar, reparar y quitar ventiladores de techo, ¡en cualquier lugar de su hogar!",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1612822159/wtddc96h0sxwptehfhlh.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Instalación de Smart Home',
    description: "Contrata a un tasker para llevar tu hogar al siglo XXI con servicios de instalación de hogares inteligentes.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1576025514/t4a9f8gmukbwhevmmpch.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Levantamiento de cargas pesadas',
    description: "Obtenga ayuda para levantar objetos pesados sin sacrificar su espalda. Desde sofás hasta camas y cómodas, los taskers pueden proporcionar servicios de levantamiento de objetos pesados.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448566/e2tzbrtpfnictktixnzl.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Instalar aire acondicionado',
    description: "Contrata a un tasker para que te ayude a instalar o quitar los aires acondicionados de las ventanas.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1432312714/ytywrtamqit7n3zsaaaf.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Pintura',
    description: "Ya sea una casa entera, una habitación o una pared, los taskers pueden pintarla a tu entera satisfacción.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448734/nnbp4eyekiguqplcer5c.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Plomería',
    description: "Los taskers experimentados resolverán sus problemas de plomería.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448742/w4v7afz1dqjtrk5jdj9s.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje en estante',
    description: "¿Necesita montar o instalar estantes a mano? Contrata a un tasker con experiencia en el montaje de estanterías en la pared. ¡Servicio disponible el mismo día!",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1591831617/bnvvxo5vm3awbroqi1ub.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Mantenimiento del hogar',
    description: "¡Contrata a un tasker para todas las tareas de mantenimiento de tu hogar!",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1591824219/gqdjkhhdfer3sx32t956.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Colgar cortinas e instalar persianas',
    description: "Utilice TaskRabbit para instalar sus cortinas, barras de cortina, persianas y cortinas.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1615579014/r6sphg3gsytc1le4cera.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de reparación de paneles de yeso',
    description: "¿Tiene un agujero en la pared o en el techo? ¡Los taskers repararán sus paneles de yeso por usted!",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1622232047/phstxhdivb7rylwumzef.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'A prueba de bebés',
    description: "¡Contrata a un tasker hoy mismo para que te ayude a preparar tu hogar para bebés!",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1588012413/lo31a5eyunq4tmvvnevb.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de trabajo de jardinería',
    description: "Podemos limpiar su jardín y eliminar cualquier desperdicio o basura del jardín.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448794/gweisgd5bxoafin5euse.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Instalación de luz',
    description: "Desde la sustitución de bombillas hasta la instalación de lámparas, los taskers capaces pueden arrojar algo de luz sobre tu espacio.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428351003/uy1w2lbdpm8www8i7teb.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Ayuda eléctrica',
    description: "Los taskers pueden ayudarte con el trabajo eléctrico. Reservas disponibles para el mismo día.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595509582/bwyeylcp1k7tyn1iqmkj.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de carpintería',
    description: "¿Necesitas construir algo? Los taskers cualificados pueden ayudar con los trabajos de carpintería y construcción.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1429631417/wz4eruticl3gpmbhbopo.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Colgar cuadros',
    description: "¿Necesitas ayuda para colgar todos esos cuadros? Los taskers colgarán cuadros y obras de arte, asegurándose de que estén nivelados y montados de forma segura.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448653/obbxeoij8p0a80p1pfjl.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje general',
    description: "Desde televisores hasta estanterías, obras de arte y luces, los taskers se asegurarán de que estén correctamente montados y colgados.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1570226372/jy7jwv1zwpgnkz4svmu2.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Instalación del gabinete',
    description: "La instalación del gabinete puede ser estresante, así que déjalo en manos de un tasker. Completarán el trabajo a su entera satisfacción",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595549429/ua4nqfaczm2fut56piuc.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de empapelado',
    description: "Contrata a un tasker para que instale o quite el papel tapiz de cualquier habitación de tu casa.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1607470556/r9kb8ltxumzsesy9lmmt.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de Instalación y Reparación de Cercas',
    description: "¿Poste de cerca roto? ¿Enredaderas crecidas? ¿Necesita una valla nueva? Los taskers pueden ayudar.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1612825172/zht7ti0rlm3kvqrewawi.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de restauración de cubiertas',
    description: "Haz lo que necesites para tu mazo. Contrata a un tasker para los servicios de sellado, teñido, reparación y restauración general de cubiertas.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1612824422/wiqplmudkrx0rhdkkq4a.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Instalación de timbre',
    description: "Nuestros taskers instalarán timbres nuevos o reemplazarán los viejos por ti, lo que hará que tu lista de tareas sea mucho más fácil.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1622647010/srzaiylqctaxqta5yspc.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Instalación de cine en casa',
    description: "Configura tu sistema de cine en casa, incluido el sonido envolvente y los televisores, con nuestros taskers.",
    category: {
      name: 'Encargado de mantenimiento',
    },
    price: 59.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1622237502/idm8b6umzjz02pvlz4iq.jpg",
  },
]

const serviciosDeMudanza = [
  {
    id: crypto.randomUUID(),
    name: 'Ayuda para mudarse',
    description: "¿Necesita que se lleven algo o ayuda en su casa como parte de una mudanza? Nuestros taskers están aquí para ayudarte.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595453855/dscyshhel4nuwah847ji.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de embalaje y ayuda',
    description: "¡Encuentre servicios de embalaje cerca de usted y prepárese para una mudanza sin estrés! Contrata a un tasker para que te ayude a hacer las maletas y a moverte en un abrir y cerrar de ojos.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1561074498/c2piqzzpjicgwypwm5nn.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de desembalaje',
    description: "¿Todavía hay cajas apiladas en un rincón? Organízate y acomódate rápidamente después de tu mudanza con los servicios de desembalaje de los taskers locales.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1561074655/bk2cguwwwo2ztrzqwhtk.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Levantamiento de cargas pesadas',
    description: "Obtenga ayuda para levantar objetos pesados sin sacrificar su espalda. Desde sofás hasta camas y cómodas, los taskers pueden proporcionar servicios de levantamiento de objetos pesados.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448566/e2tzbrtpfnictktixnzl.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Empresas de mudanzas locales',
    description: "¿Busca una empresa de mudanzas local con un camión? Contrata a un tasker para tu mudanza de corta distancia y elimina el estrés de la mudanza.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1623883625/oqlwat7mg7u4r92jvttq.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Recogida de chatarra',
    description: "¿Tu casa está llena de muebles viejos y trastos de los que quieres deshacerte? Contrata a un tasker para que lo retire y lo lleve al vertedero.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1607541564/na0mz812n9aigjluned9.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Mudanzas de muebles',
    description: "Desde sofás y camas hasta cómodas y armarios, los taskers pueden echarte una mano. Obtenga ayuda de los transportistas de muebles locales para levantar y mover cualquier artículo.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1561072043/cvhxr2kkykdzwjsjxjla.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Mudanzas de un artículo',
    description: "¿Necesitas ayuda para mover un solo mueble? No tienes que hacerlo solo. ¡Los taskers que mueven un solo elemento pueden ayudar a mover un sofá o una habitación entera!",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1561074207/j6a5zuxhhda6j5bah1a6.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Mudanza de la unidad de almacenamiento',
    description: "¡Simplifique su mudanza dentro o fuera del almacenamiento con el servicio de mudanza y almacenamiento de TaskRabbit!",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1622237255/if0golglu7e4nzjefyqh.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Retiro del sofá',
    description: "Fuera lo viejo y adentro lo nuevo. Haz que un tasker se encargue de retirar y desechar el sofá. Lo transportaremos de manera segura a la acera, a la caridad o al vertedero.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1561073553/sqjqncdjdoealdi1cnsx.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Recogida y retirada de colchones',
    description: "¿Necesitas deshacerte de un colchón viejo? Deja el trabajo pesado en manos de un tasker. Lo retiraremos, desecharemos, donaremos o reciclaremos para que puedas disfrutar de tu nuevo.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1550013131/u2ljesck2hyjeizti5mp.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Mudanza de muebles',
    description: "Contrata algunos músculos para ayudarte a retirar los muebles de tu casa.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1608765695/aysurklwqrgsblzv8yg7.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Transportadores de mesas de billar',
    description: "¡Los taskers locales te ayudarán a mover y configurar tu mesa de billar!",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1622236609/cjjp40f46sfi7ezoozc4.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Extracción de electrodomésticos',
    description: "Desconecte su lavavajillas, lavadora, secadora o refrigerador y retírelo nuestros taskers, dando paso a sus reemplazos.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1622647832/ghlly2u6feplhmv2wz7i.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Mudanza de muebles pesados',
    description: "Obtén ayuda para mover muebles pesados sin sacrificar tu espalda. Desde sofás hasta camas, los taskers pueden mover muebles pesados con facilidad.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1562180311/bm1xvgvutpefxyoilorz.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Reorganizar los muebles',
    description: "Ya sea que necesites mover muebles entre habitaciones o reorganizar el diseño de tu dormitorio, deja que un tasker transforme tu espacio.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448575/bmtfg9hxdq6kurvwgm7v.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio completo de ayuda para mudanzas',
    description: "Siente la alegría de una mudanza por la que apenas tienes que moverte. Desde empacar hasta mudarse y desempacar, los taskers de servicio completo pueden ayudarlo en cada paso de su mudanza.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1561073928/lp9fwulnqbkhn2rmuiig.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Mudanzas de muebles para el hogar',
    description: "Incluso si no se está mudando de casa, aún puede ayudar con la mudanza dentro del hogar. Los taskers pueden mover los muebles arriba, abajo o en cualquier lugar dentro de su casa.",
    category: {
      name: 'Servicios de mudanza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1562181095/bs3jwuzzevcsmz7f9fuu.jpg",
  },
]

const Montajedemuebles = [
  {
    id: crypto.randomUUID(),
    name: 'Montaje de muebles',
    description: "¿Tienes que armar un nuevo escritorio o librería? Los taskers pueden montar cualquiera de tus muebles de forma rápida y eficiente.",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448512/fygl4k4kujomneisofae.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de muebles de patio',
    description: "Contrata a un tasker para que monte tus muebles de patio al aire libre. Montarán todo e incluso se llevarán los muebles viejos.",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1621913393/yhfnwnv4ywgfrelmuwxj.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de escritorio',
    description: "¿Trabajas desde casa y necesitas un escritorio montado? Contrata a un tasker para que arme tu escritorio.",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595465309/wll7emaxb0vvuktsnpml.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de la cómoda',
    description: "¡Los taskers se especializan en el montaje de cómodas! Ninguna cómoda es demasiado grande o demasiado pequeña para que los taskers la armen.",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595465220/ifoacyypuu1pafnjmqkf.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de la cama',
    description: "Contrata a un tasker para armar tu cama. Desde literas hasta camas de trineo, ¡los taskers pueden montarlo todo! Disponible el mismo día.",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595463772/xbjdqfsh7wk8fzsvxcwr.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de estantería',
    description: "Entrégale las instrucciones a un tasker, él montará tu estantería mientras te relajas leyendo tu libro.",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595549132/yuxk6sc90nycwnkh0ewr.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje del sofá',
    description: "¡Los taskers pueden montar casi cualquier sofá o sofá! Ellos armarán tu sofá a tu entera satisfacción.",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595464208/hncwry8dmisdcr0ohxgc.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de la Silla',
    description: "Los taskers pueden ensamblar correctamente su silla, lo que le permite finalmente levantarse. Disponible el mismo día.",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595554741/yg2liw6sfatq9ax6aixf.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de armario',
    description: "El montaje del armario puede ser complejo y llevar mucho tiempo. Deja que un tasker complete el proyecto a tu entera satisfacción.",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595554916/pngd8skczfsmu2vjp6ak.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de la mesa',
    description: "¿Necesita servicios de montaje de mesas? Los taskers pueden montar una mesa en un abrir y cerrar de ojos y ahorrarte la molestia.",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1595465421/kcmkm9k4hbeg3rqcthyo.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Desmontar muebles',
    description: "Si necesitas ayuda para desmontar muebles, ¡Tasker puede ayudarte!",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448521/zgxyiicd1pjn1gjyfnbd.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje IKEA MALM',
    description: "¿Necesitas a alguien que monte tus muebles IKEA MALM? ¡Los taskers están listos para armar tu nuevo juego de cama MALM!",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1602277213/frwxh1hjqlkscgoeijbo.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje Kallax de IKEA',
    description: "¿Necesitas que alguien monte tu estantería Kallax de IKEA? ¡Contrata a un tasker! Lo armarán en un abrir y cerrar de ojos.",
    category: {
      name: 'Montaje de muebles',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1602275964/kdpznoez4kavj08t93uq.jpg",
  },
]

const Montajeeinstalacion = [
  {
    id: crypto.randomUUID(),
    name: 'Montaje de TV',
    description: "Los taskers pueden montar correctamente su televisor en la pared y dejarlo felizmente haciendo clic en el control remoto.",
    category: {
      name: "Montaje e instalación",
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448636/dwr5db1lu0jzugihonrq.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje en estante',
    description: "¿Necesita montar o instalar estantes a mano? Contrata a un tasker con experiencia en el montaje de estanterías en la pared. ¡Servicio disponible el mismo día!",
    category: {
      name: "Montaje e instalación",
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1591831617/bnvvxo5vm3awbroqi1ub.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Instalación de ventiladores de techo',
    description: "Los taskers pueden instalar, reemplazar, reparar y quitar ventiladores de techo, ¡en cualquier lugar de su hogar!",
    category: {
      name: "Montaje e instalación",
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1612822159/wtddc96h0sxwptehfhlh.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Colgar cortinas e instalar persianas',
    description: "Utilice TaskRabbit para instalar sus cortinas, barras de cortina, persianas y cortinas.",
    category: {
      name: "Montaje e instalación",
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1615579014/r6sphg3gsytc1le4cera.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Colgar cuadros',
    description: "¿Necesitas ayuda para colgar todos esos cuadros? Los taskers colgarán cuadros y obras de arte, asegurándose de que estén nivelados y montados de forma segura.",
    category: {
      name: "Montaje e instalación",
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448653/obbxeoij8p0a80p1pfjl.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje general',
    description: "Desde televisores hasta estanterías, obras de arte y luces, los taskers se asegurarán de que estén correctamente montados y colgados.",
    category: {
      name: "Montaje e instalación",
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1570226372/jy7jwv1zwpgnkz4svmu2.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Colgar luces navideñas',
    description: "¿Necesitas a alguien que cuelgue las luces de Navidad? Siéntate y relájate mientras tu tasker ilumina tu casa.",
    category: {
      name: "Montaje e instalación",
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1603939964/xrgof9ly1exhcoxiolje.jpg",
  },

]

const Limpieza = [
  {
    id: crypto.randomUUID(),
    name: 'Servicios de limpieza de la casa',
    description: "¿Buscas servicios de limpieza del hogar? Permítanos ayudarle. No importa la tarea, los limpiadores locales pueden manejar todas sus necesidades de limpieza residencial y del hogar.",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1565734996/qbxhtkpsasinn32iq2rm.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza profunda',
    description: "¿Tienes un espacio que necesita atención adicional para que brille? Los taskers aplicarán un poco de esfuerzo al trabajo.",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428350781/zir5xlze7az6ebjjlwua.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de desinfección',
    description: "¿Necesita que alguien desinfecte su hogar u oficina? Contrata a un tasker para que se encargue de tus necesidades de servicio de desinfección.",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1588967277/dmzs7igh2suvoz4p3nbf.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza de mudanzas',
    description: "¿Estás a punto de mudarte a una nueva casa? Haz realidad el hogar, dulce hogar, con el servicio de limpieza previo a la mudanza de un tasker experimentado.",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1565734018/n4vsmjmglguz5q56cs82.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza de mudanzas',
    description: "No puedes salir de tu casa sin limpiar primero. Ahórrese un dolor de cabeza y haga que un tasker de confianza le brinde servicios de limpieza al final del arrendamiento.",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1565733866/muyrove7knocpa46lvbd.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza de Alquileres Vacacionales',
    description: "Los inquilinos de Airbnb pueden dejar un desastre a veces. Para todas tus necesidades de servicio de limpieza de alquileres vacacionales, tu tasker puede encargarse de ello.",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1565734842/ohiw6raesvu9gkmb5jxt.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de limpieza de alfombras',
    description: "¡Obtén ayuda con esas manchas difíciles en tus alfombras y moquetas!",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1621367201/ym9wnmsq4ki9qb6fudpg.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza de garajes',
    description: "¿Garaje desordenado y sucio? Los taskers pueden limpiarlo y dejarlo perfectamente organizado.",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1624663092/kvswxb5e9tbhuzb99qxn.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de limpieza de una sola vez',
    description: "¿No tienes tiempo para limpiar la casa? Descansa tranquilo y deja que un tasker te ayude. Haga que su hogar se vea impecable con una limpieza eficiente de una sola vez y servicio de limpieza.",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1565734605/kskvnilcw8aeynpqs0tw.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Lavado de autos',
    description: "¡Contrata a un tasker para que tu coche luzca como nuevo!",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1588014354/qgaboa5wsb7nn81b8hpn.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Ayuda para lavar la ropa',
    description: "¿El cesto de la ropa sucia se desborda? Los taskers pueden lavar, secar, doblar, planchar e incluso recoger la limpieza en seco.",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428350936/qslyknb6pfcxjsbgu5uh.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Lavado a presión',
    description: "Contrata a un tasker para que te ayude a lavar a presión el exterior de tu casa, la entrada de tu casa y mucho más.",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1588016058/ypfho0jhbj87nbvlfw7n.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza de primavera',
    description: "Polen, pelo de gato y conejitos de polvo, Dios mío. Conseguiremos que su hogar quede limpio y libre de alérgenos en poco tiempo.",
    category: {
      name: 'Limpieza',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1456448627/yzdt4pmy5llhrowf6ibq.jpg",
  },
]

const ComprasEntrega = [
  {
    id: crypto.randomUUID(),
    name: 'Servicio de entrega',
    description: "¿Necesitas que te entreguen algo al otro lado de la ciudad? Los taskers transportarán de forma segura cualquier cosa, desde sofás hasta documentos y comida para llevar.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448401/ejnopzyqmyuhbsefx8kz.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Compras de comestibles y entrega a domicilio',
    description: "Danos tu lista de la compra y abasteceremos tu despensa con los alimentos que necesitas para la semana.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448751/jdz3qnucbtavshrwoyzh.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Hacer tus mandados',
    description: "¿Tienes una larga lista de tareas pendientes? Deja que los taskers recojan tu tintorería, lleven los paquetes a la oficina de correos, recojan las recetas o hagan tus compras.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448438/nwojcn8hxzfudorh19wa.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrega de árboles de Navidad',
    description: "¡Recibe un árbol de Navidad real directamente en tu sala de estar! Entrega de árboles de Navidad el mismo día disponible.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1605902094/n3cozx2zrxfho3zhsq7z.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Espera en la fila',
    description: "¡Contrata a un tasker para que sea un profesional de la fila! Pueden esperar en la fila para cualquier evento en el que necesite ayuda, incluso las compras del Black Friday.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1574201893/e09t31eccesh94hizo6y.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrega de muebles grandes',
    description: "¿Necesitas un sofá al otro lado de la ciudad? ¿Vas a recoger un colchón de un amigo? Podemos entregar muebles de gran tamaño.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428350976/uednlojbgsrmjlqmaghh.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrega de donaciones',
    description: "Retribuye mientras ordenas. Cuando reservas un tasker para llevar donaciones a organizaciones benéficas, damos una parte de nuestra tarifa de servicio a organizaciones locales sin fines de lucro a través de TaskRabbit for Good.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1554490040/bp2azf4g3hcdeb6hkxac.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrega sin contacto',
    description: "Envía a un tasker para que recoja y entregue todo lo que necesites. Lo harán de forma rápida y cuidadosa.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1430424230/b2lfkt68avu0zm2i5nkf.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrega de alimentos para mascotas',
    description: "¿Necesitas comida para perros hoy mismo? Contrata a un tasker para que te entregue todos los suministros para mascotas. ¡Entrega el mismo día!",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1586548746/giay3n1vjsgnayzhqrex.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrega de alimentos para bebés',
    description: "¿Necesita que alguien le entregue comida para bebés y niños pequeños directamente en su puerta? Contrata a un tasker para que te entregue el mismo día.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1586549188/abn9scc6hp7zgw1yvwlx.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Artículos devueltos',
    description: "¿Comprar algo que necesites devolver? Ya sea que lo hayas comprado en línea o en la tienda, un tasker puede encargarse de la molestia de devolverlo por ti.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448448/lf4rhv53nppfxgqdnhud.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Espera la entrega',
    description: "Si necesitas que alguien firme un paquete, los taskers pueden esperar a que te lo entreguen.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448777/sr0menf8ygtb5o0nyalc.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Naviero',
    description: "¿No tienes tiempo para llegar a la oficina de correos? Los taskers pueden ayudar a empaquetar, enviar y enviar paquetes de forma rápida y segura.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1558484097/q0h0rhljtxtqdfdeqho0.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Desayuno a domicilio',
    description: "Comience bien el día con un abundante desayuno. Contrata a un tasker para que te entregue el desayuno directamente en la puerta de tu casa.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1586547926/djzojwbldf1zavsxmfc0.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrega de café',
    description: "Disfruta de una taza de café recién hecho sin salir de casa. Los taskers te entregarán el café de la mañana directamente en la puerta de tu casa.",
    category: {
      name: 'Compras + Entrega a domicilio',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1586554082/h3gh2rilxrrdivodjq2u.jpg",
  },
]

const ServiciosdeServify = [
  {
    id: crypto.randomUUID(),
    name: 'Instalación de luz',
    description:"From replacing light bulbs to installing light fixtures, capable Taskers can shed some light on your space." ,
    category: {
      name: 'Servicios de Servify',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428351003/uy1w2lbdpm8www8i7teb.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Mudanza de muebles',
    description:"Hire some muscles to help you remove pieces of furniture from your home." ,
    category: {
      name: 'Servicios de Servify',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1608765695/aysurklwqrgsblzv8yg7.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Instalación de Smart Home',
    description:"Hire a Tasker to take your home into the 21st century with smart home installation services." ,
    category: {
      name: 'Servicios de Servify',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1576025514/t4a9f8gmukbwhevmmpch.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Organización',
    description:"Whatever you need help sorting through Taskers can help tidy your home into organizational heaven." ,
    category: {
      name: 'Servicios de Servify',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1610410647/s56u2qyrxy5pfpujc7w0.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de muebles',
    description:"Have a new desk or bookcase to put together? Taskers can assemble any of your furniture—quickly and efficiently." ,
    category: {
      name: 'Servicios de Servify',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448512/fygl4k4kujomneisofae.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje general',
    description:"From TVs to shelves to artwork to lights, Taskers will make sure it's properly mounted and hung." ,
    category: {
      name: 'Servicios de Servify',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1570226372/jy7jwv1zwpgnkz4svmu2.jpg",
  },
]

const Serviciosdejardineria = [
  {
    id: crypto.randomUUID(),
    name: 'Servicios de jardinería',
    description: "Contrata a un tasker para todas tus necesidades de jardinería. Desde plantas nuevas hasta mantenimiento de jardines, ¡hay un tasker que puede ayudar!",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1621465567/okrtxlssmzu56jzlhmqv.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Eliminación de malezas',
    description: "¿Buscas un servicio de eliminación de malas hierbas? ¡Contrata a un tasker para todas tus necesidades de arranque de malezas para arreglar tu jardín!",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1621469453/hcjblp4ewwf8ntx6nhpt.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de cuidado del césped',
    description: "El césped siempre es más verde cuando se riega y se corta. Deja que los taskers locales cuiden tu césped para que tú no tengas que hacerlo.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1555625897/pqyfshfcjeplxjo5eouy.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de corte de césped',
    description: "Si estás pensando \"¡Necesito que me corten el césped hoy!\", considera contratar a un tasker. Encuentre servicios de corte de césped el mismo día con TaskRabbit.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1625691609/yqintrumetdk6heb2pty.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de paisajismo',
    description: "Mantén tu imagen de paisaje perfecta. Desde el mantenimiento del paisaje hasta el diseño, los taskers harán que tu jardín tenga un aspecto fantástico. Encuentre ayuda ahora.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1555627480/des73ddl92kvurmskp4o.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza de canaletas',
    description: "Limpie las canaletas, los bajantes y el techo e instale protectores de canaletas.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1608766543/wcwqskcjpmkzva6luywp.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de poda de árboles',
    description: "¡Contrata a un tasker para todas tus necesidades de poda de árboles! Los taskers pueden ayudar con todo, desde la tala de árboles hasta la eliminación de tocones.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1621470697/kzz549tozn4e6wlmdi8r.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Riego de plantas de vacaciones',
    description: "¿Te preguntas cómo mantener vivas tus plantas mientras estás fuera? Contrata a un tasker para los servicios de riego de plantas y descansa tranquilo.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1646159948/npchnacmkfobqyqpmdms.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza de patios',
    description: "¿Necesita limpiar su patio? ¡Contrata a un tasker para lavar a presión tu patio, limpiar escombros, limpiar a presión tus muebles de exterior y más!",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1621912175/kgv2om8sz5ildazbqiur.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza de bañeras de hidromasaje',
    description: "Contrata a un tasker para que limpie tu bañera de hidromasaje o spa. ¡Lo tendrán como nuevo y listo para usar en un instante!",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1621912651/rew3lfz4mhbl55t9o1j5.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de Instalación y Reparación de Cercas',
    description: "¿Poste de cerca roto? ¿Enredaderas crecidas? ¿Necesita una valla nueva? Los taskers pueden ayudar." ,
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1612825172/zht7ti0rlm3kvqrewawi.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de restauración de cubiertas',
    description: "Haz lo que necesites para tu mazo. Contrata a un tasker para los servicios de sellado, teñido, reparación y restauración general de cubiertas.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1612824422/wiqplmudkrx0rhdkkq4a.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de muebles de patio',
    description: "Contrata a un tasker para que monte tus muebles de patio al aire libre. Montarán todo e incluso se llevarán los muebles viejos.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1621913393/yhfnwnv4ywgfrelmuwxj.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Tinción de cercas',
    description: "Contrata a un tasker para que tiña tu valla y la deje como nueva. ¡Servicio disponible el mismo día!",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1624662816/imhzs3hdghmf391boq0k.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de acolchado',
    description: "Contrata a un tasker para que coloque mantillo alrededor de los árboles, las plantas o cualquier lugar que desees en tu jardín. Diles dónde colocarlo y tómate ese tiempo para ti.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1624662521/rsa1h0hsvvaweesnqeo5.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de fertilizantes para césped',
    description: "¿Estás buscando a alguien que fertilice tu césped? Contrata a un tasker para que haga el trabajo. ¡Servicio disponible el mismo día!",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1624662286/zbbnqggcbampl8rvdp6z.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de poda de setos',
    description: "Contrata a un tasker para recortar tus setos demasiado crecidos. ¡Servicio disponible el mismo día!",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1624662030/z89pqg9mhluhw5zahgbn.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Configuración de fiestas al aire libre',
    description: "¿Estás planeando un evento al aire libre? ¡Contrata a un tasker para que te ayude a empezar tu fiesta!",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1646167540/elpsxwbpkxg7xi7b7ij6.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de Jardinería Urbana',
    description: "¿Necesitas ayuda con las plantas alrededor de tu apartamento o casa adosada? Los taskers te ayudarán a mantener tus plantas felices y sanas.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1622648213/v832zinngjetce8759b6.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Rastrillado y eliminación de hojas',
    description: "Contrata a un tasker para que elimine las hojas" ,
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1634753782/echtivg1mpochxfbtvsb.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Frutas y verduras de la horticultura',
    description: "¿Interesado en la horticultura en espacios pequeños? Contrata a un tasker para que te ayude a poner en marcha tu huerto de frutas y verduras.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1646174450/b6qtcq2meqgqxy5yf1hv.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Instalación de mangueras',
    description: "¿Necesita instalar un grifo de agua o una manguera en su jardín? ¡Contrata a un tasker para que lo haga por ti!",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1646178841/bg5l2aytsbdve37mzd5e.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Mantenimiento de cobertizos',
    description: "¿Necesita servicios de pintura y mantenimiento de cobertizos? Contrata a un tasker para que te ayude.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1646241385/q8lqr2b7a56j8lfd3vza.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Lavado a presión',
    description: "Contrata a un tasker para que te ayude a lavar a presión el exterior de tu casa, la entrada de tu casa y mucho más.",
    category: {
      name: 'Servicios de jardinería',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1588016058/ypfho0jhbj87nbvlfw7n.jpg",
  },
]

const Vacaciones = [
  {
    id: crypto.randomUUID(),
    name: 'Servicios de envoltura de regalos',
    description: "¿Buscas envoltorios de regalo profesionales para ayudar durante las fiestas? ¡Contrata a un tasker para los servicios de envoltura de regalos!",
    category: {
      name: 'Vacaciones',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1603938319/eqwwwgmztmswytgae24o.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Colgar luces navideñas',
    description: "¿Necesitas a alguien que cuelgue las luces de Navidad? Siéntate y relájate mientras tu tasker ilumina tu casa.",
    category: {
      name: 'Vacaciones',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1603939964/xrgof9ly1exhcoxiolje.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrega de árboles de Navidad',
    description: "¡Recibe un árbol de Navidad real directamente en tu sala de estar! Entrega de árboles de Navidad el mismo día disponible.",
    category: {
      name: 'Vacaciones',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1605902094/n3cozx2zrxfho3zhsq7z.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Decoración navideña',
    description: "¿Buscas servicios de decoración navideña? ¡Contrata a un tasker para que cuelgue los adornos navideños y te ayude a preparar tu casa para las fiestas!",
    category: {
      name: 'Vacaciones',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1603939412/vbkascegykobjd2q8hxs.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza de fiestas',
    description: "¿Derrames de cerveza, salsa de búfalo en la alfombra, desastre de queso nacho? Las cosas pasan. Contrata a un tasker para una limpieza profunda antes o después de la fiesta.",
    category: {
      name: 'Vacaciones',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1603938792/now0xcnwfs3zf0ncbidn.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de montaje de juguetes',
    description: "¿No tienes tiempo para armar esos juguetes nuevos y elegantes que les regalaron a tus hijos? TaskRabbit puede proporcionar servicios de ensamblaje de juguetes y ensamblarlos en un instante.",
    category: {
      name: 'Vacaciones',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1481308604/wna3ndhmgwhwtud3xx5n.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Espera en la fila',
    description: "¡Contrata a un tasker para que sea un profesional de la fila! Pueden esperar en la fila para cualquier evento en el que necesite ayuda, incluso las compras del Black Friday.",
    category: {
      name: 'Vacaciones',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1574201893/e09t31eccesh94hizo6y.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Eliminación del árbol de Navidad',
    description: "Siéntate y termina lo último de ese ponche de huevo mientras un tasker arrastra tu árbol a la acera. ¡Reserva un tasker para la eliminación del árbol de Navidad hoy mismo!",
    category: {
      name: 'Vacaciones',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1480636001/dbdncdknjpx7ov6txcvq.jpg",
  },
]

const Asistentepersonal = [
  {
    id: crypto.randomUUID(),
    name: 'Asistente personal',
    description: "Organized and efficient Taskers can be your extra pair of hands, handling any task. Hire a personal assistant today!",
    category: {
      name: 'Asistente personal',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1429633088/lyydp8culnzq06hyr74t.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Hacer tus mandados',
    description: "Have a long to-do list? Let Taskers pick up your dry cleaning, take packages to the post office, pick up prescriptions, or do your shopping.",
    category: {
      name: 'Asistente personal',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448438/nwojcn8hxzfudorh19wa.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Espera en la fila',
    description: "Hire a Tasker to as a professional line stander! They can wait in line for any event you need an assist with--even Black Friday shopping." ,
    category: {
      name: 'Asistente personal',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1574201893/e09t31eccesh94hizo6y.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Organización',
    description: "Whatever you need help sorting through Taskers can help tidy your home into organizational heaven.",
    category: {
      name: 'Asistente personal',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1610410647/s56u2qyrxy5pfpujc7w0.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Organizar el hogar',
    description: "Taskers can help de-clutter and organize your home.",
    category: {
      name: 'Asistente personal',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448686/ynoxvh8ibahpnwbz7zyi.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de Organización de Closets',
    description: "Let us help you clean up your closet and get things organized.",
    category: {
      name: 'Asistente personal',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428351045/wxgm1qq6n0eo7tr4kwud.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de Interiorismo',
    description: "Hire a Tasker to decorate your home. Our experienced Taskers will help you customize the interior of your home.",
    category: {
      name: 'Asistente personal',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1588015409/wwkia0zvfr54ykhlli2u.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Asistente virtual',
    description: "Get important tasks done efficiently today, from organizing files to managing your inbox and more.",
    category: {
      name: 'Asistente personal',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1586197361/k38g4xbvg6xz2zg7uvgw.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Paseo de perros',
    description: "Need someone to help your pooch stretch its legs? Trusted Taskers can walk your dog while you're away.",
    category: {
      name: 'Asistente personal',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1429630872/lcicxq8fomhrcywblbaf.jpg",
  },
]

const Preparacionparabebes = [
  {
    id: crypto.randomUUID(),
    name: 'A prueba de bebés',
    description: "¡Contrata a un tasker hoy mismo para que te ayude a preparar tu hogar para bebés!",
    category: {
      name: 'Preparación para bebés',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1588012413/lo31a5eyunq4tmvvnevb.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrega de alimentos para bebés',
    description: "¿Necesita que alguien le entregue comida para bebés y niños pequeños directamente en su puerta? Contrata a un tasker para que te entregue el mismo día.",
    category: {
      name: 'Preparación para bebés',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1586549188/abn9scc6hp7zgw1yvwlx.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Organizar una habitación',
    description: "¿Solo necesitas una habitación individual organizada? ¡No hay problema, podemos ayudarte!",
    category: {
      name: 'Preparación para bebés',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448695/oiz37oxscvya4drx1qi5.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Pintura',
    description: "Ya sea una casa entera, una habitación o una pared, los taskers pueden pintarla a tu entera satisfacción.",
    category: {
      name: 'Preparación para bebés',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448734/nnbp4eyekiguqplcer5c.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de montaje de juguetes',
    description: "¿No tienes tiempo para armar esos juguetes nuevos y elegantes que les regalaron a tus hijos? TaskRabbit puede proporcionar servicios de ensamblaje de juguetes y ensamblarlos en un instante.",
    category: {
      name: 'Preparación para bebés',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1481308604/wna3ndhmgwhwtud3xx5n.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Instalación de Smart Home',
    description: "Contrata a un tasker para llevar tu hogar al siglo XXI con servicios de instalación de hogares inteligentes.",
    category: {
      name: 'Preparación para bebés',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1576025514/t4a9f8gmukbwhevmmpch.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrega',
    description: "¿Necesitas que te entreguen algo al otro lado de la ciudad? Transportaremos de forma segura cualquier cosa, desde sofás hasta documentos y comida para llevar.",
    category: {
      name: 'Preparación para bebés',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1452811668/bewwpxnaevr3y3by4yuh.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Compras',
    description: "Podemos comprar lo que necesites.",
    category: {
      name: 'Preparación para bebés',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428351121/nkbccweuy19ljhmuonai.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Limpieza general',
    description: "Lo que sea que necesites limpio, los taskers amables y profesionales están aquí para ayudarte.",
    category: {
      name: 'Preparación para bebés',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428350674/q5cdsh1hxlzbpbedxbj0.jpg",
  },
]

const Tareasvirtualesyenlinea = [
  {
    id: crypto.randomUUID(),
    name: 'Asistente virtual',
    description: "Realice tareas importantes de manera eficiente hoy, desde la organización de archivos hasta la administración de su bandeja de entrada y más.",
    category: {
      name: 'Tareas virtuales y en línea',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1586197361/k38g4xbvg6xz2zg7uvgw.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Organización',
    description: "Lo que sea que necesites, la ayuda para clasificar los taskers puede ayudarte a ordenar tu hogar y convertirlo en el paraíso de la organización.",
    category: {
      name: 'Tareas virtuales y en línea',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1610410647/s56u2qyrxy5pfpujc7w0.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrada de datos',
    description: "¿Necesita un empleado de entrada de datos lo antes posible? Externaliza tus necesidades de entrada de datos a un tasker, que puede ayudarte hoy, mañana o cuando sea.",
    category: {
      name: 'Tareas virtuales y en línea',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1563302880/loizsvfztijpx2twvj17.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Ayuda de la computadora',
    description: "Los taskers expertos pueden ayudarte a resolver los problemas de tu ordenador.",
    category: {
      name: 'Tareas virtuales y en línea',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1429631220/ygcm0bvo8hkl5exavjxx.jpg",
  },
]

const Serviciosoficina = [
  {
    id: crypto.randomUUID(),
    name: 'Limpieza de oficinas',
    description: "Mantener una oficina limpia puede ser difícil. ¡Contrata a un tasker para que te ayude a hacer que tu oficina brille de arriba a abajo!",
    category: {
      name: 'Servicios de oficina',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1563302408/jymtc8sdx1uufzclznhq.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Configuración de Office Tech',
    description: "¿Tiene una próxima reunión o conferencia con tecnología que necesita ser configurada? TaskRabbit tiene el tasker adecuado para conseguirlo exactamente como lo deseas.",
    category: {
      name: 'Servicios de oficina',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1563302004/bewqumtxfpkn89dz9dgq.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Mudanzas de oficinas',
    description: "Mudarse es difícil, especialmente cuando se muda de oficina. ¿Busca una empresa de mudanzas de confianza? ¡TaskRabbit al rescate!",
    category: {
      name: 'Servicios de oficina',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1563302708/cddmdjmy2kv2j199nhkd.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Suministros de oficina y entrega de bocadillos',
    description: "¿Busca la entrega el mismo día de suministros de oficina y refrigerios? ¡TaskRabbit puede ser útil!",
    category: {
      name: 'Servicios de oficina',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1563303454/mbgbhf43zxabhvmscir5.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Montaje de muebles de oficina',
    description: "¿Tiene escritorios, sillas, mesas, cajones o gabinetes nuevos que necesitan ser ensamblados? Contrata a un tasker para que lo ensamble todo.",
    category: {
      name: 'Servicios de oficina',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1563300741/lthmulj1cbg9oq2hfymr.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Configuración y organización de la oficina',
    description: "La organización de la oficina es difícil, pero con el diseño adecuado y un poco de ayuda de tu tasker perfecto, la configuración de tu espacio puede ser fácil.",
    category: {
      name: 'Servicios de oficina',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1563302282/w2blgpywtwpped6jzmcn.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Administración de oficinas',
    description: "Los taskers organizados y eficientes pueden realizar una variedad de tareas de administración de oficina.",
    category: {
      name: 'Servicios de oficina',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1429630995/jzzidqjvfe3i1ntorsg7.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Diseño de Interiores de Oficinas',
    description: "Contrata a un tasker para que te ayude a diseñar tu lugar de trabajo. Los taskers te ayudarán a convertir tus sueños de oficina en realidad.",
    category: {
      name: 'Servicios de oficina',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1589504907/da2poyrgooro2jdbojeg.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Mudanza de muebles de oficina',
    description: "Mover los muebles de oficina puede ser una molestia, así que prueba TaskRabbit y elimina el estrés de todo el proceso.",
    category: {
      name: 'Servicios de oficina',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1650386921/bv1adylph9ihvqjhzmlk.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicio de montaje de oficinas',
    description: "¿Necesita montar una pizarra, un televisor u otros artículos de oficina? Contrata a un tasker para que lo haga.",
    category: {
      name: 'Servicios de oficina',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1651086046/jx5o4txptvfq8wv3rfwa.jpg",
  },
]

const Tareassincontacto = [
  {
    id: crypto.randomUUID(),
    name: 'Entrega sin contacto',
    description: "Envía a un tasker para que recoja y entregue todo lo que necesites. Lo harán de forma rápida y cuidadosa.",
    category: {
      name: 'Tareas sin contacto',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1430424230/b2lfkt68avu0zm2i5nkf.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Recogida y entrega de medicamentos recetados sin contacto',
    description: "¿Necesita una receta médica pero necesita quedarse en casa? Permítanos recoger sus recetas por usted.",
    category: {
      name: 'Tareas sin contacto',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1584739044/m9sfcvdujablyd8esdpi.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Hacer tus mandados',
    description: "¿Tienes una larga lista de tareas pendientes? Deja que los taskers recojan tu tintorería, lleven los paquetes a la oficina de correos, recojan las recetas o hagan tus compras.",
    category: {
      name: 'Tareas sin contacto',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448438/nwojcn8hxzfudorh19wa.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Compras de comestibles y entrega a domicilio',
    description: "Danos tu lista de la compra y abasteceremos tu despensa con los alimentos que necesitas para la semana.",
    category: {
      name: 'Tareas sin contacto',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448751/jdz3qnucbtavshrwoyzh.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de desinfección',
    description: "¿Necesita que alguien desinfecte su hogar u oficina? Contrata a un tasker para que se encargue de tus necesidades de servicio de desinfección.",
    category: {
      name: 'Tareas sin contacto',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1588967277/dmzs7igh2suvoz4p3nbf.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Entrega de donaciones',
    description: "Retribuye mientras ordenas. Cuando reservas un tasker para llevar donaciones a organizaciones benéficas, damos una parte de nuestra tarifa de servicio a organizaciones locales sin fines de lucro a través de TaskRabbit for Good.",
    category: {
      name: 'Tareas sin contacto',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1554490040/bp2azf4g3hcdeb6hkxac.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Servicios de trabajo de jardinería',
    description: "Podemos limpiar su jardín y eliminar cualquier desperdicio o basura del jardín.",
    category: {
      name: 'Tareas sin contacto',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1428448794/gweisgd5bxoafin5euse.jpg",
  },
  {
    id: crypto.randomUUID(),
    name: 'Asistente virtual',
    description: "Realice tareas importantes de manera eficiente hoy, desde la organización de archivos hasta la administración de su bandeja de entrada y más.",
    category: {
      name: 'Tareas sin contacto',
    },
    price: 69.99,
    image: "https://res.cloudinary.com/taskrabbit-com/image/upload/q_auto,f_auto/c_fill,h_480,w_640/v1586197361/k38g4xbvg6xz2zg7uvgw.jpg",
  },
]

export const services: Service[] = [
  ...tareasDestacadas,
  ...encargadoMantenimiento,
  ...serviciosDeMudanza,
  ...Montajedemuebles,
  ...Montajeeinstalacion,
  ...Limpieza,
  ...ComprasEntrega,
  ...ServiciosdeServify,
  ...Serviciosdejardineria,
  ...Vacaciones,
  ...Asistentepersonal,
  ...Preparacionparabebes,
  ...Tareasvirtualesyenlinea,
  ...Serviciosoficina,
  ...Tareassincontacto,
]
