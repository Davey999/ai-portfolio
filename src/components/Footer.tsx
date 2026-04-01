export default function Footer() {
  return (
    <footer className="fixed bottom-[0.2rem] md:bottom-[0.8rem] left-[3vw] h-[1rem] text-[clamp(0.5rem,0.8vw,1rem)] font-light text-text-secondary z-40">
      <p>&copy; {new Date().getFullYear()} Strike the Balance</p>
    </footer>
  );
}
