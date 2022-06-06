import React from 'react';
import './history.scss';
const History = () => {
  return (
    <article className="history">
      <h2 className="history__title">Історія гривні</h2>
      <div className="history__content">
        <div className="history__left">
          <h3 className="history__left-title title">
            Історія національної валюти України
          </h3>
          <p className="history__left-text text">
            Офіційною національною валютою України є гривня. Її назва походить
            від слова «гривна», яке за часів Київської Русі позначало нашийну
            прикрасу.
          </p>
          <p className="history__left-text text">
            Вже у VIII-ІХ століттях під час торговельних операцій і сплати
            данини гривна використовувалась як міра ваги і лічби. Пізніше, у
            різні історичні періоди, слово «гривня» неодноразово змінювало своє
            значення.
          </p>
          <h3 className="history__left-title title">
            Карбування монет у Х-ХІІ століттях
          </h3>
          <p className="history__left-text text">
            На українських землях карбування власної валюти, златників та
            срібляників, започаткував київський князь Володимир Великий. Ці
            монети – перші державні документи, що зберегли зображення тризуба –
            знака київських князів.
          </p>
          <p className="history__left-text text">
            На лицьовому боці монети зображено князя, який сидить на престолі,
            тризуб і напис "ВЛАДИМИР НА СТОЛЕ". На зворотному боці – карбовано
            лик Ісуса Христа і напис "А СЕ ЕГО ЗЛАТО".
          </p>
          <img
            src="https://bank.gov.ua/file/download?file=Zlatnik_from_Hermitage.jpg"
            alt=""
            className="history__left-img img"
          />
          <p className="history__left-text text">
            На відміну від країн Заходу, які починали карбування власних монет,
            копіюючи римські, з чужими портретами та написами, златники і
            срібляники містять виключно давньоруські написи і зображення своїх
            князів
          </p>
          <img
            src="https://bank.gov.ua/file/download?file=Odessa_numismatic_museum_photo_05.jpg"
            alt=""
            className="history__left-img img"
          />
          <p className="history__left-text text">
            Карбування срібних монет продовжили Святополк Окаянний, Ярослав та
            Олег Тмутараканський.
          </p>
          <h3 className="history__left-title title">
            На шляху до незалежної української держави
          </h3>
          <p className="history__left-text text">
            У XII-XIV століттях Київська Русь переживала період феодальної
            роздробленості, а карбування монет припинилося. Роль грошей
            виконували переважно срібні злитки, що називалися "гривнями".
          </p>
          <img
            src="	https://bank.gov.ua/file/download?file=Gryvnja.jpg"
            alt=""
            className="history__left-img img"
            style={{ width: '620px', height: '320px' }}
          />
          <p className="history__left-text text">
            Після тривалої перерви у середині XIV століття на українських землях
            відродився не тільки монетний обіг, а й ненадовго карбування монет –
            червоноруських півгрошей у Львові і срібняків Володимира
            Ольгердовича у Києві. Гривні поступово зникли з обігу,
            перетворившись на грошово-лічильне поняття.
          </p>
          <p className="history__left-text text">
            Пізніше відродити власне карбування монет планував Богдан
            Хмельницький. Ще від початку Визвольної війни 1648-1654 років
            гетьман прагнув проводити самостійну фінансову політику, вважаючи її
            однією з основних ознак державності. Чи вдалося гетьману реалізувати
            задум, не знаємо, адже писемні згадки до цього часу не підтверджені
            археологічними знахідками.
          </p>
          <h3 className="history__left-title title">
            Українська революція 1917-1921 років
          </h3>
          <p className="history__left-text text">
            У часи національно-визвольних змагань у 1917-1921 роках велике
            значення у розбудові самостійної і суверенної Української держави
            мало впровадження національної валюти й створення незалежної
            банківської системи.
          </p>
          <p className="history__left-text text">
            22 грудня 1917 року Центральна Рада прийняла закон про перетворення
            Київської контори Держбанку Росії на Український державний банк.
            Його першим директором став Михайло Кривецький. Саме він підписав
            першу банкноту самостійної Української держави – державний
            кредитовий білет вартістю 100 карбованців, який було емітовано 5
            січня 1918 року. Його вартість дорівнювала 17,424 долі щирого золота
            (1 доля = 0,044 г золота).
          </p>
          <p className="history__left-text text">
            Художник Георгій Нарбут, проектуючи ескіз банкноти у 100
            карбованців, звернув увагу на тризуб як знак, характерний для
            найдавніших національних грошей України – златників та срібляків
            князя Володимира, і вмонтував його до композиції ескізу.
          </p>
          <p className="history__left-text text">
            А 1 березня 1918 року Центральна Рада прийняла закон про
            запровадження нової грошової одиниці – гривні, яка поділялася на 100
            шагів і дорівнювала 1/2 карбованця.
          </p>
          <img
            src="https://bank.gov.ua/ua/file/download?file=%D1%81%D0%BA%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B50005.jpg"
            alt=""
            className="history__left-img img"
            style={{ width: '620px', height: '320px' }}
          />
        </div>
        <div className="history__right">
          <p className="history__right-text text">
            Гетьман Павло Скоропадський, прийшовши до влади у квітні 1918 року,
            відновив як основну грошову одиницю Української Держави карбованець,
            що поділявся на 200 шагів. Було підготовлено ескізи банкнот вартістю
            10, 25, 50, 100, 250 та 1000 карбованців.
          </p>
          <img
            src="https://bank.gov.ua/ua/file/download?file=%D1%81%D0%BA%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B50001.jpg"
            alt=""
            className="history__left-img img"
            style={{ width: '620px', height: '320px' }}
          />
          <p className="history__right-text text">
            Після переходу влади в Україні у грудні 1918 року до рук Директорії
            на чолі з Володимиром Винниченком та Симоном Петлюрою основною
            грошовою одиницею відновленої УНР знову проголошено гривню. Усього
            за 1917-1921 роки в обіг введено 24 паперових грошових знаки.
          </p>
          <h3 className="history__right-title title">"Бофони"</h3>
          <p className="history__right-text text">
            Тривала боротьба вояків ОУН-УПА за незалежність України вимагала
            постійної допомоги від населення. У ті часи розраховувалися
            "бофонами" – однобічними (рідше двобічними) грошовими документами з
            національною символікою та символікою ОУН і УПА. Загалом, за
            1939-1954 роки виготовлено близько 500 різновидів бофонів, які
            перебували у вжитку щонайменше у дванадцяти областях України та
            Білорусі, а також частково на території Австрії, Німеччини, Польщі,
            Словаччини та Чехії. Творцем найвідомішої серії бофонів,
            "Волинської", створеної у 1945-1946 роках, став один із
            найталановитіших графіків ХХ століття – Ніл Хасевич.
          </p>
          <img
            src="https://bank.gov.ua/file/download?file=Bofon300.jpg"
            alt=""
            className="history__left-img img"
            style={{ width: '620px', height: '320px' }}
          />
          <h3 className="history__right-title title">
            Гривня – національна валюта незалежної України
          </h3>
          <p className="history__right-text text">
            Із здобуттям Україною незалежності надзвичайно важливим було
            створення національної грошової системи. Уже 10 січня 1992 року
            Національний банк ввів в обіг купони багаторазового використання.
            Правову підтримку купонокарбованці отримали 20 березня 1991 року з
            прийняттям Закону України "Про банки і банківську діяльність".
            Деякий час одночасно в обігу перебували і рублі, і купонокарбованці.
            А з 12 листопада 1992 року єдиним засобом платежу України у
            готівковому і безготівковому обігу став український карбованець. З 2
            по 16 вересня 1996 року в Україні відбулася грошова реформа, у
            наслідок якої національною валютою стала гривня. Національний банк
            України ввів банкноти номіналом 1, 2, 5, 10, 20, 50 і 100 гривень.
          </p>
          <img
            src="https://bank.gov.ua/file/download?file=1_Hryvnia_2005_front.jpg"
            alt=""
            className="history__left-img img"
            style={{ width: '620px', height: '320px' }}
          />
          <p className="history__right-text text">
            {' '}
            Ще 1992 року розпочато роботу над гривнею. Перші банкноти за
            дизайном художників Василя Лопати і Бориса Максимова надруковані у
            Канаді та Великобританії. Для назви розмінної монети пропонували
            назви "сотий", "резана", але зрештою надали перевагу "копійці".
            Спершу вона карбувалася на Луганському верстатобудівному заводі та
            частково на монетному дворі Італії. Випущено номінали вартістю 1, 2,
            5, 10, 25 і 50 копійок. З 1994 року в Україні відкрито Банкнотну
            фабрику, у квітні 1998 року засновано Монетний двір. Тепер
            українська гривня друкується за найсучаснішими світовими
            технологіями, а віднедавна – з використанням українського льону.
          </p>
          <img
            src="	https://bank.gov.ua/file/download?file=500_hryvnia_2021_front.jpg"
            alt=""
            className="history__left-img img"
            style={{ width: '620px', height: '320px' }}
          />
        </div>
      </div>
    </article>
  );
};
export default History;