import * as ReactBootStrap from 'react-bootstrap';

function About(props){
    return(
        <div id = 'about-body'>
        
        <section id = 'about-container'>
        <ReactBootStrap.Card className ='about-card' style ={{border:'none'}}>
  <div id ='bs-img-container'style = {{backgroundColor: '#f5f5dc'}} >
  <ReactBootStrap.Card.Img id = 'bs-img' variant="top" src="https://i.imgur.com/x5CW8IT.jpg" />
  </div>
  <ReactBootStrap.Card.Body style = {{backgroundColor: '#f5f5dc'}}>
    <ReactBootStrap.Card.Title>Runner's High</ReactBootStrap.Card.Title>
    <ReactBootStrap.Card.Text>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur perspiciatis commodi maxime saepe alias dolore sed enim, ut asperiores deleniti, atque laudantium excepturi ex laborum dolorum. At blanditiis harum sunt?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officiis odio inventore itaque quam dolor similique harum, sit unde provident soluta corporis delectus maiores debitis quis at dolores, dolorem totam!
    </ReactBootStrap.Card.Text>
   <a target = '_blank'href='https://cat-collector-bucket2.s3.amazonaws.com/ATerwilligerResume.pdf' download><ReactBootStrap.Button>Download Resume</ReactBootStrap.Button></a>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

        </section>
        </div>
    )
}

export default About;