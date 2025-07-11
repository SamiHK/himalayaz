"use client";

import Image from "next/image";
import Link from "next/link";

import { ColourfulText } from "@saasfly/ui/colorful-text";
import { ContainerScroll } from "@saasfly/ui/container-scroll-animation";

export function VideoScroll({
  dict,
}: {
  dict: Record<string, string> | undefined;
}) {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              {dict?.first_text}
              <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-6xl">
                {dict?.second_text1}
                <ColourfulText text={dict?.time_text ?? ""} />
                {dict?.second_text2}
              </span>
            </h1>
          </>
        }
      >
        <Link href="https://x.com/i/broadcasts/1eaKbaYVAXkxX" target="_blank">
          <Image
            src={`https://cdnv2.ruguoapp.com/FoAVSRtT2zVc96oDjAWrd5TvXXQ4v3.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto h-full rounded-2xl object-cover object-left-top"
            draggable={false}
          />
        </Link>
      </ContainerScroll>
    </div>
  );
}
