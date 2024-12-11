import Image from "next/image"
import Ai from "../images/1-ai.png"
import Psd from "../images/2-ps.png"
import Premiere from "../images/3-pr.png"
import AfterE from "../images/4-ae.png"
import XD from "../images/5-xd.png"
import Shopify from "../images/6-shopify.png"
import Htmll from "../images/7-HTML.png"
import Css from "../images/8-Css.png"
import Typescript from "../images/9-ts.png"
import NextJs from "../images/10-nextjs.png"

export default function Skill(){
    return (
        <div className="skillBack">
            <h2 className="skills">My Skills</h2>
            <ul className="skillsBoxList">
                <li className="skillsBox"><Image className="imageOfSkill" src={Ai} alt=""/>Illustrator</li>
                <li className="skillsBox"><Image className="imageOfSkill" src={Psd} alt=""/>Photoshop</li>
                <li className="skillsBox"><Image className="imageOfSkill" src={Premiere} alt=""/>Premiere-Pro</li>
                <li className="skillsBox"><Image className="imageOfSkill" src={AfterE} alt=""/>After Effect</li>
                <li className="skillsBox"><Image className="imageOfSkill" src={XD} alt=""/>Adobe XD</li>
                <li className="skillsBox"><Image className="imageOfSkill" src={Shopify} alt=""/>Shopify</li>
                <li className="skillsBox"><Image className="imageOfSkill" src={Htmll} alt=""/>HTML</li>
                <li className="skillsBox"><Image className="imageOfSkill" src={Css} alt=""/>CSS</li>
                <li className="skillsBox"><Image className="imageOfSkill" src={Typescript} alt=""/>Typescript</li>
                <li className="skillsBox"><Image className="imageOfSkillNext" src={NextJs} alt=""/>Next.Js</li>
            </ul>
        </div>
    )
}