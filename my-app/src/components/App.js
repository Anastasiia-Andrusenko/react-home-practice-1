
import PaintingList from './PaintingList';
import Section from './Section';
import paintings from '../paitings.json';

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее"></Section>
    </div>
  );
};