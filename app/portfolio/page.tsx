"use client";
import Link from 'next/link';

const jobs = [
  { id: 1, title: 'Job 1', type: 'graphics', description: 'This is the description for Job 1.' },
  { id: 2, title: 'Job 2', type: 'graphics',  description: 'This is the description for Job 2.' },
  { id: 3, title: 'Job 3', type: 'graphics',  description: 'This is the description for Job 3.' },
  { id: 4, title: 'Job 4', type: 'graphics',  description: 'This is the description for Job 4.' },
  { id: 5, title: 'Job 5', type: 'dev',  description: 'This is the description for Job 5.' },
  { id: 6, title: 'Job 6', type: 'dev',  description: 'This is the description for Job 6.' },
  // Add more job objects here
];

export default function Portfolio() {

  return (
    <main className="mx-auto px-2.5 max-w-screen-lg py-10 text-center">
      <h1 className="mb-5 text-lg font-bold tracking-wider">Portfolio</h1>
      <div className="flex flex-wrap">
      {jobs.map((job) => (
        <Link key={job.id} href={`/portfolio/${job.id}`} className={`w-full sm:w-1/2 lg:w-1/4 p-2`}>
          <div className={`bg-gray-200 rounded-lg p-6 hover:bg-yellow-600 text-black`}>
            <h2 className="text-lg font-bold mb-2">{job.title}</h2>
            <p>{job.description}</p>
          </div>
        </Link>
      ))}
    </div>
    </main>
  );
}
