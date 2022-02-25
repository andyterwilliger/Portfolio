import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow} from '@fortawesome/free-brands-svg-icons'
function Footer() {
    return (
        <footer>
            <div id='icons'>
                <div id='github-i'>
                    <ul id = 'icons-ul'>
                        <div>
                            <li >
                            <a target = '_blank' href= 'https://github.com/andyterwilliger'>
                                <FontAwesomeIcon icon={faGithub} size='2x' className='icon'  />
                            </a>
                            </li>
                        </div>
                        <div id='linkedin-i'>
                            <li>
                            <a target = '_blank' href= 'https://www.linkedin.com/in/andy-terwilliger/'>
                            <FontAwesomeIcon icon={faLinkedin} size='2x' className='icon' />
                            </a>
                            </li>
                        </div>
                        <div id = 'stack-i'>
                            <li>
                            <a target = '_blank' href= 'https://stackoverflow.com/users/18311028/andy123'>

                                <FontAwesomeIcon icon= {faStackOverflow} size= '2x' className='icon'/>
                                </a>
                            </li>

                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


export default Footer;