//Variáveis
let ligado: boolean = false;
let nome: string = "nay";
let idade: number = 18;
let altura: number = 1.6;

let nulo: null;
let indefinido: undefined;

//Objetos
type Profissao = {
  nome: string;
  cidade: string;
  idade: number;
  profissao: string;
};

let Funcionario: Profissao = {
  nome: "Yara",
  cidade: "São Paulo",
  idade: 27,
  profissao: "Back-end Developer",
};

//Arrays
let dados: string[] = ["Guilherme", "Roberta", "Julia"];
let dados2: Array<string> = ["Henrique", "José", "Carlos"];

let infos: (string | number)[] = ["Cibele", 45, "Mariana", 21];

//Tuplas
let boleto: [string, number, number] = ["agua", 78.98, 4743485];

//Datas
let aniversario: Date = new Date("2022-09-08");

//Funções
function addNumber(x: number, y: number) {
  return x + y;
}

//Funções Multi tipos
function CalltoPhone(phone: number | string) {
  return phone;
}

//Funções Assíncronas
async function getDataBase(id: number): Promise<string> {
  return "felipe";
}

//Interfaces
type robot = {
  //tipar objeto
  id: number;
  name: string;
};

const bot: robot2 = {
  id: 1,
  name: "Stitch",
};

interface robot2 {
  //melhor para classes
  id: number;
  name: string;
}

//Classes
class Character {
  name: string;
  strength: number;
  skill: number;

  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.strength} points`);
  }
}

const p1 = new Character("Stitch", 10, 98);

//SubClasses
class Magician extends Character {
  magicPoints: number;
  constructor(
    name: string,
    strength: number,
    skill: number,
    magicPoints: number
  ) {
    super(name, strength, skill);
    this.magicPoints = magicPoints;
  }
}

//Generics
function concatArray<T>(...itens: any[]): any[] {
  return new Array().concat(...itens);
}

const numArray = concatArray<number>([1, 5], [3]);
const stgArray = concatArray<string>(["ursula", "ariel"], "erick");

//Decorators
function ExibirNome(target: any) {
  console.log(target);
}

// @ExibirNome
class Cargo {}
