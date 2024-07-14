import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const SOCIALS = [
  {
    name: "Github",
    url: "https://github.com/darius-kul",
  },
  {
    name: "LinkedIn",
    url: "https://lt.linkedin.com/in/darius-kulevi%C4%8Dius-06ba5a205",
  },
];

export default function Home() {
  return (
    <main className=" bg-black min-h-screen flex justify-center items-center">
      <div className="p-6">
        <Card className="bg-[#1F1F1F] max-w-[400px] border-none box shadow-card_custom">
          <CardHeader>
            <Image
              src="/darius-img.jpg"
              alt="darius"
              width={88}
              height={88}
              className="rounded-full m-auto"
            />
            <CardTitle className="text-white !mt-[24px] block">
              Darius Kulevičius
            </CardTitle>
            <CardDescription className="text-[#C4F82A] mx-auto font-bold">
              Kaunas, Lithuania
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {SOCIALS.map((social) => (
                <Button key={social.name} asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
