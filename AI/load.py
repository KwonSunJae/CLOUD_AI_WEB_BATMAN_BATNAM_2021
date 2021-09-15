import csv

f = open("C:/Users/1/Desktop/Birds/Bird Species.csv", "r")
rdr = csv.reader(f)

train = open("C:/Users/1/Desktop/Birds/train.txt","w")
test = open("C:/Users/1/Desktop/Birds/test.txt", "w")
valid = open("C:/Users/1/Desktop/Birds/valid.txt", "w")
for line in rdr:
    if(line[0][:2] == "tr"): train.write(line[0]+"\n")
    elif(line[0][:2] == "te"): test.write(line[0]+"\n")
    else: valid.write(line[0]+"\n")
    