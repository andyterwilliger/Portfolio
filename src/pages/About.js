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
   <a target = '_blank'href='https://cat-collector-bucket2.s3.us-east-1.amazonaws.com/ATerwilligerResume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLWVhc3QtMSJIMEYCIQC0V36u5bgMnFrs9h7Hu0urf6EjlNgHniu0gJ7V0AwfPQIhAIiqAKz87Xd9NOQbGWhQaSTFhLpQPsig19Mo4OECGU%2FyKu0CCK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNzQxOTc0OTU3OTQ2IgwcquIVwR6MIzXPT40qwQJD3v8RACqSUwZ42sMxu%2B4nwCO0IMwCEVdtv4ea7s2YD6RJti3vK2f3%2F%2F27uMuzCMJYS7%2FhI4OwQ9pSfBb%2FZxRJukwAtC1L971V%2FSx5F8CGP687JtXpCeFqeKBVPSMHazfPRqrw7xRKev%2B7LtafFh%2Bh%2FMY%2BbGffT3R6IZ87MThp9vx6jbUvNjbE%2BgYd%2FWT1b9%2BlWe77jfRh8IYSDD6xbN4AFVwspUsPy4%2FiXQb5J0%2FNGFh1GeLrTLXdtKHaBXZs%2Bfojkf0o6ERveWUXokJgXVQOHAVj1CbiiNxG0GJTkMk8qe1Q6eOdT%2BPhQDXIdXiddvNpLh%2F0npR4HTQseosJrusw1PsDXnJwzQTKfLxAFQiHyVH1N371HDm7PNlDNwWMm8vOBThV0baR15Kl0as8Ip3Gv56o3Vw9sVWOVHPeS%2B0dFz4wioblkAY6sgKtyXuRJ%2FHontquFRa5dvlNLkEN0goG4N8foyTerrJ5mbD%2Fb%2BJGWSKQPfSBNOV%2Fx8IHXS3UzNlLcEI6LKSxTXaG8qhXG6t3AssxBoPqHqKr%2FDc9YyTM8XzTB9CllltKlLKV45Rz3%2BGSbHfmDWXZY0CKIAdRCGnQ8ld%2FOpBsxnuAIO5kbrHSshNjtRJM1yZUipmVpnGmt18vWYAx%2FUC4XTxiBnyoMxyGh7Z%2Bk48q5onaksBxIRoUg49sAKSUsB77PkCK5L0OdKi5YLPlJExICPJKJQUXPprIWFumeqYU766fC6OYEV2agRn%2Bo4d3hKn7mhXfeodXqW1JcVRb1m7VPXXfQ8iCfZdhs4cUINsACdxstRWxvcd%2BsurP9t28UgBJDumq7WYkPEaNkJeRpXerP%2F2H2UM%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220225T210223Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA2ZQJHL55A7AVT77R%2F20220225%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=70bab5a68a20df2b60055e2626762ab694c843d67c80ed00eebaa1451f7ffd6e' download><ReactBootStrap.Button>Download Resume</ReactBootStrap.Button></a>
  </ReactBootStrap.Card.Body>
</ReactBootStrap.Card>

        </section>
        </div>
    )
}

export default About;