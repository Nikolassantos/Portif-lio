import Head from 'next/head';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Button from './components/Button';
import PagePlaceholder from './components/PagePlaceholder';
import {
  ContentWrapper,
  ApresentationContainer,
  PlayerContainer,
  AboutWrapper,
  ProjectsWrapper,
  BoxContainer,
  FooterTitle,
  Header,
  FooterWrapper,
} from '../styles/home';

import HeaderComponent from './components/Header';

import Knowledge from './components/Knowledge';

import { Player } from '@lottiefiles/react-lottie-player';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <HeaderComponent />

      <main>
        <ContentWrapper>
          <ApresentationContainer>
            <h2>
              <span className="apresentation">Olá, eu sou o</span>
              <br />
              <span className="name">Nikolas Santos.</span>
              <br />
              <span className="apresentation">Desenvolvedor Fullstack.</span>
            </h2>

            <Button label="Meu GitHub" link="http://github.com/Nikolassantos">
              <FiGithub className="icon" />
            </Button>
          </ApresentationContainer>

          <PlayerContainer>
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_sprdb3gr.json"
              style={{ height: '500px', width: '500px' }}
              speed={1}
            />
          </PlayerContainer>
        </ContentWrapper>
        <AboutWrapper id="about">
          <h1>Sobre mim</h1>
          <p>
            {`I intend to become increasingly professional in Development, seeking to achieve my goals and fulfill my role in an objective and professional way.`}
          </p>
          <Button
            label="LinkedIn"
            link="https://www.linkedin.com/in/nikolassaantos/"
          >
            <FiLinkedin className="icon" />
          </Button>
        </AboutWrapper>
        <ProjectsWrapper id="project">
          <Header>
            <h1>Projects</h1>
          </Header>
          <BoxContainer>
            <ProjectCard
              title="One page empresa"
              desc="🏬 One page com informações sobre uma empresa."
            />
            <ProjectCard />
            <ProjectCard />
          </BoxContainer>
          <BoxContainer>
            <ProjectCard />
            <ProjectCard />
          </BoxContainer>

          <FooterTitle>
            <a
              href="https://github.com/Nikolassantos?tab=repositories"
              target="__blank"
            >
              Repositórios no GitHub
            </a>
          </FooterTitle>
        </ProjectsWrapper>
        <Knowledge />
      </main>

      <FooterWrapper>
        <h4>Orgulhosamente feito por Nikolas Santos</h4>

        <div>
          <ul>
            <li>
              <a
                target="__blank"
                href="https://www.linkedin.com/in/nikolassaantos/"
              >
                <FiLinkedin size={25} color="#fff" />
              </a>
            </li>
            <li>
              <a target="__blank" href="https://twitter.com/Nikolassaantos">
                <FiTwitter size={25} color="#fff" />
              </a>
            </li>
          </ul>
        </div>
      </FooterWrapper>
    </div>
  );
}
