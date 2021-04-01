import React from "react";

export type Faq = { vraag: string; antwoord: React.ReactNode };

export const faqs: Faq[] = [
  {
    vraag: "Wat is een Progressive Web App?",
    antwoord: (
      <>
        Een{" "}
        <a href="https://web.dev/progressive-web-apps/">Progressive Web App</a>{" "}
        (PWA) is een webapplicatie die meer lijkt op een app voor mobiele
        telefoons dan op een ouderwetse website. Of, in de worden van een van de
        uitvinders van het begrip: het zijn websites die de juiste vitamines
        hebben genomen. <br /> Bedrijven die voor een PWA hebben gekozen
        berichten over{" "}
        <a href="https://ymedialabs.com/progressive-web-apps">
          verbeteringen in conversie en omzet
        </a>
        . PWA's combineren het beste van het web en van mobiele apps. <br />
      </>
    ),
  },
  {
    vraag: "Wat zijn de kenmerken van een Progressive Web App?",
    antwoord: (
      <>
        <ul sx={{ paddingLeft: "3", listStyleType: "decimal" }}>
          <li>
            <em>Progressief</em>: ze werken voor elke gebruiker.
          </li>
          <li>
            <em>Reagerend</em>: ze werken op grote en kleine schermen.
          </li>
          <li>
            <em>Snel</em>: ze laden data efficienter dan gewone websites.
          </li>
          <li>
            <em>Netwerk onafhankelijk</em>: door middel van service workers
            werken zij ook offline.
          </li>
          <li>
            <em>App-achtig</em>: de interacties en navigatie voelen als die van
            een app.
          </li>
          <li>
            <em>Vers</em>: Anders dan mobiele apps zijn PWA's altijd up-to-date.
          </li>
          <li>
            <em>Veilig</em>: Door https verbinding kan de data tijdens de
            overdracht niet verandert worden.
          </li>
          <li>
            <em>Vindbaar</em>: PWA's kunnen gewoon via zoekmachines als Google
            gevonden worden.
          </li>
          <li>
            <em>Contact herstellen</em>: Net als mobiele apps kunne PWA's
            meldingen (push notifications) op het scherm brengen.
          </li>
          <li>
            <em>Koppelbaar</em>: Anders dan mobiele apps kun je PWA's met een
            gewone link koppelen.
          </li>
          <li>
            <em>Installeerbaar</em>: Anders dan gewone sites kunnen PWA's op
            mobieltjes geinstalleerd worden.
          </li>
        </ul>
      </>
    ),
  },
  {
    vraag: "Waarom is een flyfi site zoveel sneller dan WordPress?",
    antwoord: (
      <>
        Als een WordPress site laadt moet de server de pagina nog renderen,
        terwijl dit bij een <em>flyfi</em> site al vantevoren is gebeurd. De
        kant en klare html pagina wordt vervolgens via het supersnelle CDN
        (content delivery network) van <a href="https://netlify.com">Netlify</a>{" "}
        geladen. Door het opsplitsen van de code wordt alleen die code geladen,
        die voor de eerste pagina noodzakelijk is. <br />
        Bestanden die op alle pagina's gebruikt worden, worden maar een keer
        gedownload. Als de pagina geladen is gedraagt zich een flyfi site als
        een moderne webapp. Zodra een link zichtbaar is wordt de nodige data
        voor de gelinkte pagina al op de achtergrond geladen zodat de pagina
        onmiddelijk beschikbaar is als u op de link klikt.
      </>
    ),
  },
  {
    vraag: "Hoe worden de foto's geoptimaliseerd?",
    antwoord: (
      <>
        Alle grotere foto's worden pas geladen als de gebruiker deze kan zien.
        Terwijl de foto laadt wordt eerst een onscherpe of getekende versie
        getoond, die wordt vervangen door de foto als deze is geladen. <br />{" "}
        Elke foto wordt in verschillende resoluties gerenderd en de gebruiker
        laadt altijd die versie die het best bij zijn of haar apparaat past. Zo
        ziet de gebruiker met een scherm met een hoge resolutie altijd scherpe
        foto's en de gebruiker met een oud mobieltje laadt alleen die pixels die
        hij ook daadwerkelijk kan zien.
      </>
    ),
  },
  {
    vraag: "Welke software gebruikt flyfi?",
    antwoord: (
      <>
        Voor de allermeest projecten gebruikt ik het moderne framework{" "}
        <a href="https://www.gatsbyjs.com">Gatsby</a>. Gatsby is er speciaal
        voor gemaakt om moderne webapps zo snel mogelijk te maken. Gatsby maakt
        gebruikt van de user interface bibliotheek{" "}
        <a href="https://reactjs.org/">React</a> die door Facebook wordt
        ontwikkelt, en ook door andere grote sites zoals Twitter wordt gebruikt.
        <br />
        Gatsby is een open source software en een commercieel bedrijf, dat
        hosting en cloud gebaseerde oplossingen voor Gatsby apps aanbiedt. Voor
        apps waarbij veel interactie met de gebruikers plaats vindt is het
        framework Nextjs vaak een betere match.
      </>
    ),
  },
  {
    vraag: "Waarom zijn flyfi sites voordelig, schaalbaar en veilig?",
    antwoord: (
      <>
        flyfi sites hebben geen ouderwetse server nodig omdat de bestanden van
        tevoren al gerenderd zijn. Dit maakt de hosting niet alleen snel, maar
        ook goedkoop, makkelijk, veilig en schaalbaar zodat u site ook tijdens
        uw Black Friday Sale of als deze viraal gaat goed te bereiken is. Omdat
        het front-end losgekoppelt is van het back-end kan de database niet
        worden gehackt of overbelast raken. Dit scheelt u een hoop zorgen over
        veiligheid en bereikbaarheid terwijl u ook nog geld bespaart.
      </>
    ),
  },
  // {vraag: "Wat is de PRPL pattern?"}
];
