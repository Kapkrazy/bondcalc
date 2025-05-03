import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to BondCalc</h1>
      <p className="text-lg">Your go-to mortgage calculator for South Africa.</p>
      <Image
        src="/images/hero-image.jpg"
        alt="Hero Image"
        width={500}
        height={300}
        className="rounded-lg shadow-lg"
      />
    </main>
  );
}
