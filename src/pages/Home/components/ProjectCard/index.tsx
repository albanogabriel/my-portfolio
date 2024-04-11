import AtriumStudios from '../../../../assets/projectImgs/AtriumStudios.jpg'
import BirthdayPage from '../../../../assets/projectImgs/BirthdayPage.jpg'
import CoffeDelivery from '../../../../assets/projectImgs/CoffeDelivery.jpg'
import DisneyPlus from '../../../../assets/projectImgs/DisneyPlus.jpg'
import DTMoney from '../../../../assets/projectImgs/DT-Money.jpg'
import EbacFullstack from '../../../../assets/projectImgs/EBACFullstack.jpg'
import FeedApp from '../../../../assets/projectImgs/FeedApp.jpg'
import FirstPortfolio from '../../../../assets/projectImgs/FirstPortfolio.jpg'
import FlashCards from '../../../../assets/projectImgs/Flashcards.jpg'
import GitHubBlog from '../../../../assets/projectImgs/GithubBlog.jpg'
import NonAbstractGallery from '../../../../assets/projectImgs/NonAbstractGallery.jpg'
import Pomodoro from '../../../../assets/projectImgs/Pomodoro.jpg'
// import IfoodClone from '../../../../assets/projectImgs/IfoodClone.jpg'
// import NetflixClone from '../../../../assets/projectImgs/NetflixClone.jpg'
// import ToDo from '../../../../assets/projectImgs/ToDo.jpg'
// import TokyoLP from '../../../../assets/projectImgs/TokyoLP.jpg'
import { GridContainer } from './styles'

export function ProjectCard() {
  return (
    <GridContainer>
      <div className="column column-1">
        <div className="card">
          <a
            href="https://21-exercicio-atrium-studios-by-xtay-landing-page-2dg5.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={AtriumStudios} alt="Imagem 1" />
          </a>
        </div>
        <div className="card">
          <a
            href="https://20-boracodar-artgallery.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={NonAbstractGallery} alt="Imagem 2" />
          </a>
        </div>
        <div className="card">
          <a
            href="https://pomodoro-timer-app-six.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Pomodoro} alt="Imagem 2" />
          </a>
        </div>
        <a href="/projetos">Ver todo os Cases</a>
      </div>
      <div className="column column-2">
        <div className="card">
          <a
            href="https://coffe-delivery-app.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={CoffeDelivery} alt="Imagem 3" />
          </a>
        </div>
        <div className="card">
          <a
            href="https://21-landing-page-disney-8scxjw55o-albanogabriel.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={DisneyPlus} alt="Imagem 4" />
          </a>
        </div>
        <div className="card">
          <a
            href="https://29-react-type-script-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FirstPortfolio} alt="Imagem 5" />
          </a>
        </div>
        <div className="card">
          <a
            href="https://22-exercicio-birthday-gabriel.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={BirthdayPage} alt="Imagem 5" />
          </a>
        </div>
        <div className="card">
          <a
            href="https://dt-money-albanogabriel.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={DTMoney} alt="Imagem 5" />
          </a>
        </div>
      </div>
      <div className="column column-3">
        <div className="card">
          <a
            href="https://22-exercicio-ebac-full-stack-designer-landing-page.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={EbacFullstack} alt="Imagem 6" />
          </a>
        </div>
        <div className="card">
          <a
            href="https://01-rocketseat-feed-app-typescript.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FeedApp} alt="Imagem 7" />
          </a>
        </div>
        <div className="card">
          <a
            href="https://github-blog-albanogabriel.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHubBlog} alt="Imagem 7" />
          </a>
        </div>
        <div className="card">
          <a href="" target="_blank">
            <img src={FlashCards} alt="Imagem 7" />
          </a>
        </div>
      </div>
    </GridContainer>
  )
}
