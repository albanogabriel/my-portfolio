import LivrosCoverImg from '../assets/coverImgs/condeDeMonteCristo.jpg'
import FilmesCoverImg from '../assets/coverImgs/Duna-2-01.jpg'
import SerieCoverImg from '../assets/coverImgs/got.jpg'
import AnimesCoverImg from '../assets/coverImgs/steinsGate2.jpeg'
import GamesCoverImg from '../assets/coverImgs/witcher3.jpg'

export const navBarDesktop = [
  {
    route: '/',
    title: 'Home',
  },
  {
    route: '/about',
    title: 'About',
  },
  {
    route: '/cases',
    title: 'Cases',
  },
  {
    route: '/experiences',
    title: 'experiences',
  },
  {
    route: '/education',
    title: 'Education',
  },
] as const

export const Lists = [
  {
    id: 1,
    title: 'Livros',
    link: '/about/livros',
    list: [
      'Duna parte 2',
      'O Curioso caso de Benjamin Button - David Fincher',
      'A Chegada - Dennis Villeneuve',
    ],
    coverImg: LivrosCoverImg,
  },
  {
    id: 2,
    title: 'Filmes',
    link: '/about/filmes',
    coverImg: FilmesCoverImg,
  },
  {
    id: 3,
    title: 'Series',
    link: '/about/series',
    coverImg: SerieCoverImg,
  },
  {
    id: 4,
    title: 'Animes',
    link: 'https://www.notion.so/Animes-3485947806eb4146ba8f46e3d33a8a00?pvs=4',
    coverImg: AnimesCoverImg,
  },
  {
    id: 6,
    title: 'Games',
    link: 'https://www.notion.so/Jogos-29ef5a3104dc4d8598765048cad9f01f?pvs=4',
    coverImg: GamesCoverImg,
  },
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const
