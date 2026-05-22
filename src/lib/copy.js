// src/lib/copy.js
// Veškerý textový obsah landing page je zde. Komponenty ho pouze čtou.
// Jazyk: Čeština (cs-CZ) - Transkrece ve stylu direct marketingu.

export const copy = {
  // Přidané texty ze zadání (reklamy a doplňkové nabídky/upselly)
  campaign: {
    adText: {
      headline: "Odhalte tajemství 🔓",
      body: "💫 Domácí peeling s profesionálními výsledky!\nZnáte ten úžasný jas a sametově hebkou pleť, která vypadá jako po návštěvě estetické kliniky? 😍 Můžete toho dosáhnout doma, a jedna aplikace vás vyjde doslova na pár korun!\nTento domácí peeling:\n✨ Stahuje póry\n✨ Reguluje mastnotu\n✨ Zesvětluje pigmentové skvrny\n✨ Stimuluje tvorbu kolagenu\n✨ Rozzáří, omladí a projasní vaši pleť\n👉 Klikněte na „Zjistit více“ níže a zjistěte, jak získat bezchybnou pleť, aniž byste za to utratili majlant."
    },
    upsells: [
      {
        title: "👁️ Zmizík na tmavé kruhy: Tajný trik na váčky a vrásky",
        description: "Skvělá volba! Už máte peeling na obnovu pleti, ale... pokožka kolem očí je na něj příliš tenká a jemná. Dokonalá pleť vám nepomůže, pokud vám tmavé kruhy pod očima přidávají 10 let. Přidejte si tohoto tajného průvodce s 15 mikro-recepty s liftingovým efektem. Splasknou váčky, vyzmizíkují tmavé zabarvení a vyhladí vějířkovité vrásky za pouhých 5 minut. Omlaďte svůj pohled okamžitě a bez injekcí!"
      },
      {
        title: "💆‍♀️ Efekt „Lifting“: 5minutová zpevňující automasáž",
        description: "Vaše pleť bude mít ten úžasný jas jako z kliniky, ale... peeling zlepšuje pouze texturu, nezpevní povolené svaly ani neodstraní dvojitou bradu. Nedovolte gravitaci, aby vám zničila vzhled. Přidejte si tohoto vizuálního průvodce s tajnými asijskými technikami lymfodrenáže a masáže obličeje, které zpevní svaly a vyrýsují kontury čelisti. Dosáhněte vizuálního efektu faceliftingu, aniž byste vůbec vkročili na sál!"
      },
      {
        title: "💧 Přírodní „Botox“: Sérum na vyplnění hlubokých vrásek",
        description: "Už máte návod, jak stáhnout póry a vymazat povrchové skvrny, ale... co s těmi hlubokými mimickými vráskami na čele a kolem úst? Peeling obnovuje, ale nevyplňuje. Přidejte si tento tajný recept na ultra-koncentrované domácí sérum, které napodobuje výplňový efekt kyseliny hyaluronové. Vyplňte vrásky zevnitř ven a uzamkněte hydrataci ve své nové pleti!"
      },
      {
        title: "✋ Stroj času: Tajný protokol pro krk a ruce",
        description: "Peeling promění váš obličej, ale... 95 % žen dělá jednu fatální chybu: zapomínají na krk a ruce. To jsou dvě partie, které okamžitě prozradí váš skutečný věk. Nedopusťte, abyste měli obličej třicátnice a ruce padesátnice. Přidejte si tuto speciálně vyvinutou formuli, která zahušťuje, zpevňuje a odstraňuje pigmentaci z jemné pleti dekoltu a hřbetů rukou. Omlaďte svůj celkový vzhled!"
      }
    ]
  },

  hero: {
    banner: "EXKLUZIVNĚ PRO ŽENY, KTERÉ CHTĚJÍ OBNOVIT KOLAGEN VE SVÉ PLETI",
    timerLabels: { days: "Dny", hours: "Hodiny", minutes: "Minuty", seconds: "Sekundy" },
    timerNote: "Nabídka vyprší za",
    eyebrow: "DOMÁCÍ ANTI-AGE PEELING",
    headline: {
      line1: "Domácí peeling s",
      highlight: "profesionálními výsledky",
      line2: "v pohodlí vašeho domova.",
    },
    subheadline:
      "Ušetřete čas i peníze s ověřeným a naprosto bezpečným receptem. Obnovená, zpevněná a zářivá pleť do 28 dnů — a to už od prvního nanesení.",
    bullets: [
      "Nanáší se snadno za méně než 20 minut",
      "Využívá dostupné a zcela bezpečné suroviny",
      "Zaručuje viditelné výsledky už během prvního týdne",
    ],
    cta: "ANO, CHCI OBNOVIT SVŮJ KOLAGEN",
    secondaryNote: "14denní bezpodmínečná záruka",
    imageAlt: "Mockup kurzu Domácí anti-age peeling",
  },

  story: {
    eyebrow: "TO, CO PŘED VÁMI TAJÍ",
    headline: "Dermatologové nechtějí, abyste znali toto tajemství.",
    paragraphs: [
      "Účinná látka, za kterou si na estetických klinikách účtují tisíce korun, je ta samá, kterou si můžete za pár kaček připravit doma během několika minut.",
      "Patří do rodiny kyseliny salicylové — je prokazatelně účinná pro buněčnou obnovu, stimulaci kolagenu a vymazání vrásek, pigmentových skvrn i povolené pleti.",
      "Právě proto tento návod nekoluje na YouTube ani na sociálních sítích. Průmysl s krásou zkrátka preferuje, abyste každý měsíc dál platili za předražené konzultace."
    ],
    highlights: [
      { value: "Méně než 25 Kč", label: "za jedno domácí ošetření" },
      { value: "28 dní", label: "k vaší úplné proměně" },
      { value: "1. aplikace", label: "abyste cítili, že je vaše pleť hladší" },
    ],
    cta: "CHCI SVŮJ PEELING HNED",
    industryImageAlt: "Tajemství kosmetického průmyslu odhaleno",
    scienceImageAlt: "Vědecky prokázaný účinek peelingu s kyselinou salicylovou",
  },

  benefits: {
    eyebrow: "CO VAŠE PLEŤ POCÍTÍ",
    headline: "Výsledky, které v zrcadle uvidíte okamžitě.",
    subheadline:
      "Jednoduchá rutina vytvořená pro ženy, které chtějí zdravý a krásný vzhled bez závislosti na drahých procedurách.",
    items: [
      {
        title: "Vyhlazuje jemné i hluboké vrásky",
        desc: "Stimuluje přirozenou produkci kolagenu, aby se vyplnily nedokonalosti.",
      },
      {
        title: "Zpevňuje pleť a vrací jí jas",
        desc: "Celkově omlazuje vzhled a zanechává pokožku sametově hebkou a zářivou.",
      },
      {
        title: "Zesvětluje pigmentové skvrny",
        desc: "Urychluje buněčnou obnovu pro dokonale sjednocený tón obličeje.",
      },
      {
        title: "Stahuje viditelně rozšířené póry",
        desc: "Dělá pleť dokonale hladkou na dotek s jemnou a čistou texturou.",
      },
    ],
  },

  features: {
    eyebrow: "CO SE NAUČÍTE",
    headline: "6 modulů, které promění vaši pleť za 28 dní.",
    subheadline: "Konkrétní a praktické informace, žádná omáčka. Podíváte se, aplikujete a vidíte výsledek.",
    items: [
      {
        n: "01",
        title: "Tajemství lidí, kteří nestárnou",
        desc: "Nastavení mysli, návyky a rutina žen, které stárnou krásně a s noblesou.",
      },
      {
        n: "02",
        title: "Profesionální peeling za pár korun",
        desc: "Tajný recept ze 3 dostupných surovin: aspirin, ocet a přírodní olej.",
      },
      {
        n: "03",
        title: "Anti-age shot pro koňskou dávku kolagenu",
        desc: "Detoxikační recept, který stimuluje tvorbu kolagenu zevnitř ven.",
      },
      {
        n: "04",
        title: "Protokol „Dračí krev“",
        desc: "Jak používat tuto mocnou pryskyřici pro rychlou regeneraci po peelingu.",
      },
      {
        n: "05",
        title: "Profesionální techniky nanášení",
        desc: "Krok za krokem: jak si připravit a nanést peeling pomocí sterilní gázy.",
      },
      {
        n: "06",
        title: "Viditelné výsledky a bezpečnost",
        desc: "Harmonogram aplikace: hladší pleť za 7 dní, úplná transformace za 28 dní.",
      },
    ],
  },

  targetAudience: {
    eyebrow: "TENTO KURZ JE PRO VÁS, POKUD...",
    headline: "Poznáváte se v některé z těchto situací?",
    items: [
      {
        title: "Vaše pleť je zašedlá, hrubá a bez jasu",
        desc: "I přes používání drahých krémů váš obličej stále vypadá unaveně a bez života.",
        imageAlt: "Žena se zašedlou a unavenou pletí",
      },
      {
        title: "Vaše vrásky se prohlubují",
        desc: "Mimické linky se začínají zarývat hlouběji, a vy se kvůli tomu cítíte nepříjemně.",
        imageAlt: "Pleť s hlubokými vráskami",
      },
      {
        title: "Po 35. roce vaše kontury povadly",
        desc: "Pevnost zmizela a gravitace se začala nemilosrdně projevovat.",
        imageAlt: "Povadlá pleť obličeje",
      },
      {
        title: "Drahá kosmetika prostě nefunguje",
        desc: "Už jste vyhodili tisíce korun za produkty, které slibují zázraky, ale nedělají vůbec nic.",
        imageAlt: "Drahé, ale neúčinné kosmetické produkty",
      },
    ],
  },

  howItWorks: {
    eyebrow: "KROK ZA KROKEM",
    headline: "Snadná a bezpečná aplikace u vás doma.",
    subheadline:
      "Potřebujete jen 20 minut a tři ingredience, které už pravděpodobně máte ve skříňce v kuchyni.",
    steps: [
      {
        n: "01",
        title: "Připravte si směs",
        desc: "Smíchejte ingredience v přesném poměru, který vám ukážu ve videu. Vše je domácí a běžně dostupné.",
      },
      {
        n: "02",
        title: "Naneste sterilní gázou",
        desc: "Postupujte jemnými pohyby po obličeji podle profesionální techniky. Žádná bolest, žádné pálení.",
      },
      {
        n: "03",
        title: "Užívejte si výsledky",
        desc: "Hladší pleť už za 7 dní. A po 28 dnech – naprostá proměna: svěžest, pevnost a zářivý jas.",
      },
    ],
    leftImageAlt: "Žena si nanáší domácí peeling gázou",
    rightImageAlt: "Výsledek před a po použití domácího peelingu",
  },

  carouselSection: {
    eyebrow: "SKUTEČNÉ VÝSLEDKY",
    headline: "Skutečné ženy. Skutečné proměny.",
    subheadline: "Podívejte se na fotky před a po od žen, které tento domácí protokol vyzkoušely.",
    cta: "CHCI TYTO VÝSLEDKY",
  },

  bonuses: {
    badge: "VŠE ZAHRNUTO",
    headline: "Co získáte, pokud si objednáte dnes",
    subheadline: "Doživotní přístup k celému kurzu + exkluzivní bonusy.",
    items: [
      {
        title: "Přístup na platformu ES Video",
        desc: "Největší platforma pro zdraví a estetiku – zahrnuta v ceně.",
      },
      {
        title: "Video s tajným receptem na peeling",
        desc: "Kompletní návod s přesnými poměry a praktickou ukázkou.",
      },
      {
        title: "Anti-age shot pro kolagen",
        desc: "Recept na detoxikační nápoj, který umocňuje efekt zevnitř ven.",
      },
      {
        title: "Protokol „Dračí krev“",
        desc: "Video návod krok za krokem, jak pleť po peelingu regenerovat touhle mocnou pryskyřicí.",
      },
      {
        title: "Návod krok za krokem (PDF)",
        desc: "Praktický PDF manuál k vytištění, abyste měli každou aplikaci pod kontrolou a v bezpečí.",
      },
    ],
  },

  testimonials: {
    eyebrow: "RECENZE",
    headline: "Nemusíte věřit mně. Věřte těmto ženám.",
    items: [
      {
        name: "Marie",
        role: "Praha",
        quote:
          "Bála jsem se ošetřovat si obličej sama doma. Ale postupovala jsem přesně podle návodu a rozdíl byl vidět už první týden. Dneska jsem při pohledu do zrcadla úplně nový člověk.",
      },
      {
        name: "Lenka",
        role: "Brno",
        quote:
          "Vyhazovala jsem šílené peníze na klinikách, a už jsem si to prostě nemohla dovolit. Doma to zvládám v klidu, bez bolesti a ta cena je vzhledem k výsledkům vyloženě směšná.",
      },
      {
        name: "Silvie",
        role: "Ostrava",
        quote:
          "Kamarádky se mě pořád ptají, co jsem se sebou udělala. Flíčky úplně vybledly a moje pleť je hladká jako hedvábí. Doporučuji všemi deseti.",
      },
    ],
    socialBadge: "REÁLNÉ OHLASY ZE SÍTÍ",
    socialHeadline: "Skutečné komentáře od našich kurzistek",
    socialAlt: "Recenze od kurzistek na Instagramu",
  },

  finalCta: {
    badge: "ČASOVĚ OMEZENÁ NABÍDKA",
    headline: "Začněte ještě dnes. 14denní záruka.",
    guaranteeText:
      "Pokud se do 14 dnů do svých výsledků nezamilujete, vrátíme vám 100 % částky. Žádné zbytečné otázky, žádná byrokracie. Veškeré riziko beru na sebe.",
    bundleHeadline: "Co všechno získáte, když kliknete hned teď",
    bundleList: [
      "Kompletní kurz Domácí anti-age peeling",
      "Anti-age shot pro koňskou dávku kolagenu",
      "Regenerační protokol „Dračí krev“",
      "Návod krok za krokem v PDF formátu",
      "Doživotní přístup na platformu ES Video",
    ],
    regularPriceLabel: "Původně",
    regularPrice: "499 Kč",
    offerLabel: "Pouze za",
    offerPrice: "199 Kč",
    installments: "Jednorázová platba",
    economy: "Ušetříte 60 %",
    urgencyText: "Nabídka platí pouze dnes",
    button: "CHCI OBNOVIT SVŮJ KOLAGEN HNED TEĎ",
    secureNote: "100% bezpečná platba · Zpracováno přes OrioPay",
    imageAlt: "Mockup kurzu Domácí anti-age peeling",
    guaranteeImageAlt: "Pečeť 14denní záruky",
  },

  about: {
    eyebrow: "KDO ZA TÍM STOJÍ",
    title: "Estetická expertka hvězd",
    name: "Petra Nováková",
    paragraphs: [
      "Petra Nováková je národní expertní autoritou v oblasti obličejové estetiky a péče o pleť. Vyvinula přírodní protokoly pro odstranění pigmentových skvrn, melasmy, akné a vypadávání vlasů, které už pomohly tisícům žen získat zpět své sebevědomí.",
      "Je zakladatelkou vlastní kliniky a značky dermokosmetiky. Spravuje největší kanál o zdraví a kráse na YouTube v České republice, který sledují miliony lidí.",
      "Její filozofie je jednoduchá: skutečné výsledky, s obrovskou péčí a podložené vědou — aniž byste museli být závislí na nesmyslně drahých procedurách nebo dovážených produktech.",
    ],
    stats: [
      { value: "7,68M", label: "Odběratelů na YouTube" },
      { value: "+1 000", label: "Ošetřených žen" },
      { value: "ČR", label: "Špička v péči o pleť" },
    ],
    photoAlt: "Petra Nováková, přední estetická expertka v ČR",
  },

  faq: {
    eyebrow: "ČASTO KLADENÉ DOTAZY",
    headline: "Vše, co potřebujete vědět před objednáním.",
    items: [
      {
        q: "Co přesně vlastně kupuji?",
        a: "Kupujete si digitální mini-kurz „Domácí anti-age peeling“ s přístupem na platformu ES Video. Obsah vás naučí přesný recept, správný postup nanášení, recept na anti-age shot a bezpečnostní protokol pro ošetření pleti.",
      },
      {
        q: "Co je zahrnuto v ceně?",
        a: "Video s tajným receptem, podrobný PDF manuál a přístup na platformu ES Video, kde najdete další kurzy a užitečné materiály.",
      },
      {
        q: "Jak se k obsahu dostanu?",
        a: "Hned po úspěšném zaplacení vám přijde e-mail s odkazem do platformy, kde najdete všechna videa a PDF průvodce. Zkontrolujte si i složku Spam. Doručení obvykle trvá jen pár minut.",
      },
      {
        q: "Za jak dlouho po zaplacení získám přístup?",
        a: "Doručení je automatické a okamžité po schválení platby — většinou do jedné minuty.",
      },
      {
        q: "Pro koho je tento domácí peeling vhodný?",
        a: "Je ideální pro ženy i muže nad 35 let, kteří chtějí nastartovat tvorbu kolagenu, zredukovat vrásky, skvrny a navrátit pleti ztracený jas. Nedoporučuje se lidem s alergií na aspirin, s extrémně citlivou pletí nebo s otevřenými ranami. Test snášenlivosti na kousku kůže před prvním plným nanesením je povinný.",
      },
      {
        q: "Funguje to vůbec?",
        a: "Ano. Účinná látka (kyselina acetylsalicylová) patří do stejné rodiny kyselin, jaké se používají na klinikách pro buněčnou obnovu: odstraňuje vrstvu odumřelých buněk a stimuluje kolagen. Výsledek je srovnatelný s povrchovým chemickým peelingem, ale za zlomek ceny.",
      },
      {
        q: "Jak jsou lekce zpracované?",
        a: "Formou video lekcí zkombinovaných s informačními texty. Všechno je ve velmi srozumitelném, jasném a přímém formátu.",
      },
      {
        q: "Máte nějakou záruku spokojenosti?",
        a: "Ano. Máte celých 14 dní na to si metodu vyzkoušet. Pokud nebudete spokojeni, stačí napsat na naši podporu a my vám vrátíme 100 % peněz. Bez jakýchkoli otázek.",
      },
    ],
  },

  closing: {
    eyebrow: "POUZE PO OMEZENOU DOBU",
    headline: "Vaše pleť může za 28 dní vypadat úplně jinak.",
    body: "Výběr je snadný: buď budete dál vyhazovat peníze za krémy, které nefungují, nebo jednorázově zainvestujete do přírodní, praktické metody s bezpodmínečnou zárukou.",
    cta: "CHCI ZAČÍT HNED TEĎ",
    timerNote: "Nabídka vyprší za",
    timerLabels: { days: "Dny", hours: "Hodiny", minutes: "Minuty", seconds: "Sekundy" },
  },

  footer: {
    brand: "Petra Nováková",
    tagline: "Krása tvořená vědou a péčí.",
    rights: "Všechna práva vyhrazena.",
    legalLinks: [
      { label: "Zásady ochrany osobních údajů", href: "#" },
      { label: "Obchodní podmínky", href: "#" },
    ],
    disclaimer:
      "Tento web není spojen se společností Facebook ani Meta. Výsledky se mohou lišit v závislosti na individuálních vlastnostech každého organismu.",
  },

  pixel: {
    id: "2099946003917342",
  },

  a11y: {
    skipToContent: "Přejít na obsah",
    faqExpand: "Zobrazit odpověď",
    faqCollapse: "Skrýt odpověď",
    carouselPrev: "Předchozí fotka",
    carouselNext: "Další fotka",
  },

  metadata: {
    title: "Domácí anti-age peeling | Petra Nováková",
    description:
      "Zjistěte, jak si doma udělat peeling s profesionálními výsledky. Obnovená, pevnější a zářivá pleť do 28 dnů. 14denní záruka.",
  },
};