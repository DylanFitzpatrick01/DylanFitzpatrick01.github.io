import Image from "next/image";
import Link from 'next/link';
import headshot from './images/headshot.png';
import linkedin from './images/linkedin.png'
import github from './images/github-mark.png'

export default function Home() {
  return (
    <div>
      <div className="flex justify-center font-mono text-4xl pt-10 pb-2">
        <h1>Dylan Fitzpatrick</h1>
      </div>
      <div className="flex justify-center font-mono pb-2">
        <h2>Graduate Software Engineer @ Fiserv</h2>
      </div>
      <div className="flex justify-center items-center pb-20">
        <Image
          className="rounded-full place-content-center"
          src={headshot}
          width={500}
          height={500}
          alt="Headshot of Dylan Fitzpatrick"
        />
      </div>
      <div className="flex justify-center space-x-10 text-4xl">
        <Link href="/about-me" className=" hover:text-gray-500">
          About Me
        </Link>
        <Link href="/experience" className=" hover:text-gray-500">
          Experience
        </Link>
        <Link href="/education" className=" hover:text-gray-500">
          Education
        </Link>
        <Link href="/projects" className=" hover:text-gray-500">
          Projects
        </Link>
      </div>
      <div className="flex justify-center text-xl pt-10 space-x-2">
        <p className="hover:text-gray-500">
          Email: dylanfitzpatrick33@gmail.com
        </p>
        <p>|</p>
        <a href="https://www.linkedin.com/in/dylanfitzpatrick01/" target="_blank" className="hover:text-gray-500 flex">
          LinkedIn
        </a>
        <a href="https://www.linkedin.com/in/dylanfitzpatrick01/" target="_blank" className="flex filter hover:brightness-50">
          <Image
            className="hover:brightness-20"
            src={linkedin}
            width={30}
            height={30}
            alt="LinkedIn Logo"
          />
        </a>
        <p>|</p>
        <a href="https://www.github.com/DylanFitzpatrick01/" target="_blank" className="flex filter hover:brightness-50">
          GitHub
        </a>
        <a href="https://www.github.com/DylanFitzpatrick01/" target="_blank">
        <Image
            src={github}
            width={30}
            height={30}
            alt="LinkedIn Logo"
          />
        </a>
      </div>
    </div>
  );
}
