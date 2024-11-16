import Footer from "../components/footer"
export default function ContactMe(){
    return(
        <div className="navGap">
            <div>
                <p className="C-Title">Contact Me</p>
                <div className="C-main-div">
                    <div className="C-div">

                    <div className="C-Detail">
                        <div className="C-Detail-div">
                            <p className="C-D-title">Contact Details</p><hr className="C-D-line1"/>
                            <div className="C-D-div"><p>Gmail</p><p>ghulamakbarabbbro110@gmail.com</p></div><hr className="C-D-line2"/>
                            <div className="C-D-div"><p>Number</p><p>+92 326 2268830</p></div><hr className="C-D-line2"/>
                            <div className="C-D-div"><p>Linkedin</p><p>www.linkedin.com/in/akbarabro</p></div><hr className="C-D-line2"/>
                            <div className="C-D-div"><p>Github</p><p>github.com/akbarabro</p></div><hr className="C-D-line2"/>
                            <div className="C-D-div"><p>Behance</p><p>www.behance.net/akbarabro</p></div>
                        </div>
                        </div>

                    <div className="C-ReachNow">
                        <p className="C-Reach-title">Reach Now</p>
                        <input className="C-Reach-input" type="text" placeholder="Name" />
                        <input className="C-Reach-input"  type="text" placeholder="Email"/>
                        <input className="C-Reach-input"  type="text" placeholder="Number"/>
                        <input className="C-Reach-msg" type="text" placeholder="Message"/>

                    </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}