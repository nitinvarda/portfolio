import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Card  from 'react-bootstrap/Card'
export default function ProjectCard(props) {
  return (
    <Card style={styles.cardStyle}>
        <Card.Img className="p-5" variant="top" src={props.img} />
        <Card.Body>

            <Card.Text>
                {props.description}
            </Card.Text>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

            <ButtonGroup aria-label="Basic example">
                {/* <Button variant="dark" href="https://trendinit.herokuapp.com" target='blank'>Site Link</Button> */}
                <Button variant="secondary" href={props.github_react} target='blank'>Github Link</Button>
                <Button variant="dark" href={props.github_reactNative} target="blank">React Native Github Link</Button>
            </ButtonGroup>
        </div>
        </Card.Body>
    </Card>
  )
}

const styles = {
    cardStyle: {
        borderRadius: 15,
        padding: 20,
        boxShadow: '0 2px 20px rgba(0,0,0,0.4)'
    }
}