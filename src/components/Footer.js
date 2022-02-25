import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <footer>
            <div id='icons'>
                <div id='github-i'>
                    <ul id = 'icons-ul'>
                        <div>
                            <li>
                                <FontAwesomeIcon icon={faGithub} size='2x' />
                            </li>
                        </div>
                        <div id='linkedin-i'>
                            <li>
                            <FontAwesomeIcon icon={faLinkedin} size='2x' />
                            </li>
                        </div>
                        <div id = 'stack-i'>
                            <li>
                                <FontAwesomeIcon icon= {faStackOverflow} size= '2x'/>
                            </li>

                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


export default Footer;