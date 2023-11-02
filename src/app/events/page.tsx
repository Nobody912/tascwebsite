import Image from "next/image";

export default function Events() {
  return (
    <div className="flex flex-col w-full grow justify-start items-center">
      <section className="relative flex justify-center items-end w-full h-auto aspect-[2/1] md:aspect-[5/1] pt-16 pb-4">
        <div className="w-full max-w-screen-xl px-4">
          <h1 className="text-6xl text-white font-black">Our Events</h1>
        </div>
        <Image
          className="z-[-1] object-cover"
          src="/media/img/gallery/DSC_2933-Enhanced-NR.jpg"
          alt="Banner image showing crowd at TASC Night Market 2023"
          fill
        />
      </section>
      <div className="flex flex-col w-full max-w-screen-xl px-4 md:py-16 gap-4 md:gap-8">
        <section className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="relative flex w-full max-w-[20rem] sm:max-w-none sm:w-1/3 h-auto aspect-square rounded-md overflow-clip">
            <Image
              className="object-cover"
              src="/media/img/gallery/DSC_2325-Enhanced-NR.jpg"
              alt="Taiwanese Braised Pork booth at TASC Night Market"
              fill
            />
          </div>
          <div className="flex flex-col w-full sm:w-2/3">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Welcome Back Week 🔥
            </h1>
            <p className="text-lg md:text-2xl lg:text-4xl text-neutral-600">
              A series of events that kick off the semester like the sizzling
              hot welcome back BBQ, refreshing shaved ice social, and
              exhilarating outdoor field day!
            </p>
          </div>
        </section>
        <section className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="flex flex-col w-full sm:w-2/3">
            <h1 className="text-4xl lg:text-6xl font-bold">Night Market 🏮</h1>
            <p className="text-lg md:text-2xl lg:text-4xl text-neutral-600">
              A vibrant night of exciting performances, delicious street food,
              and fun games that will transport you right into a Taiwanese night
              market!
            </p>
          </div>
          <div className="relative flex w-full max-w-[20rem] sm:max-w-none sm:w-1/3 h-auto aspect-square rounded-md overflow-clip">
            <Image
              className="object-cover"
              src="/media/img/gallery/nm_20.jpg"
              alt="Balloon toss game during TASC's Welcome Back Week Field Day"
              fill
            />
          </div>
        </section>
        <section className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="relative flex w-full max-w-[20rem] sm:max-w-none sm:w-1/3 h-auto aspect-square rounded-md overflow-clip">
            <Image
              className="object-cover"
              src="/media/img/gallery/DxO_DeepPRIME_Denoised_IMG_5684-CR2_DxO_DeepPRIME.jpg"
              alt="Picture of attendees at TASC's Lunar New Year Celebration"
              fill
            />
          </div>
          <div className="flex flex-col w-full sm:w-2/3">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Lunar New Year 🐲
            </h1>
            <p className="text-lg md:text-2xl lg:text-4xl text-neutral-600">
              A celebration of the Lunar New Year featuring delicious traditional cuisine and amazing performances!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
