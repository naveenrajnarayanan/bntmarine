import Image from "next/image";
import { PageGrid } from "@/components/system/Container";
import { Text } from "@/components/system/Text";

export function Statement() {
  return (
    <PageGrid
      as="section"
      id="statement"
      data-scroll-reveal
      className="
        section-space
        scroll-mt-[56px]
        bg-background-primary
        md:scroll-mt-[68px]
      "
    >
      <div
        data-statement-zoom
        className="col-span-4 md:col-span-12 lg:col-span-12"
      >
        <div className="mx-auto w-full max-w-7xl">

          {/* STATEMENT */}
          <div className="w-full max-w-[92rem]">
            <Text
              as="h3"
              variant="h3"
              className="
                max-w-none
                text-left
                text-text-primary
                tracking-[-0.045em]
                leading-[0.98]

                text-[2rem]
                sm:text-[2.5rem]
                md:text-[3.1rem]
                lg:text-[3.8rem]
                xl:text-[4.3rem]
              "
            >
             Italian Heritage. Indian Craftsmanship.

            </Text>
          </div>

          {/* CONTENT */}
          <div
            className="
              mt-space-32
              grid
              grid-cols-1
              items-center

              md:mt-space-16
              md:grid-cols-[1.25fr_0.75fr]
              md:gap-space-24

              lg:gap-space-40
            "
          >

            {/* PARAGRAPH */}
            <div
              className="
                w-full
                max-w-[44rem]

                md:pt-0
                lg:pt-4
              "
            >
              <Text
                variant="body-large"
                tone="secondary"
                className="
                  indent-[1.5rem]
                  text-[1rem]
                  leading-[1.8]
                  tracking-[0.005em]
                  text-text-primary/75

                  sm:text-[1.05rem]

                  md:indent-[2rem]
                  md:text-[1.25rem]
                  md:leading-[2]

                  lg:text-[1.35rem]
                "
              >
                Our modern/classic designs up to 20 metres utilise the latest in{" "}
                <span className="font-semibold text-text-primary">
                  wood/epoxy construction
                </span>{" "}
                technology.{" "}
                <span className="font-semibold text-text-primary">
                  Indian Mahogany
                </span>
                , specially milled to our specifications, is the core
                construction material. Its mechanical properties, density and
                beauty are a perfect match for our{" "}
                <span className="font-semibold text-text-primary">
                  wood/epoxy construction techniques
                </span>
                , producing vessels that are both enduring and{" "}
                <span className="font-semibold text-text-primary">
                  deeply refined
                </span>
                .
              </Text>
            </div>

            {/* IMAGE */}
            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[30rem]

                md:justify-self-end
                md:-translate-x-6
                md:translate-y-3
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[20px]
                  bg-background-secondary

                  sm:rounded-[24px]
                  md:scale-[0.95]
                "
              >
                <div
                  className="
                    relative
                    aspect-[4/3]
                    w-full
                    overflow-hidden
                  "
                >
                  <Image
                    src="/Img/Trimaran_Glass_Bottom_Ferry/Ocean-Rafale-7.jpg"
                    alt="Trimaran glass bottom ferry"
                    fill
                    sizes="
                      (max-width: 767px) 100vw,
                      (max-width: 1023px) 45vw,
                      30rem
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-[1400ms]
                      ease-out
                      hover:scale-[1.035]
                    "
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageGrid>
  );
}