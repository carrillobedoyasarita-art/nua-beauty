import { Product, Tip } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Base de Maquillaje Natural Glow',
    category: 'makeup',
    price: 45.00,
    brand: 'Natura',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop',
    description: 'Una base ligera que permite que tu piel respire.'
  },
  {
    id: '2',
    name: 'Sérum Ácido Hialurónico',
    category: 'skincare',
    price: 68.00,
    brand: 'ProCare',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    description: 'Hidratación profunda para una piel radiante.'
  },
  {
    id: '3',
    name: 'Máscara de Pestañas Volume Up',
    category: 'makeup',
    price: 32.00,
    brand: 'Natura',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Aceite de Argán Reparador',
    category: 'haircare',
    price: 55.00,
    brand: 'BioHair',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Limpiador Facial Suave',
    category: 'skincare',
    price: 28.00,
    brand: 'Natura',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Kit de Estética Post-Tratamiento',
    category: 'esthetics',
    price: 120.00,
    brand: 'Professional Line',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
  }
];

export const tips: Tip[] = [
  {
    id: '1',
    title: 'Rutina de Noche para Piel Radiante',
    category: 'skincare',
    image: 'https://ais-dev-v7gxwow5kcp2xi7khbkhg3-552417493403.us-east1.run.app/src/assets/images/rutina_noche_radiante_1783297111787.jpg',
    excerpt: 'Descubre los pasos esenciales para despertar con una piel descansada y luminosa.'
  },
  {
    id: '2',
    title: 'Tips para el Cuidado Capilar en Verano',
    category: 'hair',
    image: '/src/assets/images/cuidado_capilar_verano_1783297124484.jpg',
    excerpt: 'Protege tu cabello del sol y el cloro con estos consejos infalibles.'
  },
  {
    id: '3',
    title: 'Maquillaje "No-Makeup" en 5 Minutos',
    category: 'makeup',
    image: '/src/assets/images/maquillaje_no_makeup_look_1783297135189.jpg',
    excerpt: 'Aprende a resaltar tu belleza natural con muy pocos productos.'
  }
];
