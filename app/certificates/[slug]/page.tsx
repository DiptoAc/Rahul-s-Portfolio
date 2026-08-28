import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { certificates, getCertificate } from "@/app/data/certificates";

export function generateStaticParams() {
  return certificates.map(({ slug }) => ({ slug }));
}

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const certificate = getCertificate(slug);

  if (!certificate) notFound();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 rounded-2xl border border-slate-100 bg-slate-50 p-2">
              <Image src={certificate.icon} alt="" fill className="object-contain p-2" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-600">Verified credential</p>
              <h1 className="text-xl font-bold sm:text-2xl">{certificate.name}</h1>
              <p className="text-sm text-slate-500">{certificate.description}</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/certificates" className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold hover:bg-slate-50">
              All certificates
            </Link>
            <a href={certificate.file} download={`${certificate.name}.pdf`} className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-700">
              Download PDF
            </a>
          </div>
        </div>
        <div className="h-[calc(100vh-190px)] min-h-[560px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <iframe src={`${certificate.file}#toolbar=0`} className="h-full w-full" title={certificate.name} />
        </div>
      </div>
    </main>
  );
}
