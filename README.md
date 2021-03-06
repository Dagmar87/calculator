## Calculator

Esse projeto NodeJS foi desenvolvido por José Dagmar Florentino da Silva Sobrinho para o Desafio iUPay. O projeto consiste na criação de uma API de uma calculadora simples que irá realizar as funções basicas e o calculo da expressão baseado no exemplo do enunciado do desafio.

### As operações aritmeticas e resultados da API

As operações foram testadas no programa de API Client chamada Insomnia.

#### Sobre

Essa operação descreve a API.

![image](https://raw.githubusercontent.com/Dagmar87/calculator/main/img/about.png)

#### Soma

Essa operação realizar a soma de dois numeros. 

URL desta operação: http://localhost:3000/calculator/soma/{n1}/{n2}

![image](https://raw.githubusercontent.com/Dagmar87/calculator/main/img/soma.png)

#### Subtração

Essa operação realizar a subtração de dois numeros. 

URL desta operação: http://localhost:3000/calculator/sub/{n1}/{n2}

![image](https://raw.githubusercontent.com/Dagmar87/calculator/main/img/sub.png)
 
#### Multiplicação

Essa operação realizar a multiplicação de dois numeros. 

URL desta operação: http://localhost:3000/calculator/multi/{n1}/{n2}

![image](https://raw.githubusercontent.com/Dagmar87/calculator/main/img/mult.png)

#### Divisão

Essa operação realizar a divisão de dois numeros. 

URL desta operação: http://localhost:3000/calculator/div/{n1}/{n2}

![image](https://raw.githubusercontent.com/Dagmar87/calculator/main/img/div.png)

#### Expressão (Result = n1 + n2 * n3 / n4 - n5)

Essa operação realizar a expressão aritmetica  "Result = n1 + n2 * n3 / n4 - n5".

Essa expressão é baseada no exemplo do enunciado do desafio.

URL desta operação: http://localhost:3000/calculator/exp/{n1}/{n2}/{n3}/{n4}/{n5}

![image](https://raw.githubusercontent.com/Dagmar87/calculator/main/img/exp.png)
