export default function Chat() {
  return (
    <div className="mt-20">
      <h1 className="text-lg font-semibold tracking-tight font-[family-name:var(--font-geist-mono)]">
        What do you think about my website?
      </h1>
      <div className="divide-y divide-dashed border-l">
        <div className="w-10 h-10 bg-red-500 rounded-full border absolute -left-16 top-2 my-4"></div>
        <div className="w-10 h-10 bg-red-500 rounded-full border absolute -left-16 top-2 my-4"></div>
        <div className="w-10 h-10 bg-red-500 rounded-full border absolute -left-16 top-2 my-4"></div>
        <div className="w-10 h-10 bg-red-500 rounded-full border absolute -left-16 top-2 my-4"></div>
      </div>
    </div>
  );
}
