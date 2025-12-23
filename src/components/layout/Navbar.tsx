import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/top-up-robux", label: "Top Up Robux" },
  { href: "/gamepass-roblox", label: "Gamepass" },
  { href: "/about", label: "Tentang Kami" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-xl text-foreground">
            siro<span className="text-primary">bux</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              <Button
                variant="nav"
                className={cn(
                  "px-4",
                  location.pathname === link.href && "text-primary bg-primary/10"
                )}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/checkout">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-medium text-accent-foreground flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="gap-2">
              <User className="h-4 w-4" />
              Masuk
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="cta">Daftar</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-up">
          <div className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-4 border-t border-border mt-2">
              <Link to="/login" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Masuk
                </Button>
              </Link>
              <Link to="/register" className="flex-1" onClick={() => setIsOpen(false)}>
                <Button variant="cta" className="w-full">
                  Daftar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
