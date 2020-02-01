<p align="center">
<img src="/src/assets/logo_red.png" height="150" width="300">
</p>

# iFood Interface

### Conteúdo
O  aplicativo tem como objetivo criar uma interface semelhante ao iFood aplicando os conceitos de React Native. Até o momento as telas presentes no aplicativo são:

+ Tela de apresentação(SplashScreen)
+ Tela inicial(Dashboard)
  + Tela de promoções
  + Tela com o pedido a ser realizado 
+ Tela de busca
+ Tela de pedidos(Anteriores e em Andamento)
+ Tela de perfil

### Tecnologias/Ferramentas utilizadas:
- [React Native](https://facebook.github.io/react-native/)
- [React Navigation](http://reactnavigation.org/)
- [VS Code](https://code.visualstudio.com/)
- [Axios](http://github.com/axios/axios)
- [Styled Components](https://styled-components.com/)
- [Json Server](https://github.com/typicode/json-server)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)

### Imagens do projeto:
| | | |
|:-------------------------:|:-------------------------:|:-------------------------:|
<img src="https://i.imgur.com/Ppmhp7V.png" height="500" width="300"> | <img src="https://i.imgur.com/nV3sWQw.png" height="500" width="300"> | <img src="https://i.imgur.com/Jp0W11p.png" height="500" width="300">
<img src="https://i.imgur.com/dBt0XUT.png" height="500" width="300"> | <img src="https://i.imgur.com/RplPO2P.png" height="500" width="300"> | <img src="https://i.imgur.com/IPFfGAS.png" height="500" width="300">
<img src="https://i.imgur.com/t0O3lO4.png" height="500" width="300"> | <img src="https://i.imgur.com/29giwh5.png" height="500" width="300"> | <img src="https://i.imgur.com/sX6ZzB6.png" height="500" width="300">

### Como executar o projeto:
**OBS: Esse projeto foi desenvolvido e testado apenas em dispositivos Android (por motivos técnicos). Para o funcionamento em dispositivos iOS, são necessárias configurações adicionais que não foram contempladas durante o desenvolvimento até o momento.**

#### React Native
Primeramente tenha o ambiente do React Native configurado em sua máquina. **Lembrando que este projeto foi criado usando o React Native CLI e não o Expo CLI.**
 - [Tutorial de instalação](https://facebook.github.io/react-native/docs/getting-started) (Documentação oficial)
 - [Tutorial de instalação](https://docs.rocketseat.dev/ambiente-react-native/android/linux) (Tutorial em português da Rocketseat)


#### Gerenciador de pacotes
Ter instalado um dos gereciadores de pacotes abaixo:
- [NPM](https://www.npmjs.com/)
- [Yarn](https://yarnpkg.com/) (Recomendado)

#### Clone do projeto
```
git clone https://github.com/JoedSilva18/iFood_interface.git
```

#### Configurações gerais
Na pasta do projeto, executar o seguinte comando para baixar todas as dependencias. Use o comando baseado no gerenciador instalado em sua máquina(**npm ou yarn**):
```
yarn
npm install
```

Para simular o backend da aplicação, foi utilizado o Json Server. Para instala-lo, executar o seguinte comando(**npm ou yarn**):

```
npm install -g json-server
yarn add -g json-server
```
Para subir o servidor, digite o seguinte comando: **(Lembre-se de substituir {ip da sua maquina}, pelo seu respectivo IP)**
```
json-server --host {ip da sua maquina} -p 3333 -w
```

No arquivo api.js em src/services/api.js, substituir o número do IP do atributo baseURL para o IP da sua máquina **(alterar apenas o IP)**.

Após esse procedimento caso esteja usando um dispositivo físico, conecte o seu dispositivo via USB com o modo de desenvolvedor do dispositivo ativada.

Para garantir que seu dispositivo está se conectando corretamente ao ADB, o Android Debug Bridge, execute:
```
adb reverse tcp:3333 tcp:3333
```

Para finalizar o procedimento, execute:
```
react-native run-android
```

e logo em seguida:
```
react-native start
```

Após esse procedimento, o aplicativo será executado.
