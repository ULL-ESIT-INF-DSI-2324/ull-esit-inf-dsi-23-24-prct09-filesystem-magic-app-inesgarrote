

/*En concreto, una carta se describirá por los siguientes elementos mínimos de información que deberán ser almacenados:

ID. Debe ser un valor numérico único que identifica la carta.
Nombre. Debe ser una cadena de caracteres con el nombre de la carta.
Coste de maná. Es un valor numérico con la suma de todos los símbolos de maná necesarios para poder lanzar la carta.
Color. Debe ser un enumerado: blanco, azul, negro, rojo, verde, incoloro o multicolor. Indica el color de los símbolos de maná presentes en la carta.
Línea de tipo. Debe ser un enumerado con valores como, por ejemplo, Tierra, Criatura, Ecantamiento, Conjuro, Instantáneo, Artefacto o Planeswalker.
Rareza. Es un enumerado: común, infrecuente, rara o mítica.
Texto de reglas. Debe ser una cadena de caracteres con la descripción de los efectos de la carta y cualquier regla especial que tenga.
Fuerza/Resistencia. Son dos valores numéricos, que sólo se incluyen en aquellas cartas de tipo Criatura, e indican la fuerza y resistencia, respectivamente.
Marcas de lealtad. Es un valor numérico indicando cuánta lealtad tiene un Planeswalker, por lo que sólo se incluye en dicho tipo de cartas.
Valor de mercado. Debe ser un valor numérico indicando el valor de la carta en el mercado.
*/
enum Color {
    Blanco = "Blanco",
    Azul = "Azul",
    Negro = "Negro",
    Rojo = "Rojo",
    Verde = "Verde",
    Incoloro = "Incoloro",
    Multicolor = "Multicolor"
}

enum Tipo {
    Tierra = "Tierra",
    Criatura = "Criatura",
    Encantamiento = "Encantamiento",
    Conjuro = "Conjuro",
    Instantaneo = "Instantaneo",
    Artefacto = "Artefacto",
    Planeswalker = "Planeswalker"
}

enum Rareza {
    Comun = "Comun",
    Infrecuente = "Infrecuente",
    Rara = "Rara",
    Mitica = "Mitica"
}

interface Carta {
    id: number;
    nombre: string;
    costeMana: number;
    color: Color;
    tipo: Tipo;
    rareza: Rareza;
    textoReglas: string;
    fuerza?: number;
    resistencia?: number;
    marcasLealtad?: number;
    valorMercado: number;
}