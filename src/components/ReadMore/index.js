// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  SubContainer,
  Heading,
  Description,
  Image,
  ReactDes,
  Button,
} from './styledComponents'

const ReadMore = reactHooksDes => {
  const {reactHooksDescription} = reactHooksDes
  const [showFullText, showReadMore] = useState(false)
  const toggleText = () => {
    showReadMore(prevState => !prevState)
  }

  return (
    <MainContainer>
      <SubContainer>
        <Heading>React Hooks</Heading>

        <Description>Hooks are a new addition to React</Description>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />

        {showFullText ? (
          <>
            <ReactDes>{reactHooksDescription}</ReactDes>
            <Button onClick={toggleText}>Read Less</Button>
          </>
        ) : (
          <>
            <ReactDes>{reactHooksDescription.slice(0, 170)}</ReactDes>
            <Button onClick={toggleText}>Read More</Button>
          </>
        )}
      </SubContainer>
    </MainContainer>
  )
}

export default ReadMore
