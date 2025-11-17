import FadeInSection from "./components/FadeInSection";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="mb-12 text-4xl font-bold text-center">
        Scroll Animation Demo
      </h1>

      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="snap-y snap-mandatory overflow-y-scroll h-screen"
        >
          <FadeInSection>
            <h2 className="text-xl font-semibold text-blue-600">
              Section {i + 1}
            </h2>
            <p className="mt-2 text-gray-700">
              This section fades in as it enters the viewport. Scroll down to
              see more!
            </p>
          </FadeInSection>
        </div>
      ))}
    </div>
  );
}
