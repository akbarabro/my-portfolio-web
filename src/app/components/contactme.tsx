import Footer from "../components/footer"
export default function ContactMe(){
    return(
        <div className="">
            <div>
                <p className="C-Title">Contact</p>
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

                    <form className="C-ReachNow">
                        <p className="C-Reach-title">Reach Now</p>
                        <input className="C-Reach-input" type="text" placeholder="Name" required/>
                        <input className="C-Reach-input"  type="text" placeholder="Email" required/>
                        <input className="C-Reach-input"  type="text" placeholder="Number"/>
                        <textarea className="C-Reach-msg pt-[10px]" rows={4} cols={50} placeholder="Message"required ></textarea>
                        <input type="submit" value="Send" className="submit-b" />
                    </form>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}