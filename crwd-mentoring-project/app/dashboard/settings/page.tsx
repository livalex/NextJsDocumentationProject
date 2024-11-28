import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings page",
};

const page = () => {
  // Uncomment to test error boundary
  // throw new Error("This is a programmatically triggered error!");

  return <div>Settings page</div>;
};

export default page;
