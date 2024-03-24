[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/T5K9tzcv)

# Práctica 9

Inés Garrote Fontenla alu0101512297@ull.edu.es

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-inesgarrote/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-inesgarrote?branch=main)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-inesgarrote&metric=coverage)](https://sonarcloud.io/summary/new_code?id=ULL-ESIT-INF-DSI-2324_ull-esit-inf-dsi-23-24-prct09-filesystem-magic-app-inesgarrote)

# Introducción
En el desarrollo de la Práctica 9 - Aplicación para coleccionistas de cartas Magic, hemos utilizado varias herramientas y tecnologías para implementar una aplicación eficiente y funcional. Entre estas herramientas destacan el paquete yargs, el paquete chalk y la API síncrona de Node.js para trabajar con el sistema de archivos.

**yargs**

El paquete yargs es una poderosa herramienta que nos permite parsear argumentos pasados a un programa desde la línea de comandos de una manera sencilla y eficiente. Con yargs, podemos definir comandos, opciones y manejadores asociados a cada comando de forma intuitiva. Esto facilita la interacción con nuestra aplicación desde la línea de comandos, permitiendo a los usuarios ejecutar diferentes acciones con facilidad.

**chalk**

El paquete chalk nos proporciona una forma elegante y sencilla de dar formato y color a los mensajes de salida en la consola. Con chalk, podemos resaltar la información importante, como mensajes de éxito o errores, utilizando una variedad de estilos y colores. Esto mejora la legibilidad de los mensajes y hace que la aplicación sea más atractiva visualmente para los usuarios.

**API síncrona de Node.js para trabajar con el sistema de archivos**

Node.js proporciona un conjunto de APIs para interactuar con el sistema de archivos de manera síncrona y asíncrona. En nuestra aplicación, hemos utilizado la API síncrona de Node.js para realizar operaciones de lectura, escritura y manipulación de archivos JSON que contienen la información de las cartas de cada usuario. Esto nos permite hacer persistente la colección de cartas de manera eficiente y sin complicaciones.

# Desarrollo
En la Práctica 9, se ha desarrollado una aplicación para coleccionistas de cartas Magic, con el objetivo de almacenar y gestionar la información de las cartas de cada usuario. Esta aplicación permite realizar operaciones como añadir, modificar, eliminar, listar y leer información asociada a las cartas.

La aplicación está diseñada para interactuar exclusivamente desde la línea de comandos, utilizando el paquete yargs para gestionar los comandos, opciones y manejadores asociados. Además, se hace uso del paquete chalk para dar formato y color a los mensajes de salida.

Cada usuario puede tener su propia colección de cartas, y la información de cada carta se almacena como un archivo JSON en el sistema de archivos de la máquina donde se ejecuta la aplicación. Se utiliza el API síncrona de Node.js para trabajar con el sistema de archivos y hacer persistente la colección de cartas de cada usuario.

Descripción de los requisitos

Los requisitos de la aplicación incluyen:

- Permite que múltiples usuarios interactúen con ella, aunque no de manera simultánea.
- Describe las cartas con elementos como ID, nombre, coste de maná, color, tipo, rareza, texto de reglas, fuerza/resistencia, marcas de lealtad y valor de mercado.
- Cada usuario puede añadir, modificar, eliminar, listar y leer información de sus cartas.
- Los mensajes de salida se muestran con formato y color mediante el uso del paquete chalk.
- La colección de cartas de cada usuario se hace persistente almacenando cada carta como un archivo JSON en el sistema de archivos.

Para ello, se ha implementado el siguiente código:

- **index.ts**: Este es el punto de entrada de la aplicación. Aquí se definen los comandos, opciones y manejadores asociados a cada comando utilizando el paquete yargs. Se importan las funciones de la clase MagicApp para gestionar las operaciones de añadir, modificar, eliminar, listar y leer información de las cartas.
- **card.ts**: En este archivo se define la interfaz Card que describe la estructura de una carta, con elementos como ID, nombre, coste de maná, color, tipo, rareza, texto de reglas, fuerza/resistencia, marcas de lealtad y valor de mercado.

Enumerados (Enums):

```typescript
export enum Color {
  Blanco = "Blanco",
  Azul = "Azul",
  Negro = "Negro",
  Rojo = "Rojo",
  Verde = "Verde",
  Incoloro = "Incoloro",
  Multicolor = "Multicolor",
}
export enum Tipo {
  Tierra = "Tierra",
  Criatura = "Criatura",
  Encantamiento = "Encantamiento",
  Conjuro = "Conjuro",
  Instantaneo = "Instantaneo",
  Artefacto = "Artefacto",
  Planeswalker = "Planeswalker",
}
export enum Rareza {
  Comun = "Comun",
  Infrecuente = "Infrecuente",
  Rara = "Rara",
  Mitica = "Mitica",
}
```
- Color: Enumera los diferentes colores de las cartas, como Blanco, Azul, Negro, Rojo, Verde, Incoloro y Multicolor.
- Tipo: Enumera los tipos posibles de las cartas, como Tierra, Criatura, Encantamiento, Conjuro, Instantáneo, Artefacto y Planeswalker.
- Rareza: Enumera las posibles rarezas de las cartas, como Común, Infrecuente, Rara y Mítica.

Alias de tipo:

```typescript
export type fuerzaResistencia = [number, number] | undefined;
```

fuerzaResistencia: Define un alias de tipo para representar la fuerza y resistencia de las criaturas. Es un array de dos números o undefined si la carta no es una criatura.

Interfaz (CartaInterface):

```typescript
export interface CartaIntertaz {
  id: number;
  nombre: string;
  costeMana: number;
  color: Color;
  tipo: Tipo;
  rareza: Rareza;
  textoReglas: string;
  fuerzaResistencia: fuerzaResistencia; // sólo se incluyen en aquellas cartas de tipo Criatura
  marcasLealtad: number | undefined; // Solo en cartas Planeswalker
  valorMercado: number;
}
```

Define la estructura que deben seguir las cartas. Esta interfaz especifica los campos que deben estar presentes en una carta, como el ID, nombre, coste de maná, color, tipo, rareza, texto de reglas, fuerza y resistencia (solo para criaturas), marcas de lealtad (solo para planeswalkers) y valor de mercado.

Clase Carta:
    
```typescript
    export class Carta implements CartaIntertaz {
  constructor(
    public id: number,
    public nombre: string,
    public costeMana: number,
    public color: Color,
    public tipo: Tipo,
    public rareza: Rareza,
    public textoReglas: string,
    public valorMercado: number,
    public fuerzaResistencia: fuerzaResistencia,
    public marcasLealtad: number | undefined
    
  ) {
    this.id = id;
    this.nombre = nombre;
    this.costeMana = costeMana;
    this.color = color;
    this.tipo = tipo;
    this.rareza = rareza;
    this.textoReglas = textoReglas;
    this.valorMercado = valorMercado;
    if (this.tipo === Tipo.Criatura) {
      if (fuerzaResistencia == undefined) {
        throw new Error('Las criaturas deben tener fuerza y resistencia');
      }
      this.fuerzaResistencia = fuerzaResistencia;
    }
    if (this.tipo === Tipo.Planeswalker) {
      if (marcasLealtad == undefined) {
        throw new Error('Los planeswalker deben tener marcas de lealtad');
      }
      this.marcasLealtad = marcasLealtad;
    }
  } 
}
```

Representa una carta de Magic, Implementa la interfaz CartaInterface.
El constructor de la clase acepta los parámetros necesarios para crear una carta, como el ID, nombre, coste de maná, color, tipo, rareza, texto de reglas, valor de mercado, fuerza y resistencia (si es una criatura) y marcas de lealtad (si es un planeswalker).
El constructor valida que las cartas de tipo criatura tengan fuerza y resistencia definidas, y que las cartas de tipo planeswalker tengan marcas de lealtad definidas. Si no se proporcionan estos valores según el tipo de carta, se arroja un error.

- **usuario.ts**: En este archivo se define la interfaz Usuario que describe la estructura de un usuario, con elementos como nombre y colección de cartas y los métodos para añadir, modificar, eliminar, listar y leer información de las cartas.

Clase Usuario:
    
```typescript
export class Usuario {
public  nombre: string;
  public coleccion: Carta[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.coleccion = [];
  }

```

Define una clase llamada Usuario que representa un usuario del sistema.
Tiene dos propiedades públicas:
nombre: El nombre del usuario.
coleccion: Una matriz que almacena las cartas de la colección del usuario.
Tiene un constructor que acepta el nombre del usuario y inicializa la colección como una matriz vacía.

Métodos:

getNombre(): Un método que devuelve el nombre del usuario.
```typescript
  public getNombre(): string {
    return this.nombre;
  }
```

agregarCarta(carta: Carta): Un método que agrega una carta a la colección del usuario. Verifica si ya existe una carta con el mismo ID en la colección antes de agregarla.
```typescript
  public agregarCarta(carta: Carta): void {
    this.cargarColeccion();
    const cartaExistente = this.coleccion.find((c) => c.id === carta.id);
    if (cartaExistente) {
      console.log(
        chalk.red("¡Error! Ya existe una carta con ese ID en la colección."),
      );
      return;
    }
    this.coleccion.push(carta);
    console.log(chalk.green("¡Carta añadida a la colección con éxito!"));
    this.guardarColeccion();
  }
```

modificarCarta(id: number, nuevaCarta: Carta): Un método que modifica una carta existente en la colección del usuario, reemplazándola con una nueva carta.
```typescript
  public modificarCarta(id: number, nuevaCarta: Carta): void {
    this.cargarColeccion();
    const index = this.coleccion.findIndex((c) => c.id === id);
    if (index === -1) {
      console.log(
        chalk.red(
          "¡Error! No se encontró ninguna carta con ese ID en la colección.",
        ),
      );
      return;
    }
    this.coleccion[index] = nuevaCarta;
    console.log(chalk.green("¡Carta modificada con éxito!"));
    this.guardarColeccion();
  }
```

eliminarCarta(id: number): Un método que elimina una carta de la colección del usuario.
```typescript
  public eliminarCarta(id: number): void {
    this.cargarColeccion();
    const index = this.coleccion.findIndex((c) => c.id === id);
    if (index === -1) {
      console.log(
        chalk.red(
          "¡Error! No se encontró ninguna carta con ese ID en la colección.",
        ),
      );
      return;
    }
    this.coleccion.splice(index, 1); // Eliminar 1 elemento en la posición index
    console.log(chalk.green("¡Carta eliminada con éxito!"));
    this.guardarColeccion();
  }
```

listarCartas(): Un método que lista todas las cartas de la colección del usuario en la consola, mostrando su ID, nombre y color.
```typescript
  public listarCartas(): void {
    this.cargarColeccion();
    console.log(chalk.blue(`Cartas de ${this.nombre}:`));
    this.coleccion.forEach(carta => {
      console.log(chalk.yellow(`ID: ${carta.id}, Nombre: ${carta.nombre}, Color: ${this.getColorString(carta.color)}`));
    });
  }
```

mostrarCarta(id: number): Un método que muestra la información detallada de una carta específica de la colección del usuario en la consola.
```typescript
  private getColorString(color: Color): string {
    switch (color) {
      case Color.Blanco:
        return chalk.white(color);
      case Color.Azul:
        return chalk.blue(color);
      case Color.Negro:
        return chalk.black(color);
      case Color.Rojo:
        return chalk.red(color);
      case Color.Verde:
        return chalk.green(color);
      case Color.Incoloro:
        return chalk.gray(color);
      case Color.Multicolor:
        return chalk.yellow(color);
      default:
        return color;
    }
  }
```

getColorString(color: Color): Un método privado que devuelve una cadena de texto con el color de la carta formateado con colores utilizando el paquete chalk.
```typescript
  public mostrarCarta(id: number): void {
    this.cargarColeccion();
    const carta = this.coleccion.find(c => c.id === id);
    if (!carta) {
      console.log(chalk.red('¡Error! No se encontró ninguna carta con ese ID en la colección.'));
      return;
    }
    console.log(chalk.blue(`Información de la carta ID ${id}:`));
    console.log(chalk.yellow(`Nombre: ${carta.nombre}`));
    console.log(chalk.yellow(`Coste de maná: ${carta.costeMana}`));
    console.log(chalk.yellow(`Color: ${this.getColorString(carta.color)}`));
    console.log(chalk.yellow(`Tipo: ${carta.tipo}`));
    console.log(chalk.yellow(`Rareza: ${carta.rareza}`));
    console.log(chalk.yellow(`Texto de reglas: ${carta.textoReglas}`));
    if (carta.fuerzaResistencia) {
      console.log(chalk.yellow(`Fuerza/Resistencia: ${carta.fuerzaResistencia[0]}/${carta.fuerzaResistencia[1]}`));
    }
    if (carta.marcasLealtad) {
      console.log(chalk.yellow(`Marcas de lealtad: ${carta.marcasLealtad}`));
    }
    console.log(chalk.yellow(`Valor de mercado: ${carta.valorMercado}`));
  }
```

guardarColeccion(): Un método privado que guarda la colección de cartas del usuario en un archivo JSON en el sistema de archivos.
```typescript
  private guardarColeccion(): void {
    const rutaArchivo = `./src/magic/${this.nombre}_coleccion.json`;
    fs.writeFileSync(rutaArchivo, JSON.stringify(this.coleccion, null, 2));
  }
```

cargarColeccion(): Un método público que carga la colección de cartas del usuario desde un archivo JSON en el sistema de archivos.
```typescript
  public cargarColeccion(): void {
    const rutaArchivo = `./src/magic/${this.nombre}_coleccion.json`;
    if (fs.existsSync(rutaArchivo)) {
      const data = fs.readFileSync(rutaArchivo, "utf-8");
      this.coleccion = JSON.parse(data);
    }
  }
```

# ejercicios clase
Durante la sesión de prácticas se planteó un ejercicio usando el patrón template method. Se pidió que se implementara una clase abstracta que contuviera un método plantilla que llamara a otros métodos abstractos. Cada subclase debía implementar estos métodos abstractos de forma diferente. A continuación se muestra la implementación de este ejercicio.

En concreto una clase abstracta FilterMapReduce y luego sus subclases FilterMapRAddReduce, FilterMapRSubReduce, FilterMapProdReduce y FilterMapRDivReduce.

Tuve alguno fallos en la implementación de las subclases, pero finalmente se consiguió implementar correctamente.

# Conclusión
En conclusión, la Práctica 9 ha sido una oportunidad para aprender a utilizar herramientas y tecnologías como yargs, chalk y la API síncrona de Node.js para desarrollar una aplicación funcional y eficiente. La aplicación para coleccionistas de cartas Magic permite a los usuarios gestionar su colección de cartas de una manera sencilla y efectiva, utilizando comandos desde la línea de comandos.

Los ejercicio de clase han sido una oportunidad para practicar la implementación de patrones de diseño como el template method, que nos permite definir la estructura de un algoritmo en una clase base y permitir a las subclases implementar los pasos concretos de ese algoritmo de forma personalizada.