const idiomaGuardado = localStorage.getItem("idioma") || "es";



i18next.init({
    lng: idiomaGuardado,

    resources: {

        es: {
            translation: {

                // Traducciones para el menú principal.
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

                //Traducciones para la descripción de los platillos.

                imgdescripcionMexicano: "Platillo tradicional mexicano.",

                imgdescripcionJapones: "Platillo tradicional japonés.",

                imgdescripcionItaliano: "Platillo tradicional italiano.",

                imgdescripcionPostre: "Postre.",

                imgdescripcionBebida: "Bebida refrescante.",

                descripcion: "Descripción",

                descripcion_platillo1: "Las enchiladas son un plato mexicano muy popular, consistente en tortillas de maíz rellenas de carne, queso o vegetales y cubiertas con salsa picante.",

                volver_menu: "⬅ Volver al menú",

                descripcion_platillo2: "Los tamales son un platillo mexicano tradicional, preparado con masa de maíz rellena de carne, queso o vegetales y envuelto en hojas de maíz para su cocción.",

                descripcion_platillo3: "El sushi es un platillo japonés tradicional preparado con arroz sazonado con vinagre, acompañado de pescado, mariscos o vegetales.",

                descripcion_platillo4: "La pizza es un platillo tradicional italiano preparado con masa de pan, salsa de tomate y queso, acompañado de ingredientes variados.",

                descripcion_platillo5: "El pastel es un postre de chocolate, preparado con Chocolate.",

                descripcion_platillo6: "El agua es una bebida refrescante preparada con agua mineral o embotellada.",

                // Traducciones para el menu de configuraciones.

                tituloConfiguracion: "Configuracion de Sesión",

                descripcionConfiguracion: "En esta sección, puedes configurar tus preferencias de sesión, como el idioma, la privacidad y las notificaciones.",

                preferenciasSesion: "Preferencias de Sesión",

                privacidad: "Privacidad:",

                publico: "Público",

                privado: "Privado",

                notificaciones: "Notificaciones:",

                habilitadas: "Habilitadas",

                deshabilitadas: "Deshabilitadas",

                guardarConfiguracion: "Guardar Configuracion",

                comentarios: "Comentarios / Sugerencias",

                mensaje: "Mensaje",

                enviar: "Enviar",

                //Inicio de sesion

                iniciarSesion: "Iniciar sesión",

                descripcionSesion: "Ingresa tus credenciales para continuar",

                usuario: "Usuario",

                contraseña: "Contraseña",

                botonSesion: "Iniciar sesión",

                pregunta: "¿No tienes una cuenta?",

                crearsesion: "Crear una cuenta",

                regresar: "Regresar",

                titulocrear: "Crear sesión",

                confirmarcontraseña: "Confirmar contraseña",

                botonCrear: "Crear sesión",

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

                //Traducciones para la descripción de los platillos.

                imgdescripcionMexicano: "Traditional Mexican dish.",

                imgdescripcionJapones: "Traditional Japanese dish.",

                imgdescripcionItaliano: "Traditional Italian dish.",

                imgdescripcionPostre: "Dessert.",

                imgdescripcionBebida: "Refreshing drink.",

                descripcion: "Description",

                descripcion_platillo1: "Enchiladas are a very popular Mexican dish, consisting of corn tortillas filled with meat, cheese or vegetables and covered with spicy sauce.",

                descripcion_platillo2: "Tamales are a traditional Mexican dish, made with corn dough filled with meat, cheese or vegetables and wrapped in corn husks for cooking.",

                descripcion_platillo3: "Sushi is a traditional Japanese dish made with seasoned rice, accompanied by fish, seafood or vegetables.",

                descripcion_platillo4: "Pizza is a traditional Italian dish made with bread dough, tomato sauce and cheese, topped with various ingredients.",
                descripcion_platillo5: "Cake is a chocolate dessert, prepared with Chocolate.",

                descripcion_platillo6: "Water is a refreshing drink made with mineral or bottled water.",

                volver_menu: "⬅ Come back to menu",

                // Traducciones para el menu de configuraciones.

                tituloConfiguracion: "Session Settings",

                descripcionConfiguracion:
                    "In this section, you can configure your session preferences, such as language, privacy, and notifications.",

                preferenciasSesion: "Session Preferences",

                privacidad: "Privacy:",

                publico: "Public",

                privado: "Private",

                notificaciones: "Notifications:",

                habilitadas: "Enabled",

                deshabilitadas: "Disabled",

                guardarConfiguracion: "Save Settings",

                comentarios: "Comments / Suggestions",

                mensaje: "Message",

                enviar: "Send",

                //Inicio de sesion
                iniciarSesion: "Log In",

                descripcionSesion: "Enter your credentials to continue",

                usuario: "Username",

                contraseña: "Password",

                botonSesion: "Log In",

                pregunta: "Don't have an account?",

                crearsesion: "Create an account",

                regresar: "Go Back",

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

                //Traducciones para la descripción de los platillos.

                imgdescripcionMexicano: "Piatto tradizionale messicano.",

                imgdescripcionJapones: "Piatto tradizionale giapponese.",

                imgdescripcionItaliano: "Piatto tradizionale italiano.",

                imgdescripcionPostre: "Dolce.",

                imgdescripcionBebida: "Bevanda rinfrescante.",

                descripcion: "Descrizione",

                descripcion_platillo1: "Le enchiladas sono un piatto messicano molto popolare, composto da tortillas di mais ripiene di carne, formaggio o verdure e coperte con salsa piccante.",

                descripcion_platillo2: "I tamales sono un piatto tradizionale messicano, preparato con pasta di mais ripiena di carne, formaggio o verdure e avvolta in foglie di mais per la cottura.",

                volver_menu: "⬅ Torna al menu",

                descripcion_platillo3: "Il sushi è un piatto tradizionale giapponese preparato con riso condito, accompagnato da pesce, frutti di mare o verdure.",

                descripcion_platillo4: "La pizza è un piatto tradizionale italiano preparato con pasta di pane, salsa di pomodoro e formaggio, accompagnato da ingredienti vari.",
                descripcion_platillo5: "La torta è un dolce al cioccolato, preparato con cioccolato.",

                descripcion_platillo6: "L'acqua è una bevanda rinfrescante preparata con acqua minerale o in bottiglia.",

                // Traducciones para el menu de configuraciones.
                tituloConfiguracion: "Configurazione della Sessione",

                descripcionConfiguracion:
                    "In questa sezione puoi configurare le preferenze della sessione, come lingua, privacy e notifiche.",

                preferenciasSesion: "Preferenze della Sessione",

                privacidad: "Privacy:",

                publico: "Pubblico",

                privado: "Privato",

                notificaciones: "Notifiche:",

                habilitadas: "Abilitate",

                deshabilitadas: "Disabilitate",

                guardarConfiguracion: "Salva Configurazione",

                comentarios: "Commenti / Suggerimenti",

                mensaje: "Messaggio",

                enviar: "Invia",

                //Inicio de sesion

                iniciarSesion: "Accedi",

                descripcionSesion: "Inserisci le tue credenziali per continuare",

                usuario: "Utente",

                contraseña: "Password",

                botonSesion: "Accedi",

                pregunta: "Non hai un account?",

                crearsesion: "Crea un account",

                regresar: "Torna indietro",


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

                //Traducciones para la descripción de los platillos.

                imgdescripcionMexicano: "伝統的なメキシコ料理。",

                imgdescripcionJapones: "伝統的な日本料理。",

                imgdescripcionItaliano: "伝統的なイタリア料理。",

                imgdescripcionPostre: "デザート。",

                imgdescripcionBebida: "爽やかな飲み物。",

                descripcion: "説明",

                descripcion_platillo1: "エンチラーダは、トウモロコシのトルティーヤに肉、チーズ、野菜を詰め、スパイシーなソースで覆った非常に人気のあるメキシコ料理です。",

                descripcion_platillo2: "タマレスは、トウモロコシの生地に肉、チーズ、野菜を詰め、トウモロコシの葉で包んで調理する伝統的なメキシコ料理です。",

                descripcion_platillo3: " sushiは、酢で味付けされたお米に魚、海鮮または野菜を添えて作られる伝統的な日本料理です。",

                descripcion_platillo4: "ピザは、パン生地、トマトソース、チーズをベースに、さまざまな具材をトッピングして焼き上げる伝統的なイタリア料理です。",

                descripcion_platillo5: "ケーキは、チョコレートで作られるデザートです。",

                descripcion_platillo6: "水は、ミネラルウォーターやボトル入りの水を使用して作られる爽やかな飲み物です。",

                volver_menu: "⬅ メニューに戻る",

                // Traducciones para el menu de configuraciones.

                tituloConfiguracion: "セッション設定",

                descripcionConfiguracion:
                    "このセクションでは、言語、プライバシー、通知などのセッション設定を構成できます。",

                preferenciasSesion: "セッション設定",

                privacidad: "プライバシー:",

                publico: "公開",

                privado: "非公開",

                notificaciones: "通知:",

                habilitadas: "有効",

                deshabilitadas: "無効",

                guardarConfiguracion: "設定を保存",

                comentarios: "コメント / 提案",

                mensaje: "メッセージ",

                enviar: "送信",

                //Inicio de sesion
                iniciarSesion: "ログイン",

                descripcionSesion: "続行するには認証情報を入力してください",

                usuario: "ユーザー名",

                contraseña: "パスワード",

                botonSesion: "ログイン",

                pregunta: "アカウントをお持ちではありませんか？",

                crearsesion: "アカウントを作成",

                regresar: "戻る",


            }
        }
    }
}, () => {

    actualizarTextos();

    // Guardar el idioma seleccionado en localStorage
    const selectorIdioma = document.getElementById("idioma");

    if (selectorIdioma) {
        selectorIdioma.value = i18next.language;
    }
});

//funcion para actualizar los textos de la página según el idioma seleccionado
function actualizarTextos() {

    document.querySelectorAll("[data-i18n]").forEach(elemento => {

        const clave = elemento.getAttribute("data-i18n");

        elemento.textContent = i18next.t(clave);
    });
}

//Selector del idioma 
const selectorIdioma = document.getElementById("idioma");

if (selectorIdioma) {
    selectorIdioma.addEventListener("change", () => {

        const idioma = selectorIdioma.value;
        //guardar el idioma seleccionado en localStorage
        localStorage.setItem("idioma", idioma);

        i18next.changeLanguage(idioma, actualizarTextos);
    });
}

