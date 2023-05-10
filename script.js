// Imperative
const arrayAngka = [0, 3, 5, 6, 7];
const angkaGenap = [];

for (var i = 0; i < arrayAngka.length; i++) {
  if (arrayAngka[i] % 2 == 0 && arrayAngka[i] > 0) {
    angkaGenap.push(arrayAngka[i]);
  }
}

console.log(angkaGenap);

// Declarative
const angkaGenapV2 = arrayAngka.filter((e) => e % 2 == 0 && e > 0);

console.log(angkaGenapV2);
