def trivia_fetch(num):
    datos = {
        10: "la cantidad de dedos que tenemos en las manos",
        20: "el total de dedos en pies y manos",
        30: "los dias que tiene septiembre",
        42: "la respuesta a la vida, el universo y todo lo demas",
    }

    if num in datos:
        texto = datos[num]
    elif num % 2 == 0:
        texto = "un numero par"
    else:
        texto = "un numero impar"

    return {"number": num, "text": texto}


def main():
    numero = int(input("Ingresa un numero: "))
    trivia = trivia_fetch(numero)
    print(f'{trivia["number"]}: {trivia["text"]}')


if __name__ == "__main__":
    main()