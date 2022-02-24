import * as ReactBootStrap from 'react-bootstrap';


function Projects(props){
    return(
        <div id = 'projects-body'>
            <h1>Projects</h1>
      <div id = 'projects-cards'>
            <ReactBootStrap.Card style={{ width: '20rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="https://i.imgur.com/011JjhV.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>Runner's High</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>


<ReactBootStrap.Card style={{ width: '20rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="https://i.imgur.com/2J2mUnd.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>BrewReview</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

<ReactBootStrap.Card style={{ width: '20rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="https://i.imgur.com/oFMMXNv.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>BreweryFinder</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

<ReactBootStrap.Card style={{ width: '20rem' }}>
  <ReactBootStrap.Card.Img variant="top" src="https://i.imgur.com/oFMMXNv.png" />
  <ReactBootStrap.Card.Body>
    <ReactBootStrap.Card.Title>BreweryFinder</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </ReactBootStrap.Card.Text>
    <ReactBootStrap.Button variant="primary">Go somewhere</ReactBootStrap.Button>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>
</div>
        </div>
    )
}

export default Projects;