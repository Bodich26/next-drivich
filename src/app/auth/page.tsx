import { Container } from "@/shared";
import Link from "next/link";
import Image from "next/image";
import { AuthSwitch } from "@/features";

export default function Auth() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Container className="w-full">
        <section className="flex justify-between bg-color-white rounded-md shadow-block h-[709px]">
          <div className="flex-1 flex flex-col p-3">
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={131} height={54} />
            </Link>
            <div className="flex-1 flex items-center justify-center">
              <AuthSwitch />
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image src="/banner.png" alt="Banner" width={594} height={709} />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
              <h1 className="font-bold text-7xl text-color-white text-center">
                Welcome Back!
              </h1>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
