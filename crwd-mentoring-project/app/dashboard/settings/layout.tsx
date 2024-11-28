export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("Rendered on server");
  return <section>{children}</section>;
}
