import headshot from "../Images/soloProjectHeadshot.jpg"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Info() {
    return (
        <div className="infoSection">
            <img src={headshot} alt="Me" className="img" />
            <div className="infoText">
                <h1 className="name">Nicholas Reh</h1>
                <h3 className="frontend">Frontend Developer</h3>
                <p className="website">nicholasreh.website</p>
                <div className="buttonDiv">
                    <button className="emailButton"><EmailIcon fontSize="small" className="email"/>Email</button>
                    <button className="linkButton"><LinkedInIcon style={{ color: '#ffffff' }} fontSize="small" className="linkin"/>LinkedIn</button>
                </div>
            </div>
        </div>
        
    );
};

export default Info 