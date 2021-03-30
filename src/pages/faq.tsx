/** @jsx jsx */
/** @jsxFrag React.Fragment */
import { jsx, Themed } from "theme-ui";
import React from "react";
import SEO from "../components/SEO";
import ArrowDownIcon from "../icons/arrow_circle_down-24px.svg";
import ArrowUpIcon from "../icons/arrow_circle_up-24px.svg";
import { Link as ScrollLink } from "react-scroll/";

export default function FAQs() {
  return (
    <>
      <SEO
        description={
          "Antwoorden voor vaak gestelde vragen over flyfi's snelle webapps"
        }
      />
      <Themed.h1 id={"top"}>Vaak gestelde vragen</Themed.h1>
      <main sx={{ maxWidth: "100ch", marginX: "auto", marginTop: "4" }}>
        <section sx={{ marginTop: ["4", "5"] }}>
          {faqs.map((faq, i) => (
            <ScrollLink
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
              to={`question${i}`}
              smooth={true}
              offset={-120}
            >
              <Themed.h3 sx={{ marginX: 0, marginTop: 4 }} key={i}>
                <span
                  sx={{
                    fill: "text",
                    marginRight: 3,
                  }}
                >
                  <ArrowDownIcon />
                </span>
                {faq.vraag}
              </Themed.h3>
            </ScrollLink>
          ))}
        </section>
        <section sx={{ marginTop: 6 }}>
          {faqs.map((faq, i) => (
            <>
              <Themed.h3 sx={{ marginX: 0, marginTop: 4 }} id={`question${i}`}>
                <span
                  sx={{
                    fill: "text",
                    marginRight: 3,
                    "&:hover": {
                      cursor: "pointer",
                      transform: "scale(1.2)",
                    },
                  }}
                >
                  <ScrollLink to={"top"} offset={-64}>
                    <ArrowUpIcon />
                  </ScrollLink>
                </span>
                {faq.vraag}
              </Themed.h3>
              <Themed.p sx={{ marginTop: 3 }}>{faq.antwoord}</Themed.p>
            </>
          ))}
        </section>
      </main>
    </>
  );
}

const faqs = [
  {
    vraag: "Wat is een Progressive Web App?",
    antwoord: (
      <>
        Een{" "}
        <a href="https://web.dev/progressive-web-apps/">Progressive Web App</a>{" "}
        (PWA) is een webapplicatie die meer lijkt op een app voor mobiele
        telefoons dan op een ouderwetse website. Of, in de worden van een van de
        uitvinders van het begrip: het zijn websites die de juiste vitamines
        hebben genomen. Veel bedrijven die voor een PWA hebben gekozen berichten
        over{" "}
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
        De belangrijke kenmerken zijn:
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
        die voor de eerste pagina noodzakelijk is. Bestanden die op alle
        pagina's gebruikt worden, worden maar een keer gedownload. <br /> Als de
        pagina geladen is gedraagt zich een flyfi site als een moderne webapp.
        Zodra een link zichtbaar is wordt de nodige data voor de gelinkte pagina
        al op de achtergrond geladen zodat de pagina onmiddelijk beschikbaar is
        als u op de link klikt.
      </>
    ),
  },
  {
    vraag: "Hoe worden de foto's geoptimaliseerd?",
    antwoord: (
      <>
        Alle grotere foto's worden pas geladen als de gebruiker deze kan zien.
        Terwijl de foto laadt wordt eerst een onscherpe of getekende versie
        getoond, die wordt vervangen door de foto als deze is geladen. Elke foto
        wordt in verschillende resoluties gerenderd en de gebruiker laadt altijd
        die versie die het best bij zijn of haar apparaat past. Zo ziet de
        gebruiker met een scherm met een hoge resolutie altijd scherpe foto's en
        de gebruiker met een oud mobieltje laadt alleen die pixels die hij ook
        daadwerkelijk kan zien.
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
        <a href="https://reactjs.org/">React</a>, die door Facebook wordt
        ontwikkelt, en ook door andere grote sites zoals twitter wordt gebruikt.
        Gatsby is een open source software en een commercieel bedrijf, dat cloud
        gebaseerde oplossingen voor Gatsby apps aanbiedt.
        <br />
        Voor de schitterende animaties gebruik ik{" "}
        <a href="https://www.framer.com/motion/">Framer Motion</a> en voor het
        ontwerpproces <a href="https://figma.com">Figma</a>.
      </>
    ),
  },
  {
    vraag: "Waarom zijn flyfi site goedkoop, schaalbaar en veilig?",
    antwoord: (
      <>
        flyfi sites hebben geen ingewikkelde server nodig omdat de bestanden van
        tevoren al gerenderd zijn. Dit maakt de hosting niet alleen snel, maar
        ook goedkoop, makkelijk, veilig en schaalbaar zodat u site ook tijdens
        uw Black Friday Sale of als deze viraal gaat goed te bereiken is. Omdat
        de site geen server gebruikt kan deze ook niet gehackt worden of
        overbelast raken. Dit scheelt u een hoop zorgen over veiligheid en
        bereikbaarheid terwijl u ook nog geld bespaart.
      </>
    ),
  },
  // {vraag: "Wat is de PRPL pattern?"}
];
