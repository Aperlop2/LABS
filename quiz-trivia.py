import requests

def trivia_fetch(num):
    #variable de la url
    url = f"https://opentdb.com/api.php?amount={num}"
    #variable nueva para obtener la url
    response = requests.get(url)

    #retorna trivia en formato json
    trivia = response.json ()
    return trivia

def main():
    '''
    cantidad = int(input("cuantas preguntas quieres?: "))
    #llamamos a la funcion trivia_fetch y le pasamos la cantidad de preguntas que queremos
    trivia = trivia_fetch(cantidad)
    #imprimimos la trivia respecto a la cantidad de preguntas que queremos
    print(trivia)
    '''
    cantidad = int(input("cuantas preguntas quieres?: "))
    trivia = trivia_fetch(cantidad)
    #mostrar solamente las preguntas
    for pregunta in trivia["results"]:
        print(pregunta["question"])

if __name__ == "__main__":
    main()