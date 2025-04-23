import '../../philosophie/src/Philosophers.css'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import denkers from './denkers.json';

const philosophers = [
  "Pythagoras", "Konfuzius", "Heraklit", "Parmenides", "Zenon von Elea", "Sokrates", "Demokrit",
  "Platon", "Aristoteles", "Mencius", "Zhuangzi", "Pyrrhon von Elis", "Epikur", "Zenon von Kition",
  "Philo von Alexandria", "Mark Aurel", "Nagarjuna", "Plotin", "Sextus Empiricus", "Augustinus von Hippo",
  "Hypatia", "Boethius", "Śaṅkara", "Al-Kindī", "Al-Fārābī", "Avicenna", "Rāmānuja", "Ibn Gabirol",
  "Anselm von Canterbury", "Al-Ghazālī", "Peter Abaelard", "Averroës", "Zhu Xi", "Moses Maimonides",
  "Ibn al-ʿArabī", "Shinran", "Thomas von Aquin", "Johannes Duns Scotus", "Wilhelm von Ockham",
  "Niccolò Machiavelli", "Wang Yangming", "Francis Bacon", "Thomas Hobbes", "René Descartes",
  "John Locke", "Baruch Spinoza", "Gottfried Wilhelm Leibniz", "Giambattista Vico", "George Berkeley",
  "Montesquieu", "David Hume", "Jean-Jacques Rousseau", "Immanuel Kant", "Moses Mendelssohn",
  "Marquis de Condorcet", "Jeremy Bentham", "Georg Wilhelm Friedrich Hegel", "Arthur Schopenhauer", 
  "Auguste Comte", "John Stuart Mill", "Søren Kierkegaard", "Karl Marx", "Herbert Spencer",
  "Wilhelm Dilthey", "William James", "Friedrich Nietzsche", "Gottlob Frege", "Edmund Husserl",
  "Henri Bergson", "John Dewey", "Alfred North Whitehead", "Benedetto Croce", "Nishida Kitarō",
  "Bertrand Russell", "G. E. Moore", "Martin Buber", "Ludwig Wittgenstein", "Martin Heidegger",
  "Rudolf Carnap", "Karl Popper", "Theodor W. Adorno", "Jean-Paul Sartre", "Hannah Arendt",
  "Simone de Beauvoir", "W. V. O. Quine", "A. J. Ayer", "Wilfrid Sellars", "John Rawls", "Thomas Kuhn",
  "Michel Foucault", "Noam Chomsky", "Jürgen Habermas", "Bernard Williams", "Jacques Derrida",
  "Richard Rorty", "Robert Nozick", "Saul Kripke", "David Lewis", "Peter Singer", "Derek Parfit"
];  

const Philosophers = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Philosophenliste</h1>
        </nav>
        <Routes>
          <Route path="/" element={<PhilosopherList />} />
          <Route path="/philosoph/:name" element={<PhilosopherDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

const PhilosopherList = () => {
  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {philosophers.map((name) => (
        <Link
          key={name}
          to={`/philosoph/${encodeURIComponent(name)}`}
          className="block p-4 bg-white rounded shadow hover:bg-gray-100"
        >
          {name}
        </Link>
      ))}
    </div>  
  );
};

const PhilosopherDetail = () => {
  const { name } = useParams();
  const philosopher = denkers.find(d => d.name === name);

  if(!philosopher) {
    return (
      <div className='p-6'> 
        <h2 className='text-2xl font-bold mb-4'>
          Philosopher not found.
        </h2>
        <Link to="/" className='text-blue-600 hoer:underline'>
        Zurück zur Liste
        </Link>
      </div>
    );
  }

  const imagePath = `/assets/${name}.jpg`;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <img
        src= {imagePath}
        alt={name}
        className="mb-4 rounded shadow w-64 h-auto"
      />
      <div className="space-y-4">
        <p><strong>Lebensspanne:</strong> {philosopher.lifespan}</p>
        <p><strong>Epoche:</strong> {philosopher.historical_period}</p>
        
        <div>
          <h3 className="text-xl font-semibold mt-4">Biografie</h3>
          <p className="text-gray-700">{philosopher.detailed_biography}</p>
        </div>

        {philosopher.key_ideas && (
          <div>
            <h3 className="text-xl font-semibold mt-4">Schlüsselkonzepte</h3>
            <ul className="list-disc pl-6">
              {philosopher.key_ideas.map((idea, index) => (
                <li key={index}>{idea}</li>
              ))}
            </ul>
          </div>
        )}

        {philosopher.main_works && (
          <div>
            <h3 className="text-xl font-semibold mt-4">Hauptwerke</h3>
            <ul className="list-disc pl-6">
              {philosopher.main_works.map((work, index) => (
                <li key={index}>{work}</li>
              ))}
            </ul>
          </div>
        )}

        {philosopher.citations && (
          <div>
            <h3 className="text-xl font-semibold mt-4">Quellen</h3>
            <div className="space-y-2">
              {philosopher.citations.map((citation, index) => (
                <div key={index}>
                  <a 
                    href={citation} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Quelle {index + 1}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-6">
        <Link to="/" className="text-blue-600 hover:underline">Zurück zur Liste</Link>
      </div>
    </div>
  );
};

export default Philosophers;