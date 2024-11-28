// Matches path: /sign-in/a
// Matches path: /sign-in/a/b
// Matches path: /sign-in/a/b/c

// Also matches on path: /sign-in

const page = () => {
  return <div>Optional Catch-all Segments</div>;
};

export default page;
