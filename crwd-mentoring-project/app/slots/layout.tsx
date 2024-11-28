// Slots are passed as props to the shared parent layout. For the example above,
// the component in app/layout.js now accepts the @analytics and @team slots
// props, and can render them in parallel alongside the children prop

export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  );
}
