import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillFacebook,
  AiOutlineMail,
  AiOutlinePhone,
} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import profileImage from '../public/google.jpg';
import image1 from '../public/Screenshot (58).png';
import image2 from '../public/Screenshot (6).png';
import image3 from '../public/Screenshot (62).png';
import image4 from '../public/Screenshot (150).png';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Tailwind CSS',
  'UI/UX Design',
  'MongoDB',
  'MySQL',
  'Git & GitHub',
  'Figma',
];

const highlights = [
  {
    title: 'Full-Stack Development',
    description:
      'Build scalable web apps with clean architecture, performant APIs, and polished user experiences.',
  },
  {
    title: 'Mobile-First Interfaces',
    description:
      'Craft responsive, accessible interfaces that feel natural on every screen size.',
  },
  {
    title: 'Product Collaboration',
    description:
      'Work closely with teams to translate ideas into production-ready features.',
  },
];

const projects = [
  {
    title: 'Interactive Web Dashboard',
    description:
      'Data-driven dashboard with intuitive layouts, responsive charts, and streamlined workflows.',
    image: image1,
  },
  {
    title: 'Mobile Experience Suite',
    description:
      'Modern mobile UI flows with clean navigation and engaging visual treatments.',
    image: image2,
  },
  {
    title: 'Service Booking Platform',
    description:
      'End-to-end booking experience featuring smart search, scheduling, and notifications.',
    image: image3,
  },
  {
    title: 'Portfolio & Brand Identity',
    description:
      'A cohesive digital identity that blends storytelling with high-impact visuals.',
    image: image4,
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Gihan Sanjeewa | Portfolio</title>
        <meta
          name="description"
          content="Professional portfolio of Gihan Sanjeewa, full-stack developer and IT undergraduate."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');`}
        </style>
      </Head>

      <main className="min-h-screen bg-slate-50 text-slate-900 font-['Plus_Jakarta_Sans'] transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl" />
            <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
          </div>

          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-yellow-300/80">Portfolio</p>
              <h1 className="text-xl font-semibold">Gihan Sanjeewa</h1>
            </div>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-yellow-300 hover:text-yellow-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-yellow-300 dark:hover:text-yellow-200"
              >
                <BsFillMoonStarsFill />
                {darkMode ? 'Dark' : 'Light'}
              </button>
              <a
                href="https://drive.google.com/file/d/1XZmNmtfTAGnpSo60mBauLRAAsQuxugX2/view?usp=sharing"
                className="rounded-full bg-yellow-300 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-yellow-200"
              >
                Download CV
              </a>
            </div>
          </nav>

          <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-16 pt-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-yellow-200">
                Full-stack developer · IT undergraduate
              </div>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Building modern digital experiences that feel effortless.
              </h2>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                I am an IT undergraduate and full-stack developer focused on crafting scalable web
                applications with delightful UX. I blend clean engineering practices with thoughtful
                interface design to deliver products that are reliable, accessible, and visually
                refined.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 dark:border-slate-800">
                  <HiOutlineLocationMarker />
                  Sri Lanka
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 dark:border-slate-800">
                  <AiOutlineMail />
                  gihansanjeewa0000@gmail.com
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 dark:border-slate-800">
                  <AiOutlinePhone />
                  +94 76 853 7941
                </span>
              </div>
              <div className="flex items-center gap-4 text-2xl text-slate-500 dark:text-slate-300">
                <a href="https://github.com/GihanSanjeewa" className="transition hover:text-yellow-600 dark:hover:text-yellow-200">
                  <AiOutlineGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/gihan-sanjeewa-061652276/"
                  className="transition hover:text-yellow-600 dark:hover:text-yellow-200"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=100094107186067"
                  className="transition hover:text-yellow-600 dark:hover:text-yellow-200"
                >
                  <AiFillFacebook />
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-[36px] border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-950 dark:shadow-none"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-2xl bg-yellow-400/30 blur-2xl" />
              <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-2xl bg-sky-500/30 blur-2xl" />
              <Image
                src={profileImage}
                alt="Portrait of Gihan Sanjeewa"
                className="rounded-[28px] object-cover"
              />
            </motion.div>
          </section>
        </div>

        <section className="mx-auto w-full max-w-6xl space-y-10 px-6 py-12">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.4em] text-yellow-500 dark:text-yellow-200">What I do</p>
            <h3 className="text-3xl font-semibold">Services & Focus Areas</h3>
            <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
              I build end-to-end digital products that combine engaging interfaces, robust back-end
              systems, and thoughtful user experiences. Each project is designed to help teams
              launch faster and delight their users.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-yellow-300/50 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-none"
              >
                <h4 className="text-xl font-semibold text-yellow-600 dark:text-yellow-200">{item.title}</h4>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl space-y-10 px-6 py-12">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.4em] text-yellow-500 dark:text-yellow-200">Toolkit</p>
            <h3 className="text-3xl font-semibold">Skills & Technologies</h3>
            <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
              A balanced mix of front-end engineering, back-end development, and product design
              skills that support the full product lifecycle.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl space-y-10 px-6 py-12">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.4em] text-yellow-500 dark:text-yellow-200">Selected work</p>
            <h3 className="text-3xl font-semibold">Projects & Case Studies</h3>
            <p className="max-w-3xl text-base text-slate-600 dark:text-slate-300">
              A snapshot of projects that highlight my approach to problem-solving, user experience,
              and polished execution.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/50 dark:shadow-none"
              >
                <div className="relative h-52">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <h4 className="text-xl font-semibold text-yellow-600 dark:text-yellow-200">{project.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl space-y-8 px-6 py-12">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12 dark:border-slate-800 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:shadow-none">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-yellow-500 dark:text-yellow-200">Let’s connect</p>
                <h3 className="text-3xl font-semibold">Ready to collaborate?</h3>
                <p className="mt-3 max-w-xl text-base text-slate-600 dark:text-slate-300">
                  I am open to internships, freelance projects, and full-time opportunities where I
                  can contribute to building impactful software. Let’s talk about how I can help
                  your team.
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <AiOutlineMail />
                  gihansanjeewa0000@gmail.com
                </span>
                <span className="inline-flex items-center gap-2">
                  <AiOutlinePhone />
                  +94 76 853 7941
                </span>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Gihan Sanjeewa. Crafted with modern UI/UX principles.
            </p>
            <div className="flex items-center gap-4 text-xl text-slate-500 dark:text-slate-300">
              <a href="https://github.com/GihanSanjeewa" className="transition hover:text-yellow-600 dark:hover:text-yellow-200">
                <AiOutlineGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/gihan-sanjeewa-061652276/"
                className="transition hover:text-yellow-600 dark:hover:text-yellow-200"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100094107186067"
                className="transition hover:text-yellow-600 dark:hover:text-yellow-200"
              >
                <AiFillFacebook />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
