class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title") || "News";
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent =
      this.getAttribute("content") || "Procurando Desenvolvedores";

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");
    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo") || "assets/img/default.png";
    newsImage.alt = "Foto Notícia";

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .card {
            width: 55%;
            display: flex;
            flex-direction: row;
            -webkit-box-shadow: 9px 10px 16px -8px rgba(0, 0, 0, 0.53);
            -moz-box-shadow: 9px 10px 16px -8px rgba(0, 0, 0, 0.53);
            box-shadow: 9px 10px 16px -8px rgba(0, 0, 0, 0.53);
            justify-content: space-between;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 15px;
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card_left > p {
            color: rgb(85, 85, 85);
        }
        
        .card_right > img {
            width: 300px;
            padding: 4%;
        }
        
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
