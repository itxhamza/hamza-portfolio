import Image from 'next/image'
import Link from 'next/link'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import projects from '../../src/data/Projects.json'

// Define categories dynamically
const categories = [
  { label: 'All Projects', key: 'All' },
  { label: 'Mobile Development', key: 'Mobile Development' },
  { label: 'Web Development', key: 'Web Development' },
]

const ProjectGridSection = () => {
  const tabStyle = 'button-group filters-button-group style-1'

  // Filter projects based on category
  const filterProjects = category => {
    if (category === 'All') return projects.slice(0, 6)
    return projects.filter(project => project.category === category).slice(0, 6)
  }

  return (
    <>
      <div className='ms-portfolio-filter-area main-isotop project'>
        <div className='container'>
          <h2 className='heading-title text-center'>
            My Software Engineering Portfolio
          </h2>
          <Tabs>
            <TabList className={tabStyle}>
              {categories.map((category, index) => (
                <Tab key={index}>
                  <button>{category.label}</button>
                </Tab>
              ))}
            </TabList>
            <div className='portfolio_wrap style-1'>
              <div className='filter portfolio-feed'>
                {categories.map((category, index) => (
                  <TabPanel key={index} className='row'>
                    {filterProjects(category.key).map(
                      (project, projectIndex) => (
                        <div
                          key={projectIndex}
                          className='flash grid-item-p element-item transition creative col-md-4'
                          data-category='transition'>
                          <div className='item--inner'>
                            <Link
                              href={`/project/${project.slug}`}
                              aria-label={project.title}>
                              <div className='ms-p-content'>
                                <h4 className='ms-p-cat'>{project.category}</h4>
                                <h3>{project.title}</h3>
                              </div>
                              <figure className='ms-p-img media-wrapper media-wrapper--4:4'>
                                <Image
                                  decoding='async'
                                  src={`/images/portfolio/${project.image}`}
                                  alt={project.title}
                                  width={800}
                                  height={600}
                                />
                              </figure>
                            </Link>
                          </div>
                        </div>
                      )
                    )}
                  </TabPanel>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default ProjectGridSection
