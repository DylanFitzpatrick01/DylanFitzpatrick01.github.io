import NavBar from "../components/navigation/navbar"
import Image from "next/image"
import graduate from "../images/graduation.png"
import graduate2 from "../images/graduation2.png"

export const metadata = {
    title: "Education | Dylan Fitzpatrick",
    description: "Education Page",
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <div className="flex justify-center font-mono text-4xl pt-4 pb-2 font-bold">
                <h1>Education</h1>
            </div>
            <div className="flex flex-col font-mono">
                <h1 className="flex text-3xl pt-6 pb-2 items-center justify-center">B.A. (Mod.) Computer Science, Trinity College Dublin (2020-2024)</h1>
                <div className="px-20 pb-10 break-words">
                    I hold a First Class Honours B.A.(Mod.) degree from Trinity College Dublin.
                    My overall grade at the end of the course was 77%.
                    Throughout my 4 years at college I gained invaluable experience in programming and computer science fundamentals.
                    I completed several individual and team projects which have helped me to learn and grow my programming and teamwork skills.
                    Projects that I have worked on throughout my degree can be seen on the &quot;Projects&quot; page.
                </div>
                <h2 className="flex text-2xl pt-6 pb-2 items-center justify-center">Relevant Coursework</h2>
                <div className="flex justify-center text-bold">
                    Modules of interest studied are:
                    <div className="flex px-10">
                        <ul>
                            <li>Algorithms and Data Structures</li>
                            <li>Software Engineering</li>
                            <li>Software Engineering Project</li>
                            <li>Artificial Intelligence</li>
                            <li>Machine Learning</li>
                            <li>Concurrent Systems and Operating Systems</li>
                            <li>Compiler Design</li>
                            <li>Information Management</li>
                            <li>Systems Programming</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-10 gap-6">
                <Image
                    src={graduate}
                    width={600}
                    height={500}
                    alt="Graduation Photo"
                />    
                <Image
                    src={graduate2}
                    width={500}
                    height={500}
                    alt="Graduation Photo 2"
                />    
            </div>
        </div>
    )
}