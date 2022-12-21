import { useQuery } from '@apollo/client';
import axios from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import Experiences from '../../components/Experiences';
import { Experience } from '../../components/Experiences/Experiences';
import Links from '../../components/Links';
import { linksDataDefault } from '../../components/Links/Links';
import MyProjects from '../../components/MyProjects';
import { ProjectType } from '../../components/MyProjects/MyProjects';
import Posts from '../../components/Posts';
import { PostType } from '../../components/Posts/Posts';
import Profile from '../../components/Profile';
import Technologies from '../../components/Technologies';
import { GET_ALL_DATA } from '../../graphql/queries/get-all-data';
import {
  ScreenContainer,
  SideContent,
  MainContent,
  FullContainer,
  ThemeToggle,
} from './styles';

const Home = () => {
  const [projectsData, setProjectsData] = useState<ProjectType[] | null>(null);
  const [lightTheme, setLightTheme] = useState<boolean>(false);

  useEffect(() => {
    axios('https://api.github.com/users/alxdfm/repos')
      .then((response) => {
        setProjectsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const { data } =
    useQuery<{
      posts: PostType[];
      educations: Experience[];
      experiences: Experience[];
      technologies: { techTags: string }[];
    }>(GET_ALL_DATA);

  if (!data) {
    return <></>;
  }

  const postsReverse = [...data.posts].reverse();

  const experiencesReverse = [...data.experiences].reverse();

  const educationsReverse = [...data.educations].reverse();

  const handleTechnologies = () => {
    const techArray: string[] = [];
    data.technologies.forEach((tech) => {
      return techArray.push(tech.techTags);
    });
    return techArray.reverse();
  };

  const handleOnClickCheckbox = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setLightTheme(!lightTheme);
  };

  return (
    <FullContainer isLightTheme={lightTheme}>
      <ScreenContainer>
        <SideContent>
          <ThemeToggle
            isLightTheme={lightTheme}
            onClick={(e) => handleOnClickCheckbox(e)}
          >
            {lightTheme ? 'Dark mode' : 'Light mode'}
          </ThemeToggle>
          <Profile
            name={'Alexandre Machado'}
            description={'Full Stack Developer'}
            url={'https://www.github.com/alxdfm.png'}
          />
          <Links {...linksDataDefault} />
          <Technologies techTags={handleTechnologies()} />
          <Experiences title="Experiências" experiences={experiencesReverse} />
          <Experiences title="Educação" experiences={educationsReverse} />
        </SideContent>
        <MainContent>
          <MyProjects
            projects={projectsData}
            repoLink="https://github.com/alxdfm?tab=repositories"
          />
          <Posts posts={postsReverse} />
        </MainContent>
      </ScreenContainer>
    </FullContainer>
  );
};

export default Home;
