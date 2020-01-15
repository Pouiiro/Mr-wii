import React from 'react'
import Container from '@material-ui/core/Container'
import htmlSvg from 'assets/svg/html.svg'
import nodeSvg from 'assets/svg/node.svg'
import cssSvg from 'assets/svg/css.svg'
import jsSvg from 'assets/svg/js.svg'
import sqlSvg from 'assets/svg/mysql.svg'
import reactSvg from 'assets/svg/react.svg'
import phpSvg from 'assets/svg/php.svg'
import jquerySvg from 'assets/svg/jquery.svg'
import mongoSvg from 'assets/svg/mongodb.svg'

const Skills = () => {
  return (
    <Container maxWidth="lg" className="skillsCont">
      <h1>My Stack</h1>
      <ul>
        <li>
          <img src={htmlSvg} alt="htmlimg" />
        </li>
        <li>
          <img src={cssSvg} alt="cssimg" />
        </li>
        <li>
          <img src={jsSvg} alt="jsimg" />
        </li>
        <li>
          <img src={sqlSvg} alt="sqlimg" />
        </li>
        <li>
          <img src={reactSvg} alt="reactimg" />
        </li>
        <li>
          <img src={phpSvg} alt="phpimg" />
        </li>
        <li>
          <img src={nodeSvg} alt="nodejsimg" />
        </li>
        <li>
          <img src={jquerySvg} alt="jqueryimg" />
        </li>
        <li>
          <img src={mongoSvg} alt="mongodbimg" />
        </li>
      </ul>
    </Container>
  )
}
export default Skills
