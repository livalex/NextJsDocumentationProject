// Matches path: /shop/a
// Matches path: /shop/a/b
// Matches path: /shop/a/b/c

// But does not Match path: /shop

const page = () => {
  return <div>Catch all segments</div>;
};

export default page;
