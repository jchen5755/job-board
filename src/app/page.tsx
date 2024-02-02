import JobListItem from "@/components/JobListItem";
import prisma from "@/lib/prisma";
import { Job } from "@prisma/client";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main>
      {jobs.map((job: Job) => (
        <JobListItem job={job} key={job.id} />
      ))}
    </main>
  );
}
