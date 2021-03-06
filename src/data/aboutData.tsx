/** @jsxFrag React.Fragment */
import React from "react";

type About = {
  heading: string;
  text: React.ReactNode;
};

export const aboutTexts: About[] = [
  {
    heading: "De wortels",
    text: (
      <>
        Met mijn achtergrond als theatervormgever en muzikant is het niet
        verrassend dat creativiteit een van de competenties en drijfveren van{" "}
        <em>flyfi</em> is. In het verleden heb ik als vormgever, muzikant en
        kunstenaar aan projecten gewerkt met Wubbo Okkels en Wim T. Schippers,
        voorstelling ontwikkeld voor Noorderzon en het NNT en tentoongesteld in
        o.a. Galerie Sign en op de alternatieve kunstbeurs Kunstvlaai.
      </>
    ),
  },
  {
    heading: "De connecties",
    text: (
      <>
        Ik houdt ervan om mooie dingen te bedenken en te bouwen en net die extra
        moeite te doen om een bijzondere kwaliteit te bereiken. Om daar te komen
        investeer ik veel tijd in onderzoek en het up-to-date houden van mijn
        kennis en technische vaardigheden. De combinatie van creativiteit en
        techniek is ook wat me fascineerd aan web development. Vroeger
        ontwikkelde ik voorstellingen, decors en installaties, nu zijn het
        webapps. Centraal staat daarbij nog steeds de belevenis van de
        toeschouwer of gebruiker.
      </>
    ),
  },
  {
    heading: "De groei",
    text: (
      <>
        De afgelopen drie jaar heb ik mezelf geleerd om te programmeren en
        moderne websites te bouwen. Ik begon met de programmeertal Python en de
        MIT cursus 6.00
        <em> Introduction to computer science and programming</em>. Later leerde
        ik de basics van PHP en Laravel, Git en mySQL. Nu ligt mijn focus op
        React en TypeScript en het bouwen van Progressive Web Apps met Gatsby
        and Next.js. In een markt die nog steeds wordt gedomineerd door
        WordPress wil ik een impact maken door websites te bouwen met een
        verbeterde gebruikerservaring en die aan te bieden tegen scherpe
        prijzen.
      </>
    ),
  },
  {
    heading: "De rest",
    text: (
      <>
        Ik woon en werk in het schitterende Groningen met mijn fantastische
        vrouw en twee lieve kinderen. Als muzikant verzamel ik LP’s in diverse
        genres zoals pop, jazz, funk, rock en klassieke muziek en speel ik
        gitaar, bas, banjo en mandoline. Daarnaast programmeer ik drums en
        synths, speel gitaar en basgitaar en produceer ik de muziek van de New
        Wave band The Buzz. Ik houdt me fit met voetbal en fietsen en gezond
        door lekker te koken, vooral klassiekers uit de internationale keuken.
      </>
    ),
  },
];

export const footerOverMijText = `Creativiteit en liefde voor vakwerk zijn de drijfveren van flyfi. Ik
streef er altijd naar om een mooi resultaat neer te zetten, als ontwerper
en programmeur, maar ook als veelzijdige muzikant en als faire
verdediger in mijn voetbalelftal.`;
