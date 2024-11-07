export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-500 text-gray-100 h-[10vh]">
      <p className="">
        ❤️ {new Date().getFullYear()} by{" "}
        <a
          className="text-cyan-200 hover:text-cyan-300"
          href="https://github.com/LynnHtetKyaw95?tab=repositories"
          target="_blank"
        >
          Lynn Htet Kyaw
        </a>{" "}
        ❤️
      </p>
    </div>
  );
}
