import Wide from "../assets/wide-logo.svg";

export default function About() {
  return (
    <div className="p-8 max-w-xl mx-auto text-center rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-extrabold text-blue-700 mb-4 drop-shadow">
        <img
          src={Wide}
          alt="Wide Technologies Logo"
          className="mx-auto mb-6 h-20 w-auto drop-shadow-lg animate-fade-in"
        />
      </h1>
      <p className="text-lg text-gray-700 mb-6 font-medium">
        We work with banks and financial institutes, each with their own tier
        and business needs, to create excellent solutions in order to satisfy
        their corporate, SME, and retail needs.
      </p>
      <div className="flex justify-center gap-4">
        <span className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold shadow hover:bg-blue-600 transition">
          Corporate
        </span>
        <span className="px-4 py-2 bg-green-500 text-white rounded-full font-semibold shadow hover:bg-green-600 transition">
          SME
        </span>
        <span className="px-4 py-2 bg-yellow-400 text-white rounded-full font-semibold shadow hover:bg-yellow-500 transition">
          Retail
        </span>
      </div>
    </div>
  );
}
