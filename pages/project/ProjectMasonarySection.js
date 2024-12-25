import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import projects from '../../src/data/Projects.json'

// Define focused categories
const categories = [
  { label: 'All Projects', key: 'All' },
  { label: 'Web Development', key: 'Web Development' },
  { label: 'Mobile Development', key: 'Mobile Development' },
]

// Masonry grid configuration for responsiveness
const breakpointColumnsObj = {
  default: 3,
  1200: 3,
  992: 2,
  576: 1,
}

// Function to filter projects based on category
const filterProjects = category => {
  if (category === 'All') return projects
  return projects.filter(
    project =>
      project.category === category ||
      project?.category == 'Web & Mobile Development'
  )
}

const ProjectMasonrySection = () => {
  const tabStyle = 'button-group portfolio-filter filters-button-group'

  return (
    <>
      <div className='ms-portfolio-filter-area project'>
        <div className='container'>
          <h4 className='heading-title text-center mb-5'>
            My Software Engineering Portfolio
          </h4>
          <Tabs>
            {/* Tab Navigation */}
            <TabList className={tabStyle}>
              {categories.map((category, index) => (
                <Tab key={index}>
                  <button>{category.label}</button>
                </Tab>
              ))}
            </TabList>

            {/* Tab Panels */}
            <div className='portfolio_wrap'>
              <div className='filter grid-masonry ms-masonry-gallery portfolio-feed'>
                {categories.map((category, index) => (
                  <TabPanel key={index}>
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className='my-masonry-grid'
                      columnClassName='my-masonry-grid_column'>
                      {filterProjects(category.key).map(
                        (project, projectIndex) => (
                          <div
                            key={projectIndex}
                            className='fadein zoom center h-align-middle grid-item-p element-item transition photo'
                            data-category='transition'>
                            <div className='item--inner'>
                              <div
                                onClick={() =>
                                  project.link && window.open(`${project.link}`)
                                }
                                style={{ cursor: 'pointer' }}>
                                <figure className='ms-p-img'>
                                  <Image
                                    decoding='async'
                                    src={`/images/portfolio/${project.image}`}
                                    alt={project.title}
                                    width={800}
                                    height={600}
                                  />
                                </figure>
                                <div className='ms-p-content'>
                                  <h3>{project.title}</h3>
                                  <h4 className='ms-p-cat'>
                                    {project.category}
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </Masonry>
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

export default ProjectMasonrySection
