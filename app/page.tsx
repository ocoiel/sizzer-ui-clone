import { Suspense } from "react";
import Loading from "./loading";

export default function HomePage() {
  return (
    <Suspense fallback={<Loading />}>
      <h1 className="font-bold text-2xl">Page</h1>
    </Suspense>
  );
}
