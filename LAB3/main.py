# --- Funciones requeridas para la calculadora ---

def addmultiplenumbers(numbers):
    """Suma todos los números de una lista."""
    # La función sum() de Python hace exactamente esto de forma nativa
    return sum(numbers)

def multiplymultiplenumbers(numbers):
    """Multiplica todos los números de una lista."""
    # Empezamos con 1 porque es el elemento neutro de la multiplicación
    resultado = 1
    for num in numbers:
        resultado *= num  # resultado = resultado * num
    return resultado

def isiteven(num):
    """Devuelve True si el número es par y entero."""
    # El operador módulo (%) devuelve el residuo de la división.
    # Si num % 2 es exactamente 0, significa que es divisible por 2 (par).
    # Esto funciona perfecto porque si es decimal (ej. -3.8), el residuo no será 0.
    return num % 2 == 0

def isitaninteger(num):
    """Devuelve True si el número es entero (sin decimales)."""
    # Si dividimos el número entre 1 y el residuo es 0, significa que no tiene decimales.
    return num % 1 == 0

# --- Lógica interactiva (Boilerplate) ---

def main():
    print("Hello learners!")
    # Aquí podrías poner inputs para que el usuario use la calculadora manualmente
    # pero como el examen es automático, lo dejamos simple.

# Esto asegura que main() solo corra si ejecutas el archivo directamente, no cuando los tests lo importan.
if __name__ == "__main__":
    main()