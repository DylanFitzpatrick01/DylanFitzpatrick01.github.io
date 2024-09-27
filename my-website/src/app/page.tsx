import Image from "next/image";
import Link from 'next/link';
import headshot from './images/headshot.png';

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
      <div className="flex justify-center space-x-10">
        <Link href="/experience" className="text-4xl hover:text-gray-500">
          Experience
        </Link>
        <Link href="/education" className="text-4xl hover:text-gray-500">
          Education
        </Link>
        <Link href="/projects" className="text-4xl hover:text-gray-500">
          Projects
        </Link>
      </div>
    </div>
  );
}
