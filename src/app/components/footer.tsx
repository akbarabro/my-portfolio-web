import style from "@/app/components/footer.module.css"
export default function Footer(){
    return(
        <div className={style.footer}>
            <table className={style.table}>


                
                <thead>
                <tr className={style.tableHeader}>
                    <th>Designing Softwares</th>
                    <th>Coding Languages</th>
                    <th>Projects</th>
                </tr>
                </thead>



                <tbody>
                <tr>
                    <td>Illustrator</td>
                    <td>HTML & Css</td>
                    <td>Troodox</td>
                </tr>
                <tr>
                    <td>Photoshop</td>
                    <td>Typescript</td>
                    <td>Vite Services</td>
                </tr>
                <tr>
                    <td>Canva</td>
                    <td>NextJs</td>
                    <td>Logo Design</td>
                </tr>
                </tbody>



            </table>
        </div>
    )
}
