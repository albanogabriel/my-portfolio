import LivrosCoverImg from '../assets/coverImgs/condeDeMonteCristo.jpg'
import FilmesCoverImg from '../assets/coverImgs/Duna-2-01.jpg'
import SerieCoverImg from '../assets/coverImgs/got.jpg'
import AnimesCoverImg from '../assets/coverImgs/steinsGate2.jpeg'
import GamesCoverImg from '../assets/coverImgs/witcher3.jpg'
import AtriumStudios from '../assets/projectImgs/AtriumStudios.jpg'
import BirthdayPage from '../assets/projectImgs/BirthdayPage.jpg'
import CoffeDelivery from '../assets/projectImgs/CoffeDelivery.jpg'
import DisneyPlus from '../assets/projectImgs/DisneyPlus.jpg'
import DTMoney from '../assets/projectImgs/DT-Money.jpg'
import EbacFullstack from '../assets/projectImgs/EBACFullstack.jpg'
import FeedApp from '../assets/projectImgs/FeedApp.jpg'
import FirstPortfolio from '../assets/projectImgs/FirstPortfolio.jpg'
import FlashCards from '../assets/projectImgs/Flashcards.jpg'
import GitHubBlog from '../assets/projectImgs/GitHubBlog.jpg'
import IfoodClone from '../assets/projectImgs/IfoodClone.jpg'
import NetflixClone from '../assets/projectImgs/NetflixClone.jpg'
import NonAbstractGallery from '../assets/projectImgs/NonAbstractGallery.jpg'
import Pomodoro from '../assets/projectImgs/Pomodoro.jpg'
import ToDo from '../assets/projectImgs/ToDo.jpg'
import TokyoLP from '../assets/projectImgs/TokyoLP.jpg'

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

export const cases = [
  {
    id: 1,
    title: 'Coffe Delivery',
    description: 'Plataforma para pedidos de café',
    technologies: ['React JS', 'Styled-component'],
    img: CoffeDelivery,
    link: 'https://coffe-delivery-app.vercel.app/',
  },
  {
    id: 2,
    title: 'GitHub Blog',
    description: 'Buscar Issues via github API',
    technologies: ['React JS', 'Styled-component', 'API Github'],
    img: GitHubBlog,
    link: 'https://github-blog-albanogabriel.vercel.app/',
  },
  {
    id: 3,
    title: 'DT-Money',
    description: 'Use npx json server server.json para habilitar as transações',
    technologies: ['React JS', 'Styled-component', 'JSON Server'],
    img: DTMoney,
    link: 'https://dt-money-albanogabriel.vercel.app/',
  },
  {
    id: 4,
    title: 'Pomodo Timer',
    description: 'Pomodoro Timer usando métodos JavaScript',
    technologies: ['React JS', 'CSS Modules', 'date-fns'],
    img: Pomodoro,
    link: 'https://pomodoro-timer-app-six.vercel.app/',
  },
  {
    id: 4,
    title: 'To Do',
    description: 'To do App, príncipios de POO',
    technologies: ['React JS', 'CSS Modules', 'POO'],
    img: ToDo,
    link: 'https://todo-reactjs-plum.vercel.app/',
  },
  {
    id: 4,
    title: 'Flash Cards',
    description: 'Rocketseat Nitro classes',
    technologies: ['React JS', 'Monorepo/Turborepo', 'POO'],
    img: FlashCards,
    link: 'https://flashcards-monorepo-albanogabriel.vercel.app/#',
  },
  {
    id: 5,
    title: 'Feed App',
    description: 'Primeiros passos no React, utilizar map(), useState()...',
    technologies: ['React JS', 'CSS Modules'],
    img: FeedApp,
    link: 'https://01-rocketseat-feed-app-typescript.vercel.app/',
  },
  {
    id: 6,
    title: 'Atrium Studio X Stay',
    description:
      'Primeiro projeto feito por conta própria feito através dos meus conhecimentos adquiridos',
    technologies: ['HTML', 'SCSS'],
    img: AtriumStudios,
    link: 'https://21-exercicio-atrium-studios-by-xtay-landing-page-2dg5.vercel.app/',
  },
  {
    id: 7,
    title: 'EBAC Fullstack Design Page',
    description: 'Clone feito em exercício do curso da EBAC',
    technologies: ['HTML', 'SCSS', 'Framer Motion'],
    img: EbacFullstack,
    link: 'https://22-exercicio-ebac-full-stack-designer-landing-page.vercel.app/',
  },
  {
    id: 8,
    title: 'Non Abstract Gallery',
    description: 'Galeria feita através de video no youtube',
    technologies: ['HTML', 'CSS'],
    img: NonAbstractGallery,
    link: 'https://20-boracodar-artgallery.vercel.app/',
  },
  {
    id: 9,
    title: 'Disney + Landing Page',
    description: 'Clone feito para curso EBAC',
    technologies: ['HTML', 'CSS', 'JS'],
    img: DisneyPlus,
    link: 'https://21-landing-page-disney-8scxjw55o-albanogabriel.vercel.app/',
  },
  {
    id: 10,
    title: 'Portfolio Gabriel',
    description: 'Portfolio usando Stats/Embed code do GitHub ',
    technologies: ['HTML', 'CSS', 'Embed code'],
    img: FirstPortfolio,
    link: 'https://21-landing-page-disney-8scxjw55o-albanogabriel.vercel.app/',
  },
  {
    id: 10,
    title: 'Birthday Exercice',
    description: 'Exercício para fazer página de contagem regressiva',
    technologies: ['HTML', 'CSS', 'Embed code'],
    img: BirthdayPage,
    link: 'https://22-exercicio-birthday-gabriel.vercel.app/',
  },
  {
    id: 10,
    title: 'Netflix Clone',
    description: 'Meu primeiro clone',
    technologies: ['HTML', 'CSS'],
    img: NetflixClone,
    link: 'https://netflix-clone-eta-six.vercel.app/',
  },
  {
    id: 11,
    title: 'Ifood LP',
    description: 'Primeiro exerício EBAC',
    technologies: ['HTML', 'CSS'],
    img: IfoodClone,
    link: 'https://14-projeto-3-ifood-jquery-bootstrap.vercel.app/',
  },
  {
    id: 11,
    title: 'Tokyp Trip LP',
    description: 'Meu primeiro projeto no Github',
    technologies: ['HTML', 'CSS'],
    img: TokyoLP,
    link: 'https://5-projeto-tokyotrip.vercel.app/',
  },
]
