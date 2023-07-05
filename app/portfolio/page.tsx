"use client";
import Link from 'next/link';

const jobs = [
  { id: 1, title: 'Job 1', description: 'This is the description for Job 1.' },
  { id: 2, title: 'Job 2', description: 'This is the description for Job 2.' },
  { id: 3, title: 'Job 3', description: 'This is the description for Job 3.' },
  { id: 4, title: 'Job 4', description: 'This is the description for Job 4.' },
  { id: 5, title: 'Job 5', description: 'This is the description for Job 5.' },
  { id: 6, title: 'Job 6', description: 'This is the description for Job 6.' },
  // Add more job objects here
];

export default function Portfolio() {

  return (
    <main className="mx-auto px-2.5 max-w-screen-lg py-10">
      <h1 className="mb-3 text-lg">Portfolio</h1>
      <div className="flex flex-wrap">
      {jobs.map((job) => (
        <Link key={job.id} href={`/jobs/${job.id}`} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
          <div className="bg-gray-100 rounded-lg p-6 hover:bg-gray-200 text-black">
            <h2 className="text-lg font-bold mb-2">{job.title}</h2>
            <p>{job.description}</p>
          </div>
        </Link>
      ))}
    </div>
    </main>
  );
}
