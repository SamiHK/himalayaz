import Image from "next/image";
import Link from "next/link";

import { AnimatedTooltip } from "@saasfly/ui/animated-tooltip";
import { BackgroundLines } from "@saasfly/ui/background-lines";
import { Button } from "@saasfly/ui/button";
import { ColourfulText } from "@saasfly/ui/colorful-text";
import * as Icons from "@saasfly/ui/icons";

import { CodeCopy } from "~/components/code-copy";
import { Comments } from "~/components/comments";
import { FeaturesGrid } from "~/components/features-grid";
import { RightsideMarketing } from "~/components/rightside-marketing";
import { VideoScroll } from "~/components/video-scroll";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

const people = [
  {
    id: 1,
    name: "tianzx",
    designation: "CEO at Nextify",
    image: "https://avatars.githubusercontent.com/u/10096899",
    link: "https://x.com/nextify2024",
  },
  {
    id: 2,
    name: "jackc3",
    designation: "Co-founder at Nextify",
    image: "https://avatars.githubusercontent.com/u/10334353",
    link: "https://x.com/BingxunYao",
  },
  {
    id: 3,
    name: "imesong",
    designation: "Contributor",
    image: "https://avatars.githubusercontent.com/u/3849293",
  },
  {
    id: 4,
    name: "ziveen",
    designation: "Contributor",
    image: "https://avatars.githubusercontent.com/u/22560152",
  },
  {
    id: 5,
    name: "Zenuncl",
    designation: "Independent Software Developer",
    image: "https://avatars.githubusercontent.com/u/3316062",
  },
  {
    id: 6,
    name: "Innei",
    designation: "Indie Developer",
    image: "https://avatars.githubusercontent.com/u/41265413",
  },
];

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="container">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
          <div className="flex h-full flex-col items-start">
            <BackgroundLines className="h-full">
              <div className="flex flex-col pt-4 md:pt-36 lg:pt-36 xl:pt-36">
                <div className="mt-20">
                  <div className="mb-6 max-w-4xl text-left text-4xl font-semibold dark:text-zinc-100 md:text-5xl md:leading-[4rem] xl:text-5xl xl:leading-[4rem]">
                    {dict.marketing.title ||
                      "Ship your apps to the world easier with "}
                    <ColourfulText text="Saasfly" />
                  </div>
                </div>

                <div className="mt-4">
                  <span className="text-neutral-500 dark:text-neutral-400 sm:text-lg">
                    {dict.marketing.sub_title ||
                      "Your complete All-in-One solution for building SaaS services."}
                  </span>
                </div>

                <div className="z-10 mb-4 mt-6 flex w-full flex-col justify-center space-y-4 sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0">
                  <Link
                    href="https://github.com/saasfly/saasfly"
                    target="_blank"
                  >
                    <Button className="h-12 rounded-full bg-blue-600 px-6 text-lg font-medium text-white hover:bg-blue-500">
                      {dict.marketing.get_started}
                      <Icons.ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>

                  <CodeCopy />
                </div>

                <div className="mt-4 flex w-full flex-col items-center justify-start xl:flex-row">
                  <div className="flex">
                    <AnimatedTooltip items={people} />
                  </div>
                  <div className="ml-8 flex flex-col items-center justify-start">
                    <div className="w-[340px]">
                      <span className="font-semibold">9 </span>
                      <span className="text-neutral-500 dark:text-neutral-400">
                        {dict.marketing.contributors.contributors_desc}
                      </span>
                    </div>
                    <div className="w-[340px]">
                      <span className="text-neutral-500 dark:text-neutral-400">
                        {dict.marketing.contributors.developers_first}
                      </span>
                      <ColourfulText text="2000" />
                      <span className="text-neutral-500 dark:text-neutral-400">
                        {dict.marketing.contributors.developers_second}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </BackgroundLines>
          </div>

          <div className="hidden h-full w-full bg-background xl:block">
            <div className="flex flex-col pt-44">
              <RightsideMarketing dict={dict.marketing.right_side} />
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-8 md:mt-[-180px] xl:mt-[-180px]">
        <FeaturesGrid dict={dict.marketing.features_grid} />
      </section>

      <section className="container pt-24">
        <div className="flex flex-col items-center justify-center pt-10">
          <div className="text-lg text-neutral-500 dark:text-neutral-400">
            {dict.marketing.sponsor.title}
          </div>
          <div className="mt-4 flex items-center gap-4">
            <Link href="https://go.clerk.com/uKDp7Au" target="_blank">
              <Image
                src="/images/clerk.png"
                width="48"
                height="48"
                alt="twillot"
              />
            </Link>
            <Link href="https://www.twillot.com/" target="_blank">
              <Image
                src="https://www.twillot.com/logo-128.png"
                width="48"
                height="48"
                alt="twillot"
              />
            </Link>
            <Link href="https://www.setupyourpay.com/" target="_blank">
              <Image
                src="https://www.setupyourpay.com/logo.png"
                width="48"
                height="48"
                alt="setupyourpay"
              />
            </Link>
            <Link href="https://opencollective.com/saasfly" target="_blank">
              <div className="flex items-center gap-2 rounded-xl border-2 border-dashed border-neutral-300 px-4 py-2 hover:bg-accent dark:border-neutral-700 dark:hover:bg-neutral-800/30">
                <Icons.Heart className="h-5 w-5 fill-pink-600 text-pink-600 dark:fill-pink-700 dark:text-pink-700" />
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-200">
                  {dict.marketing.sponsor.donate || ""}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="container pt-8">
        <VideoScroll dict={dict.marketing.video} />
      </section>

      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-24 md:px-0 md:pt-24 xl:px-0 xl:pt-24">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              {dict.marketing.people_comment.title}
            </h1>
          </div>
          <div className="mb-6 text-lg text-neutral-500 dark:text-neutral-400">
            {dict.marketing.people_comment.desc}
          </div>

          <div className="w-full overflow-x-hidden">
            <Comments />
          </div>
        </div>
      </section>
    </>
  );
}
