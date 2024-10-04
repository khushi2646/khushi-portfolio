export default function Home() {
  const gridStyle = {
    backgroundImage: `url("/gridPattern.svg")`, // Path to the SVG in your public folder
    backgroundRepeat: 'repeat',
    backgroundSize: '99px 99px',
  };

  return (
    <div
      style={gridStyle}
      className="min-h-screen flex items-center justify-center bg-FAFAFA"
    >
      <h1 className="text-4xl font-bold text-black font-clashGrotesk">Hi</h1>
    </div>
  );
}
