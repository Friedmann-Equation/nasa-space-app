import { BentoCard, BentoGrid } from "@/components/BentoGrid";
import { Bot } from "lucide-react";

const features = [
  {
    Icon: Bot,
    name: "Machine Learning Preview",
    description:
      "Integrating machine learning to astrophysics, we are working to modeling datasets.",
    href: "",
    cta: "",
    className: "",
    background: (
      <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)] ">
        <video
          src="https://res.cloudinary.com/dzaky/video/upload/v1728183847/testing-machine-learning_xmnubn.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none h-full w-full object-cover  group-hover:scale-105"
        />
      </div>
    ),
  },
];

export default function Moonface() {
  return (
    <section
      id="moonface"
      className="my-16 mx-auto rounded-lg p-4 max-w-screen-xl border-[0.5px] border-gray-700"
    >
      <div className="gap-8 grid grid-cols-2">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-sm font-regular text-white md:text-lg pb-4">
            Neutrack Moon Face Prediction Model
          </h1>
          <p className="text-white text-justify py-8 ">
            This innovative computer vision model brings the moon's phases
            closer to everyone, especially those who cannot see them. Inspired
            by NeuTrack, a device designed to help the visually impaired connect
            with the universe, this model detects and classifies the moon's
            various phases. By embedding this AI technology, users can
            effortlessly discover the current moon phase without relying on
            sight, offering a new way to experience the night sky.
          </p>
        </div>
      </div>
    </section>
  );
}
