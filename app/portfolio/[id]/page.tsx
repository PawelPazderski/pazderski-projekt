"use client"

export default function JobDetails({ params }: { params: { id: string } }) {

  // Fetch job details based on the id from an API or any data source

  return (
    <div className="mx-auto px-2.5 max-w-screen-lg py-10 text-center">
      <h1>Job Details - ID: {params.id}</h1>
      {/* Render job details here */}
    </div>
  );
}
