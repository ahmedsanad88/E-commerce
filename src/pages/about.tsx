import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import AboutContent from '@/ui/sections/about/AboutContent';

const About = () => (
  <Main meta={<Meta title="About Buy/2" description="About buy/2 company" />}>
    <AboutContent />
  </Main>
);

export default About;
