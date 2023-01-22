import random as r

z = r.randint(0, 100)
zufall = z


for i in range(0,11):
    i = input("Eingabe \n")
    eingabe  = int(i)
    if eingabe == zufall:
        print("Bingo Du bist ein Meister")
        break

    elif eingabe < zufall:
        print("zu klein")

    elif eingabe > zufall:
        print("zu groß")