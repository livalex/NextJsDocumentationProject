// Templates are similar to layouts in that they wrap a child layout or page.
// Unlike layouts that persist across routes and maintain state, templates
// create a new instance for each of their children on navigation. This means
// that when a user navigates between routes that share a template, a new
// instance of the child is mounted, DOM elements are recreated, state is not
// preserved in Client Components, and effects are re-synchronized.

// There may be cases where you need those specific behaviors, and templates
// would be a more suitable option than layouts. For example:

// To resynchronize useEffect on navigation.
// To reset the state of a child Client Components on navigation.

export default function Template({ children }: { children: React.ReactNode }) {
  console.log("Rendered on server");
  return <div>{children}</div>;
}

// In terms of nesting, template.js is rendered between a layout and its children.
// Here's a simplified output:

// <Layout>
//   {/* Note that the template is given a unique key. */}
//   <Template key={routeParam}>{children}</Template>
// </Layout>
