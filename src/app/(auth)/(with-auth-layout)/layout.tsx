export default function AuthLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <div>
   <h2>Auth Layout</h2>
   {children}
  </div>
 );
}
