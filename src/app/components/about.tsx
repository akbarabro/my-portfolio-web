import styles from './about.module.css'; // Import the CSS module

export default function About() {
    return (
        <div className="AboutDiv">
            <h2 className="About">About</h2>
            <p className="Discription">I’m Akbar, a passionate graphic designer with over 3 years of experience in creating printable sportswear designs.
                Currently, I work as a team leader at Rising Sports Wear, where I manage and create high-quality, innovative designs for sports products. Alongside 
                my graphic design skills, I’m also growing as a web developer and video editor. I have hands-on experience with technologies like 
                <span className="textColor"> HTML </span>, 
                <span className="textColor"> CSS </span>, 
                <span className="textColor"> TypeScript </span>, 
                and <span className="textColor">Next.js </span>. 
                I’m constantly learning new skills to enhance my creativity and technical expertise, with a focus on responsive design.
            </p>
        </div>
    );
}
