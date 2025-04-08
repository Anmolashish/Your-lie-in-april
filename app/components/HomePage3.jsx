import PolaroidWithSlideshow from "./PolaroidWithSlideshow";

export default function HomePage3() {
  const polaroids = [
    {
      images: [
        { src: "/Images/peakpx.jpg", alt: "A soft moment" },
        {
          src: "/Images/2ed1c0789d5ab20b7c4fccc12b4040f8.jpg",
          alt: "A quiet memory",
        },
        {
          src: "/Images/9edfc8241a2fe600d093592e9cdcb155.jpg",
          alt: "An unforgettable glance",
        },
      ],
      rotation: "-rotate-2 md:-rotate-3",
      text: "When it all began",
      date: "A day we'll always remember",
    },
    {
      images: [
        {
          src: "/Images/6c6da3d8af0a8223e0fd6588a5682df5.jpg",
          alt: "A breath of freedom",
        },
        {
          src: "/Images/0b5876266a21cfd661a59332c2712af7.jpg",
          alt: "Above the noise",
        },
        {
          src: "/Images/31676a9a8342a63d583f267b6a6b2549.jpg",
          alt: "Moments under stars",
        },
      ],
      rotation: "rotate-1 md:rotate-2",
      text: "Where the world felt lighter",
      date: "Somewhere in time",
    },
    {
      images: [
        {
          src: "/Images/6985a5680cf3e583879492b0b9db1394.jpg",
          alt: "Chilly walks",
        },
        {
          src: "/Images/93907bd057f194c083daebb87a3b2564.jpg",
          alt: "Warm laughter",
        },
        {
          src: "/Images/9208825ed3aac824f452c45ea6e4bd02.jpg",
          alt: "Playful echoes",
        },
      ],
      rotation: "-rotate-1 md:-rotate-2",
      text: "Fleeting warmth in cold winds",
      date: "A season wrapped in feeling",
    },
  ];

  return (
    <div
      className="w-full min-h-[80vh] py-16 px-4 md:p-10 gap-10 flex justify-center items-center
    max-md:flex-col my-[50px]"
      id="polaroid"
    >
      {polaroids.map((polaroid, index) => (
        <PolaroidWithSlideshow
          key={index}
          images={polaroid.images}
          initialRotation={polaroid.rotation}
          text={polaroid.text}
          date={polaroid.date}
        />
      ))}
    </div>
  );
}
