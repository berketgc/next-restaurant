export default function RegisterLayout({ children }) {
  return (
    <div  className=' bg-repeat bg-auto   '  style={{ backgroundImage: "url('/images/yellow.jpg')", height: "calc(100vh - 6rem)" }}>
      {children}
    </div>
  );
}
