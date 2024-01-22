let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  showBookText(n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


let DIV_descricao_txt = document.getElementById("descricao_txt");
let DIV_titulo_livro = document.getElementById("titulo_livro");

function laodBook1p(){
    clearContent();
    DIV_titulo_livro.innerText = "Conceitos iniciais: Investimentos";
   
    p = document.createElement("p");
    paragrafo = document.createTextNode("Compre nosso ebook!!!");
    p.appendChild(paragrafo);
    DIV_descricao_txt.appendChild(p);
}

function laodBook2p(){
    clearContent();
    DIV_titulo_livro.innerText = "Pai rico pai pobre";

    p = document.createElement("p");
    paragrafo = document.createTextNode("Best-seller que aborda conceitos fundamentais de finanças pessoais e investimentos. Kiyosaki compara as mentalidades financeiras de seu pai pobre (seu pai biológico) e seu pai rico (o pai de seu amigo), fornecendo perspectivas valiosas sobre construção de riqueza.");
    p.appendChild(paragrafo);
    DIV_descricao_txt.appendChild(p);
}

function laodBook3p(){
    clearContent();
    DIV_titulo_livro.innerText = "O homem mais rico da Babilônia";

    p = document.createElement("p");
    paragrafo = document.createTextNode("Apesar de ser um livro antigo, seus princípios financeiros são atemporais. A obra utiliza parábolas para ensinar lições sobre como construir e preservar riqueza. É uma leitura leve e educativa.");
    p.appendChild(paragrafo);
    DIV_descricao_txt.appendChild(p);
}

function laodBook4p(){
    clearContent();
    DIV_titulo_livro.innerText = "Os axiomas de Zurique";

    p = document.createElement("p");
    paragrafo = document.createTextNode("Inspirado nos princípios de um grupo de banqueiros suíços, este livro oferece conselhos sobre como tomar decisões financeiras sólidas. Os axiomas incluem diretrizes práticas para investir, gerenciar riscos e manter uma mentalidade saudável nos mercados.");
    p.appendChild(paragrafo);
    DIV_descricao_txt.appendChild(p);
}

function laodBook5p(){
    clearContent();
    DIV_titulo_livro.innerText = "Investimentos inteligentes";

    p = document.createElement("p");
    paragrafo = document.createTextNode("A obra é voltada para o público brasileiro. Explora diferentes opções de investimento, estratégias de planejamento financeiro e oferece orientações práticas para quem deseja tomar decisões mais informadas.");
    p.appendChild(paragrafo);
    DIV_descricao_txt.appendChild(p);
}

function showBookText(n){
    /*console.log(n);*/
    switch(n){
        case 1:
            laodBook1p();
            break;
        case 2:
            laodBook2p();
            break;
        case 3:
            laodBook3p();
            break;
        case 4:
            laodBook4p();
            break;
        case 5:
            laodBook5p();
            break;
    }
}

function clearContent()
{
    DIV_titulo_livro.innerText = " ";
    DIV_descricao_txt.innerText = " ";
}

window.addEventListener("load", () => {
    laodBook1p();
  });