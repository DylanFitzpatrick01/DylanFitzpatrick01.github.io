import NavBar from "../components/navigation/navbar"

export default function Page() {
    return (
        <div>
            <NavBar />
            <div className="flex justify-center font-mono text-4xl pt-4 pb-2 font-bold">
                <h1>About Me</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-10 break-words">
                <p className="px-20 pb-10 break-words">
                    My name is Dylan Fitzpatrick. I am 23 years old and I am originally from Naas, Co. Kildare, Ireland.
                    I currently work as a Graduate Software Engineer at Fiserv in Dublin. I also had an internship as a Software Developer at IRLCA Limited during the summer of 2023.
                    I hold a First Class Honours B.A. (Mod.) in Computer Science from Trinity College Dublin.
                    In my spare time, I enjoy playing video games on my PC and going to the gym.
                </p>
            </div>
        </div>
    )
}