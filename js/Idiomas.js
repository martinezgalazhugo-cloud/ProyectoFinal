i18next.init({
    lng: "es",

    resources: {

        es: {
            translation: {

                menu: "MENÚ",

                platillos: "PLATILLOS",
                postres: "POSTRES",
                bebidas: "BEBIDAS",

                popular: "Popular",
                oferta: "Oferta",
                nuevo: "Nuevo",

                enchiladas: "Enchiladas",
                tamales: "Tamales",
                sushi: "Sushi",
                pizza: "Pizza",
                pastel: "Pastel",
                agua: "Agua",

                platillo_mexicano: "Platillo Mexicano",
                platillo_japones: "Platillo Japonés",
                platillo_italiano: "Platillo Italiano",

                postre_chocolate: "Postre de chocolate",
                bebida_refrescante: "Bebida refrescante",

                ver_detalles: "Ver detalles",

                español: "ESPAÑOL",
                inglés: "INGLÉS",
                italiano: "ITALIANO",
                japonés: "JAPONES",

                idioma: "Idioma:",

                filtros: "Filtros:",
                todos: "Todos",
                categorias: "Categorías:",


            }
        },

        en: {
            translation: {

                menu: "MENU",

                platillos: "DISHES",
                postres: "DESSERTS",
                bebidas: "DRINKS",

                popular: "Popular",
                oferta: "Offer",
                nuevo: "New",

                enchiladas: "Enchiladas",
                tamales: "Tamales",
                sushi: "Sushi",
                pizza: "Pizza",
                pastel: "Cake",
                agua: "Water",

                platillo_mexicano: "Mexican Dish",
                platillo_japones: "Japanese Dish",
                platillo_italiano: "Italian Dish",

                postre_chocolate: "Chocolate dessert",
                bebida_refrescante: "Refreshing drink",

                ver_detalles: "View details",

                español: "SPANISH",
                inglés: "ENGLISH",
                italiano: "ITALIAN",
                japonés: "JAPANESE",

                idioma: "Language:",

                filtros: "Filters:",
                todos: "All",
                categorias: "Categories:",


            }
        },

        it: {
            translation: {

                menu: "MENÙ",

                platillos: "PIATTI",
                postres: "DOLCI",
                bebidas: "BEVANDE",

                popular: "Popolare",
                oferta: "Offerta",
                nuevo: "Nuovo",

                enchiladas: "Enchiladas",
                tamales: "Tamales",
                sushi: "Sushi",
                pizza: "Pizza",
                pastel: "Torta",
                agua: "Acqua",

                platillo_mexicano: "Piatto messicano",
                platillo_japones: "Piatto giapponese",
                platillo_italiano: "Piatto italiano",

                postre_chocolate: "Dessert al cioccolato",
                bebida_refrescante: "Bevanda rinfrescante",

                ver_detalles: "Vedi dettagli",

                español: "SPAGNOLO",
                inglés: "INGLESE",
                italiano: "ITALIANO",
                japonés: "GIAPPONESE",

                idioma: "Lingua:",

                filtros: "Filtri:",
                todos: "Tutti",
                categorias: "Categorie:",


            }
        },

        ja: {
            translation: {

                menu: "メニュー",

                platillos: "料理",
                postres: "デザート",
                bebidas: "飲み物",

                popular: "人気",
                oferta: "オファー",
                nuevo: "新しい",

                enchiladas: "エンチラーダ",
                tamales: "タマレス",
                sushi: "寿司",
                pizza: "ピザ",
                pastel: "ケーキ",
                agua: "水",

                platillo_mexicano: "メキシコ料理",
                platillo_japones: "日本料理",
                platillo_italiano: "イタリア料理",

                postre_chocolate: "チョコレートデザート",
                bebida_refrescante: "爽やかな飲み物",

                ver_detalles: "詳細を見る",

                español: "スペイン語",
                inglés: "英語",
                italiano: "イタリア語",
                japonés: "日本語",

                idioma: "言語:",

                filtros: "フィルター:",
                todos: "すべて",
                categorias: "カテゴリー:",


            }
        }
    }
});


function actualizarTextos(){

    document.querySelectorAll("[data-i18n]").forEach(elemento => {

        const clave = elemento.getAttribute("data-i18n");

        elemento.innerHTML = i18next.t(clave);
    });
}


const selectorIdioma = document.getElementById("idioma");

selectorIdioma.addEventListener("change", () => {

    const idioma = selectorIdioma.value;

    i18next.changeLanguage(idioma, actualizarTextos);
});


actualizarTextos();