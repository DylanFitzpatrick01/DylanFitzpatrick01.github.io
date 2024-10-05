import NavBar from "../components/navigation/navbar"
import Image from "next/image";
import fiserv from "../images/fiserv.png"
import irlca from "../images/irlca.png"

export default function Page(){
    return(
        <div>
            <NavBar />
            <div className="flex justify-center font-mono text-4xl pt-4 pb-2 font-bold">
                <h1>Experience</h1>
            </div>
            <div className="flex flex-col font-mono">
                <h1 className="flex text-3xl pt-6 pb-2 items-center justify-center">Summary</h1>
                <p className="px-20 pb-10 break-words">
                    I was initially introduced to programming through my college course, B.A.(Mod.) in Computer Science, Trinity College Dublin.
                    The vast majority of my programming experience is in Java, but I also have a high competency in a variety of lagnuages, such as Python, C# and React.
                    I am also experienced in with a variety of technologies, such as SQL, Docker, CI/CD pipelines and Version Control (Git, GitHub, GitLab).
                    I am currently employed by Fiserv in Dublin as a Graduate Software Engineer, and I have previously completed an internship with IRLCA Limited in the Summer of 2023.
                </p>
            </div>
            <div className="flex flex-col font-mono">
                <h1 className="flex text-3xl pt-6 pb-2 items-center justify-center">Fiserv - Graduate Software Engineer (June 2024 - Present)</h1>
                <p className="px-20 pb-2 break-words">
                    I joined Fiserv on the 4th of June 2024 as a Graduate Software Engineer, as part of their Technology Analyst program. I work on the OmniPay platform with the Streamers team.
                    The Streamers team works on a variety of microservices, which are programmed in Java. 
                    First my first 3 months as part of the team, my main workload has comprised of test automation work.
                    I currently write BDD test cases using Cucumber adn Python and have also written multiple scripts using Python to save testers tens of hours weekly on tasks that would have previously taken hours to perform manually.
                    As well as this, I have gained a lot of very useful experience in SQL.
                </p>
                <div className="flex justify-center py-10">
                    <Image
                        className="flex py-10 place-content-center"
                        src={fiserv}
                        width={280}
                        height={280}
                        alt="Fiserv Logo"
                        />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center font-mono">
                <h1 className="text-3xl pt-6 pb-2">IRLCA Limited - Software Developer Intern (June 2023 - August 2023)</h1>
                <p className="px-20 pb-2 break-words">
                    I completed a 12 week internship at IRLCA Ltd in the summer of 2023.
                    During my time here, I was a member of the backend team.
                    My work mostly comprised of creating a variety of CRUD operations using .NET C# within a Domain Driven Design (DDD) based codebase. 
                    As well as this, I gained very useful experience in SQL database manipulation using Fluent API.
                    This internship gave me great exposure into the Agile methodology framework.
                    I participated in daily standups and bi-weekly sprint reviews.
                </p>
                <div className="flex justify-center py-10">
                    <Image
                        src={irlca}
                        width={400}
                        height={400}
                        alt="Fiserv Logo"
                    />
                </div>
            </div>
            <div className="flex flex-col font-mono">
                <h1 className="flex text-3xl pt-6 pb-2 items-center justify-center">Trinity College Dublin - Demonstrator (September 2023 - April 2024)</h1>
                <p className="px-20 pb-2 break-words">
                    During my final year in college, I was a demonstrator/TA for both semesters.
                </p>
                <p className="px-20 pb-2 break-words">
                    During Semester 1, I was a demonstrator for the 3rd year module Software Engineering (Module Code: CSU33012).
                    My main responsibilities consisted of helping students with any software setup issues that the studetns were facing as well as assisting them with the use of Springboot.
                </p>
                <p className="px-20 pb-10 break-words">
                    In Semester 2, I was a demonstrator for the 1st/2nd year module Mathematics II (Module Code: CSU12002).
                    During my time demonstrating, my main responsibility was to answer any questions the students had about the tutorial sheets they were assigned in the previous week.
                </p>
            </div>
        </div>
    )
}