const Footer = () => (
  <footer className="py-10 px-6 border-t border-border bg-card">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="text-heading font-bold text-lg">KAAI</span>
        <span className="text-subtle text-sm">by Matiyari Technology</span>
      </div>
      <p className="text-subtle text-xs">
        © 2025 Matiyari Technology. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="#home" className="text-sm text-body hover:text-heading transition-colors">Home</a>
        <a href="#story" className="text-sm text-body hover:text-heading transition-colors">Our Story</a>
        <a href="#contact" className="text-sm text-body hover:text-heading transition-colors">Contact</a>
        <a href="#faq" className="text-sm text-body hover:text-heading transition-colors">FAQ</a>
      </div>
    </div>
  </footer>
);

export default Footer;
