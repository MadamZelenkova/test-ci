import rate from "./app.js";

test.each([
  ["мечник", 15, "critical"],
  ["маг", 100, "healthy"],
  ["лучник", 45, "wounded"],
])(
  "testing level of health with %s and %i health",
  (hero, health, expected) => {
    const data = {
      name: hero,
      health: health,
    };

    const result = rate(data);
    expect(result).toBe(expected);
  }
);
