export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white text-2xl font-bold">Fatima Ndiaye</h1>
        <ul className="flex space-x-6">
          <li><a href="#accueil" className="text-white">Accueil</a></li>
          <li><a href="#about" className="text-white">À propos</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}