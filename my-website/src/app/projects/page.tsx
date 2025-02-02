import NavBar from "../components/navigation/navbar"
import Link from 'next/link'

export const metadata = {
    title: "Projects | Dylan Fitzpatrick",
    description: "Projects Page",
}

export default function Page() {
    return (
        <div>
            <NavBar />
            <div className="flex justify-center font-mono text-4xl pt-4 pb-2 font-bold">
                <h1>Projects</h1>
            </div>
            <div>
                <h2 className="flex text-2xl pt-6 pb-2 items-center justify-center font-bold">Final Year Project</h2>
                <div className="px-20 pb-10 break-words">My Final Year Project was entitled &quot;The Influence of Video and Audio Quality in Emotion Detection&quot; and I was supervised by Professor Khurshid Ahmad.
                    The goal of this project was to take datasets of visual/audio emotion expression, run them through various emotion recognition softwares and see how the results are affected based
                    on the quality of the media.
                    To do this I wrote several scripts in Python to perform actions on the .csv files that the emotion scores were outputted to. I then used a variety of statistical tests to determine the effects
                    of quality degradation in emotion recognition.
                    The statistical tests used were Cohen&apos;s Kappa, Spearman&apos;s Rank Ordered Correlation Coefficient and the Kruskal-Wallis Test.
                <Link className = "hover:text-gray-500 flex text-emerald-400 pt-2" href={'/Final_Year_Project.pdf'}  target="_blank"  rel="noopener noreferrer" locale="false" download>Click here to download</Link>
                </div>
                <h2 className="flex text-2xl pt-6 pb-2 items-center justify-center font-bold">DANCE - Detecting ANtipatterns in a C++ Environment</h2>
                <div className="px-20 pb-10 break-words"> A project as part of the Software Engineering Project II module in the 3rd year of my Computer Science degree.
                    This project was a collaboration of a team of 3rd and 2nd year students, totaling 10 members. I took on a
                    managerial position in this project. The goal of this project is to use Clang APIs in Python to detect common
                    antipatterns within a C++ codebase such as deadlocking etc. and give the user warnings/errors based on the
                    antipattern(s) found.
                    <a href="https://github.com/DylanFitzpatrick01/detect-antipatterns" target="_blank" className="hover:text-gray-500 flex text-emerald-400 pt-2">
                        Github Repository
                    </a>
                </div>
                <h2 className="flex text-2xl pt-6 pb-2 items-center justify-center font-bold">Image Analysis and Rating</h2>
                <div className="px-20 pb-10 break-words"> A project as part of the module Software Engineering Project I in the 2nd year of my degree. This was a group project
                    comprised of 6 members including myself. This project allows a user to upload an image to a website in order to rate
                    an image based on various metrics which our team chose, using NextJS and NodeJS. The metrics used were: brisque score,
                    tags, trend search i.e. the image&apos;s relevance, reverse image search to show how many similar images exist and the type
                    of the image e.g. clip art, photograph etc. The backend was written using ReactJS. My main contribution to the project
                    was implementing the reverse image search metric.
                    <a href="https://github.com/AyoKassim/Shutterstock" target="_blank" className="hover:text-gray-500 flex text-emerald-400 pt-2">
                        Github Repository
                    </a>
                </div>
                <h2 className="flex text-2xl pt-6 pb-2 items-center justify-center font-bold">GitHub Statistics</h2>
                <div className="px-20 pb-10 break-words">A web based project which takes data from Microsoft&apos;s open source calculator. Shows the user various graphs
                    displaying contributors statistic e.g. most issues opened/closed. Also allows the user to search for a specific
                    contributor. My contribution to this project was implementing a MySQL database to store the data.
                    <a href="https://github.com/eimearryan/CSU33012-Main-Project" target="_blank" className="hover:text-gray-500 flex text-emerald-400 pt-2">
                        Github Repository
                    </a>
                </div>
                <h2 className="flex text-2xl pt-6 pb-2 items-center justify-center font-bold">Vancouver Bus Management System</h2>
                <div className="px-20 pb-10 break-words"> A Java based program which implements Dijkstra&apos;s algorithm. This program allows to user to find the shortest
                    route between two bus stops, search stop details by the stop&apos;s name and search for a stop based on the arrival time.
                    The data is taken from 3 .txt files.
                    <a href="https://github.com/DylanFitzpatrick01/Bus-Management-System" target="_blank" className="hover:text-gray-500 flex text-emerald-400 pt-2">
                        Github Repository
                    </a>
                </div>
                <h2 className="flex text-2xl pt-6 pb-2 items-center justify-center font-bold">Space Invaders</h2>
                <div className="px-20 pb-10 break-words"> A solo project made in Processing 3 which allows the user to play a game akin to Space Invaders.
                    <div className="flex text-2xl pt-6 pb-2 font-bold">Demo</div>
                    <video className="h-full w-full rounded-lg" controls>
                        <source src="/spaceinvadersdemo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <a href="https://github.com/DylanFitzpatrick01/AlienHunterGame" target="_blank" className="hover:text-gray-500 flex text-emerald-400 pt-2">
                        Github Repository
                    </a>
                </div>
                <h2 className="flex text-2xl pt-6 pb-2 items-center justify-center font-bold">Web Calculator</h2>
                <div className="px-20 pb-10 break-words"> A group project as part of the Software Engineering module in 3rd year. The goal was to create a functioning calculator
                    and deploy it as a web app. My contribution to the project was connecting the frontend to the backend which I learned a lot
                    from.
                    <a href="https://github.com/MylanaBulat/webCalculator" target="_blank" className="hover:text-gray-500 flex text-emerald-400 pt-2">
                        Github Repository
                    </a>
                </div>
                <h2 className="flex text-2xl pt-6 pb-2 items-center justify-center font-bold">File Retrieval Protocol</h2>
                <div className="px-20 pb-10 break-words"> The first assignment in my Computer Networks module in 3rd year. The aim of this assignment was to provide a means for one or more
                    clients to retrieve files from one or more workers based on User Datagram Protocol (UDP) packets. This is done through the use of an
                    ingress node which communicates with both the client and worker nodes.
                    <a href="https://github.com/DylanFitzpatrick01/File-Retrieval-Protocol" target="_blank" className="hover:text-gray-500 flex text-emerald-400 pt-2">
                        Github Repository
                    </a>
                </div>
                <h2 className="flex text-2xl pt-6 pb-2 items-center justify-center font-bold">Flow Forwarding</h2>
                <div className="px-20 pb-10 break-words"> The second assignment in my Computer Networks module in 3rd year. The aim of this assignment was to implement forward flows of packets.
                    Communication is achieved between an ”employee” and a ”deployment server” by including the destination address in the packet header.
                    The packet is then sent sent through a series of ”forwarders” which consult a ”controller” to determine where the next hop is. I put my
                    own personal twist on it by allowing the user to request an appointment time and would be returned whether or not that appointment is
                    available.
                    <a href="https://github.com/DylanFitzpatrick01/Flow-Forwarding" target="_blank" className="hover:text-gray-500 flex text-emerald-400 pt-2">
                        Github Repository
                    </a>
                </div>
            </div>
        </div>

    )
}