// page.tsx
import { Suspense } from "react";
import CheckoutPage from "./checkout";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CheckoutPage />
    </Suspense>
  );
}
