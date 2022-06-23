1. Для создания нового проекта:
   скопировать в папку проекта все файлы и папки;
   для запуска с конкретными версиями npm исползовать package.json;
   для установки последних версий npm заменить данные в package.json из package-latest.json;
   если необходимо выполнить пункт 2, 3;
   в терминале запустить команду npm i и дождатся установки всех пакетов.

2. Устанавливаем GIT
   npm init Создание .JSON-файлf в каталог проекта
   git init Запускаем git
   git config --local user.name "Martin937" Объявляем свое имя
   git config --local user.email "Martin937@yandex.ru" Объявляем свой имейл
   git config --local core.autocrlf true Параметры установки окончаний строк
   git config --local core.safecrlf warn Параметры установки окончаний строк
   git config --local core.quotepath off Установка отображения unicode
   git status Посмотреть состояние
   git add -A Добавить все файлы
   git commit -a -m”message” Создание контрольной точки
   git add -A + git commit -a -m”message” Вводить после внесения всех изменений
   git log Посмотреть изменения

3. Создаём репозиторий на GITHUB и связываем его с проектом
   git remote add origin git@github.com:Martin937/frontend-junior.git
   git branch -M main
   git push -u origin main
   git remote add origin https://github.com/Martin937//beOnPulse.git Прописываем путь к github
   git remote set-url origin https://github.com/Martin937/beOnPulse.git Если нужно изменить уже существующий
   git push -u origin master Заливка на github
   git pull Обновление всех связей и изменений
   git push Заливка на github

4. Устанавливаем и запускаем GULP
   node --version Проверяем установку nodejs
   npm --version Проверяем установку npm
   npx --version Проверяем установку npx
   npm init Создание пакета .JSON-файл в каталог проекта
   npm i -D gulp Установите пакет gulp
   gulp --version Проверяем установку gulp

5. Устанавливаем пакеты npm
   npm i -D del - очиститель папки
   npm i -D gulp-file-include - для импорта html
   если не установлено то в setting.json vscode добавить
   "path-autocomplete.pathMappings": {
   "@img": "${folder}/src/img",
    "@scss": "${folder}/src/scss",
   "@js": "${folder}/src/js"
   }
   потом для написания путей использовать @img/ @scss/ @js/
   npm i -D gulp-replace - поиск и замена
   npm i -D gulp--html-nosvg - для преобразования картинок в webp в html файле
   npm i -D gulp-version-number для указания текщей версии файлов = дате создания
   npm i -D gulp-plymber для обработки ошибок
   npm i -D gulp-notify сообщения(подсказки)
   npm i -D browser-sync
   npm i -D gulp-sass sass
   npm i -D gulp-rename переименовывать файлы
   npm i -D gulp-clean-css - сжатие
   npm i -D gulp-webpcss - вывод изображения в webp
   npm i -D webp-converter@2.2.3 - конвертер
   npm i -D gulp-autoprefixer - вендорные префиксы
   npm i -D gulp-group-css-media-queries - группировка медиазапросов
   npm i -D webpack webpack-stream - для сборки файлов js
   npm i -D gulp-webp gulp-imagemin - для обработки изображений
   npm i -D gulp-newer - для проверки обновления картинок
   npm i -D gulp-fonter gulp-ttf2woff2 - для работы с шрифтами<!-- npm i -D fs gulp-fonter gulp-ttf2woff2 - для работы с шрифтами -->
   npm i -D gulp-svg-sprite - для создания svg спрайтов - будет запускаться отдельно по команде "npm run svgSprive"
   npm i -D gulp-if условное ветвление
   npm i -D gulp-zip - для создания архива zip
   npm i -D vinyl-ftp gulp-util - для автоматической отправки на ftp-сервер

6. Команды
   npm i - для установки всех плагинов
   gulp или npm run dev - для запуска режима разработки;
   npm run svgSprive для - создания спрайта svg иконок;
   npm run build - для финальной сборки;
   npm run zip - для создания zip архива финальной сборки;
   npm run deploy - для автоматической отправки на ftp-сервер;

<!-- --------------------------- -->

60. Популярные названия классов HTML/CSS
61. Блоки
    page — корневой элемент страницы
    header — шапка (страницы или элемента)
    footer — подвал (страницы или элемента)
    section — раздел контента (один из нескольких)
    body — основная часть (страницы или элемента)
    content — содержимое элемента
    sidebar — боковая колонка (страницы или элемента)
    aside — блок с дополнительной информацией
    widget — виджет, например, в боковой колонке

62. Раскладка
    wrapper, wrap — обёртка, обычно внешняя
    inner — внутренняя обёртка
    container, holder, box — контейнер
    grid — раскладка (страницы или элемента) в виде сетки (обычно содержит в себе row и col)
    row — контейнер в виде строки
    col, column — контейнер в виде столбца

63. Элементы управления
    button, btn — кнопка, например, для отправки формы
    control — элемент управления, например, стрелки «Вперёд/назад» в фотогалерее, кнопки управления слайдером
    dropdown — выпадающий список

64. Текст
    title, subject, heading, headline, caption — заголовок
    subtitle — подзаголовок
    slogan — слоган
    lead, tagline — лид-абзац в тексте
    text — текстовый контент
    desc — описание, вариант текстового контента
    excerpt — отрывок текста, обычно используется перед ссылкой «Читать далее…»
    link — ссылка
    copyright, copy — копирайт

65. Списки
    list, items — список
    item — элемент списка

66. Изображения
    image, img, picture, pic — картинка
    icon — иконка
    logo — логотип
    userpic, avatar — юзерпик, маленькая картинка пользователя
    thumbnail, thumb — миниатюра, уменьшенное изображение

67. Медиавыражения
    phone, mobile — мобильные устройства
    phablet — телефоны с большим экраном (6-7″)
    tablet — планшеты
    notebook, laptop — ноутбуки
    desktop — настольные компьютеры

68. Размеры
    tiny — маленький, крохотный
    small — небольшой
    medium — средний
    big, large — большой
    huge — огромный
    narrow — узкий
    wide — широкий

69. Состояния
    active, current — активный элемент, например, текущий пункт меню
    hidden — скрытый элемент
    error — статус ошибки
    warning — статус предупреждения
    success — статус успешного выполнения задачи
    pending — состояние ожидания, например, перед сменой статуса на error или success

70. Дополнительно
    search — поиск
    socials — блок иконок соцсетей
    advertisement, adv, commercial, promo — рекламный блок (режутся Адблоком, не рекомендуется использовать такие классы для блоков с внутренней рекламой)
    features, benefits — список основных особенностей товара, услуги
    slider, carousel — слайдер, интерактивный элемент с прокруткой содержимого
    pagination — постраничная навигация
    user, author — пользователь, автор записи или комментария
    meta — блок с дополнительной информацией, например, блок тегов и даты в посте
    cart, basket — корзина
    breadcrumbs — навигационная цепочка, «хлебные крошки»
    more, all — ссылка на полную информацию
    modal — модальное (диалоговое) окно
    popup — всплывающее окно
    tooltip, tip — всплывающие подсказки
    preview — анонс, отрывок, например новости или поста, может состоять из заголовка, описания и картинки. Предполагается ссылка на полную версию
