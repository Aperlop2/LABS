#ejercicio 1
numero1 = float(input("ingrese el primer numero: "))
numero2 = float(input("ingrese el segundo numero: "))

suma = numero1 + numero2

print("la suma es: ", suma)

#ejercicio 2
#resta de dos numeros
numero3 = float(input("ingrese un numero: "))
numero4 = float(input("ingrese otro numero: "))

resta = numero3 - numero4

print("la resta es: ", resta)

#multiplicacion de dos numeros
numero5 = float(input("ingrese un numero: "))
numero6 = float(input("ingrese otro numero: "))
multiplicacion = numero5 * numero6

print("la multiplicacion es: ", multiplicacion)

#division de dos numeros
numero7 = float(input("ingrese un numero: "))
numero8 = float(input("ingrese otro numero: "))
division = numero7 / numero8

print("la division es: ", division)

#realizar una operacion de modulo
numero9 = float(input("ingrese un numero: "))
numero10 = float(input("ingrese otro numero: "))
modulo = numero9 % numero10

print("el modulo es: ", modulo)


#permitir al usuario elegir la operacion a realizar
print("Seleccione la operacion a realizar: ")
print("1. Suma")
print("2. Resta")
print("3. Multiplicacion")
print("4. Division")

opcion = int(input("Ingrese la opcion deseada: "))

if opcion == 1:
    numero1 = float(input("ingrese el primer numero: "))
    numero2 = float(input("ingrese el segundo numero: "))
    suma = numero1 + numero2
    print("la suma es: ", suma)
elif opcion == 2:
    numero3 = float(input("ingrese un numero: "))
    numero4 = float(input("ingrese otro numero: "))
    resta = numero3 - numero4
    print("la resta es: ", resta)
elif opcion == 3:
    numero5 = float(input("ingrese un numero: "))
    numero6 = float(input("ingrese otro numero: "))
    multiplicacion = numero5 * numero6
    print("la multiplicacion es: ", multiplicacion)
elif opcion == 4:
    numero7 = float(input("ingrese un numero: "))
    numero8 = float(input("ingrese otro numero: "))
    division = numero7 / numero8
    print("la division es: ", division)
else:
    print("opcion no valida")

#suma de tres numeros
numero11 = float(input("ingrese el primer numero: "))
numero12 = float(input("ingrese el segundo numero: "))
numero13 = float(input("ingrese el tercer numero: "))
suma_tres = numero11 + numero12 + numero13
print("la suma de los tres numeros es: ", suma_tres)

#permitir al usuario mezclar operaciones con tres numeros o mas
numero14 = float(input("Dame el primer numero: "))

operacion = input("Dame la operacion a realizar (+, -, *, /): ")
numero15 = float(input("Dame el segundo numero: "))
operacion2 = input("Dame la operacion a realizar (+, -, *, /): ")
numero16 = float(input("Dame el tercer numero: "))
operacion3 = input("Dame la operacion a realizar (+, -, *, /): ")
si_no = input("Desea realizar otra operacion? (si/no): ")

if si_no == "si":
    numero17 = float(input("Dame el cuarto numero: "))
    operacion4 = input("Dame la operacion a realizar (+, -, *, /): ")
    numero18 = float(input("Dame el quinto numero: "))
    operacion5 = input("Dame la operacion a realizar (+, -, *, /): ")
    numero19 = float(input("Dame el sexto numero: "))
    operacion6 = input("Dame la operacion a realizar (+, -, *, /): ")
    si_no2 = input("Desea realizar otra operacion? (si/no): ")

    if si_no2 == "si":
        numero20 = float(input("Dame el septimo numero: "))
        operacion7 = input("Dame la operacion a realizar (+, -, *, /): ")
        numero21 = float(input("Dame el octavo numero: "))
        operacion8 = input("Dame la operacion a realizar (+, -, *, /): ")
        numero22 = float(input("Dame el noveno numero: "))
        operacion9 = input("Dame la operacion a realizar (+, -, *, /): ")
        si_no3 = input("Desea realizar otra operacion? (si/no): ")

        if si_no3 == "si":
            numero23 = float(input("Dame el decimo numero: "))
            operacion10 = input("Dame la operacion a realizar (+, -, *, /): ")
            numero24 = float(input("Dame el undecimo numero: "))
            operacion11 = input("Dame la operacion a realizar (+, -, *, /): ")
            numero25 = float(input("Dame el duodecimo numero: "))
            operacion12 = input("Dame la operacion a realizar (+, -, *, /): ")
            si_no4 = input("Desea realizar otra operacion? (si/no): ")

            if si_no4 == "si":
                print("Lo siento, no se pueden realizar mas operaciones.")

