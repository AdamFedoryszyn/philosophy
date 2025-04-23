import termsData from "./termData.json";
import { Begriff } from "./types";

export function Glossar() {
  const terms: Begriff[] = termsData;

  return (
    <div>
      <h1>Philosophisches Glossar</h1>
      <ul>
        {terms.map((t, idx) => (
          <li key={idx}>
            <strong>{t.begriff}:</strong> {t.erklaerung}
          </li>
        ))}
      </ul>
    </div>
  );
}
