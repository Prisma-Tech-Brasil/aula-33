# 🧠 Orientação a Objetos em JavaScript

## 1. O que é Orientação a Objetos?

**Analogia:**
Imagine que você é um arquiteto.
Você desenha o **projeto** de uma casa (a planta) e depois constrói **várias casas** iguais a partir daquele projeto.

- **Projeto da casa** = **Classe**
- **Casa construída** = **Objeto**
- **Características da casa (cor, número de portas)** = **Atributos**
- **Ações da casa (abrir a porta, acender luz)** = **Métodos**

**Resumo:**
Organizar o código criando "moldes" (classes) para gerar "coisas reais" (objetos).

---

## 2. Classes e Objetos em JS

```javascript
class Carro {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  buzinar() {
    console.log('Biiiii!');
  }
}

const carro1 = new Carro('Toyota', 'Corolla');
const carro2 = new Carro('Honda', 'Civic');

console.log(carro1.marca); // Toyota
carro2.buzinar(); // Biiiii!
```

[MDN - Classes em JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)

---

## 3. Atributos e Métodos

**Analogia:**
**Pokémon:**

- Atributos: tipo, vida, ataque
- Métodos: atacar, defender

```javascript
class Pokemon {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  atacar() {
    console.log(`${this.nome} atacou!`);
  }
}

const pikachu = new Pokemon('Pikachu', 'Elétrico');
pikachu.atacar(); // Pikachu atacou!
```

---

## 4. Encapsulamento

**Analogia:**
**Cofre**: só quem tem a chave acessa.

```javascript
class ContaBancaria {
  #saldo = 0;

  depositar(valor) {
    this.#saldo += valor;
  }

  verSaldo() {
    console.log(`Saldo: ${this.#saldo}`);
  }
}

const conta = new ContaBancaria();
conta.depositar(1000);
conta.verSaldo(); // Saldo: 1000
```

---

## 5. Herança

**Analogia:**
**DNA dos pais**.

```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerSom() {
    console.log('Som genérico');
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log('Latido!');
  }
}

const dog = new Cachorro('Rex');
dog.fazerSom(); // Latido!
```

---

## 6. Polimorfismo

**Analogia:**
**Chave-mestra** abre várias portas.

```javascript
function emitirSom(animal) {
  animal.fazerSom();
}

const gato = new Animal('Gato');
const cachorro = new Cachorro('Cachorro');

emitirSom(gato);     // Som genérico
emitirSom(cachorro); // Latido!
```

---

## 7. Abstração

**Analogia:**
**Dirigir** sem entender o motor.

```javascript
class Cafeteira {
  fazerCafe() {
    this.#ferverAgua();
    console.log('Preparando café...');
  }

  #ferverAgua() {
    console.log('Agua fervendo...');
  }
}

const cafeteira = new Cafeteira();
cafeteira.fazerCafe();
```

---

# ⚡ Resumo

| Conceito         | Analogia                     | Código-Chave |
|:----------------:|:-----------------------------:|:-------------:|
| **Classe**       | Planta da casa                | `class Nome {}` |
| **Objeto**       | Casa construída              | `const obj = new Nome()` |
| **Atributos**    | Características               | `this.atributo` |
| **Métodos**     | Ações                       | `metodo() {}` |
| **Encapsulamento** | Cofre trancado             | `#privado` |
| **Herança**      | DNA dos pais                  | `extends` |
| **Polimorfismo** | Chave-mestra                  | Mesmo método, comportamentos diferentes |
| **Abstração**    | Dirigir sem saber do motor    | Expor só o necessário |

---

# 📚 Fontes para estudo

- [MDN - Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info - OOP](https://javascript.info/class)
- [Eloquent JavaScript - Capítulo sobre Classes](https://eloquentjavascript.net/)
