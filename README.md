# Wallpaper Interativo

Este é um projeto de site para explorar e baixar wallpapers. O site possui uma galeria, um carrossel de imagens e filtros para categorizar os wallpapers de forma interativa e visualmente agradável.

![image](https://github.com/MarcuusCorrea/Wallpaper-Interative/assets/96303668/89a97e0f-fb31-4110-af91-abc1bfabb7d6)


## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e npm e yarn instalados em sua máquina. Você pode baixá-los em [Node.js](https://nodejs.org/).

## Instalação

1. Clone o repositório:

    ```sh
    git clone https://github.com/MarcuusCorrea/wallpaper-interativo.git

  - não esqueca de clonar a branch Master (será necessário para ter todas as funcionalidades)
    

2. Navegue até o diretório do projeto:

    ```sh
    cd wallpaper-interativo/
    cd wallpaper-interativo/Project
    ```

3. Instale as dependências:

    ```sh
    npm install
    ```

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:

    ```sh
    npm start
    ```

2. Abra o navegador e acesse:

    ```
    http://localhost:3000
    ```
   - O projeto está feito por rotas, nesse caso colocará: http://localhost:3000/home

## Estrutura do Projeto

wallpaper-interativo
 - │ README.md
 - │ package.json
 - │ tsconfig.json
 - │ yarn.lock
 - │
 - └───public
 - │ │ index.html
 - │ │ categories.json
 - │ │ favicon.ico
 - │
 - └───src
 - ├───Components
 - │ │ Carousel.tsx
 - │ │ Carousel.css
 - │ │ ImageCarousel.tsx
 - │ │ ImageCarousel.css
 - │ │ MHGallery.tsx
 - │ │ MHGallery.css
 - │ │ MHHeader.tsx
 - │ │ MHHeader.css
 - │ │ WallpaperList.tsx
 - │ │ WallpaperList.css
 - │ │
 - ├───pages
 - │ ├───HomePage
 - │ │ │ HomePage.tsx
 - │ │ │ HomePage.css
 - │ │
 - │ ├───TelaFiltro
 - │ │ │ TelaFiltro.tsx
 - │ │ │ TelaFiltro.css
 - │
 - ├───image
 - │ └───icon
 - │ │ logo.svg
 - │ │ search.svg
 - │
 - ├───App.tsx
 - ├───index.tsx
 - ├───index.css

## Navegação e usabilidade

![image](https://github.com/MarcuusCorrea/Wallpaper-Interative/assets/96303668/68dacf2b-d291-45fe-aa24-499b7589d302)

 - você poderá navegar pelo menu utilizando os botões e realizar o download das imagens.


## Componentes Principais

- **Carousel**: Um componente que exibe um carrossel de imagens.
- **ImageCarousel**: Um componente para exibir uma lista de imagens em um carrossel.
- **MHGallery**: Um componente para exibir a galeria de imagens com filtros.
- **MHHeader**: Um componente de cabeçalho simples.
- **WallpaperList**: Um componente para exibir uma lista de wallpapers.

## Dependências

- **React**: Biblioteca para construção da interface do usuário.
- **axios**: Biblioteca para fazer requisições HTTP.
- **react-router-dom**: Biblioteca para controle de rotas no React.
- **typescript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.

## Contribuindo

Se você quiser contribuir com o projeto, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/fooBar`).
3. Commit suas alterações (`git commit -am 'Add some fooBar'`).
4. Dê um push na sua branch (`git push origin feature/fooBar`).
5. Crie um novo Pull Request.

  
  ```
   Este projeto foi desenvolvido por Marcos Corrêa.
