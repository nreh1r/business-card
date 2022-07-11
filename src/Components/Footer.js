import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
    return(
        <div className='footer'>
            <TwitterIcon fontSize="large" className='twitter' style={{ color: '#918E9B' }} />
            <FacebookIcon fontSize="large" className='facebook' style={{ color: '#918E9B' }} />
            <InstagramIcon fontSize="large" className='insta' style={{ color: '#918E9B' }} />
            <GitHubIcon fontSize="large" style={{ color: '#918E9B' }} />
        </div>
    )
}

export default Footer