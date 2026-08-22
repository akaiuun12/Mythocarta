import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { MapExperience } from "@/components/map/MapExperience";
import { StructuredData } from "@/components/StructuredData";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative h-dvh w-full overflow-hidden">
      <StructuredData />
      <Header />
      <MapExperience />
    </main>
  );
}
