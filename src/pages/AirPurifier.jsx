import project from '../content/air-purifier.json'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ProcessStep from '../components/ProcessStep'
import ProjectHeader from '../components/ProjectHeader'
import ProjectFooterNav from '../components/ProjectFooterNav'
import Reflection from '../components/Reflection'
import '../App.css'

export default function AirPurifier() {
  return (
    <>
      <Nav />
      <main>
        <ProjectHeader project={project} />

        {project.sections.map((step) => (
          <ProcessStep key={step.number} step={step} />
        ))}

        <Reflection reflection={project.reflection} />
        <ProjectFooterNav current="airPurifier" />
      </main>
      <Footer />
    </>
  )
}
