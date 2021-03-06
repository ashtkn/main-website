import React from 'react'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import Layout from '../components/layout'
import Intro from '../components/intro'
import About from '../components/about'
import Contact from '../components/contact'
import ProjectList from '../components/project-list'

const Cara: React.FC = () => (
  <Layout>
    <Parallax pages={6}>
      <Intro offset={0} factor={1} />
      <About offset={1} factor={1} />
      <ProjectList offset={2} factor={3} />
      <Contact offset={5} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
