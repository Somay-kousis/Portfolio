export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-muted py-8">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>&copy; {currentYear} Somay Kousis. All rights reserved.</p>
        <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
