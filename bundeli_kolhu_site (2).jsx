import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50 text-brown-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-amber-100 to-amber-50">
        <h1 className="text-5xl font-bold mb-4">Bundeli Kolhu</h1>
        <p className="text-xl mb-6">Made in Bundelkhand – Pure. Honest. Traditional.</p>
        <Button size="lg" className="rounded-2xl px-8 py-4 text-lg">Shop Now</Button>
      </section>

      {/* Vision Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Vision & Mission</h2>
          <p className="mb-2">Heritage Revived, Modernized: Bringing back Bundelkhand’s traditional Kolhu (Stone pressed) and Bilona (hand-churned) practices.</p>
          <p className="mb-2">Purity with Trust: Authentic oils, A2 ghee, and jaggery that are pure, chemical-free, and premium.</p>
          <p className="italic font-medium mt-4">“From Bundelkhand to the World - Pure. Honest. Traditional.”</p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image src="/kolhu.jpg" alt="Kolhu" width={600} height={400} />
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-amber-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Card key={idx} className="rounded-2xl shadow-md hover:shadow-xl transition">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Image src={product.image} alt={product.name} width={250} height={250} className="rounded-xl mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.desc}</p>
                  <Button className="rounded-xl">Buy Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-200 py-8 mt-12 text-center">
        <p className="font-medium">© {new Date().getFullYear()} Bundeli Kolhu. All rights reserved.</p>
      </footer>
    </main>
  );
}

const products = [
  {
    name: "Bundeli A2 Ghee",
    desc: "Made in Bundelkhand using traditional Bilona Method.",
    image: "/Ghee.png",
  },
  {
    name: "Pure Groundnut Oil",
    desc: "Stone Pressed 'Pehli Dhaar' – rich and nutritious.",
    image: "/GroundNut.png",
  },
  {
    name: "Pure Mustard Oil",
    desc: "Stone Pressed 'Pehli Dhaar' – pungent & heart-friendly.",
    image: "/Mustard.png",
  },
  {
    name: "Jaggery Powder",
    desc: "Made from finest sugarcanes – 100% chemical-free.",
    image: "/Jaggery powder.png",
  },
  {
    name: "Jaggery Cubes",
    desc: "Wholesome sweetness, rich in minerals & iron.",
    image: "/Jaggery_Cubes.png",
  },
];
