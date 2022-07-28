input = [  [5, 2, 10, 2],
  [4, 5, 7, 4, 8],
  [11, 15, 12, 16, 11, 12],]


for i in range(len(input)):
    data = [] 
    min_num = max(input[i])
    for j in range(len(input[i])):
        if input[i][j] < min_num:
            min_num = input[i][j]
            
    for k in range(len(input[i])):
        if input[i][k] == min_num:
            data.append(k)
    
    print(data)
