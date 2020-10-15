/** @jsx jsx */
import { jsx, Styled, Box } from "theme-ui"
import React from "react"
import Layout from "../components/Layout"

export default function About() {
  return (
    <Layout>
      <Styled.h1 sx={{ textAlign: "center", paddingTop: ["3", "4", "4", "5"] }}>
        Over <em>flyfi</em> en mij
      </Styled.h1>

      <Box
        sx={{
          maxWidth: "480px",
          marginX: "auto",
          marginTop: "4",
        }}
      >
        <Styled.h4>Waar ik vandaan kom</Styled.h4>
        <Styled.p>
          Met mijn achtergrond als theatervormgever en muzikant is het niet
          verrassend dat creativiteit een van de competenties en drijfveren van
          flyfi is. In het verleden heb ik als vormgever, muzikant en kunstenaar
          aan projecten gewerkt met Wubbo Okkels en Wim T. Schippers,
          voorstelling ontwikkeld voor Noorderzon en het NNT en tentoongesteld
          in o.a. Galerie Sign en op de alternatieve kunstbeurs Kunstvlaai.
        </Styled.p>
        <Styled.h4>Hoe het allemaal samenhangt</Styled.h4>
        <Styled.p>
          Ik houdt ervan om mooie dingen te bedenken en te bouwen en net die
          extra moeite te doen om een bijzondere kwaliteit te bereiken. Om daar
          te komen investeer ik veel tijd in onderzoek en het up-to-date houden
          van mijn kennis en technische vaardigheden. De combinatie van
          creativiteit en techniek is ook wat me fascineerd aan web development.
          Vroeger ontwikkelde ik voorstellingen, decors en installaties, nu zijn
          het webapps. Centraal staat daarbij nog steeds de belevenis van de
          toeschouwer of gebruiker.
        </Styled.p>
        <Styled.h4>Wat ik nu doe</Styled.h4>
        <Styled.p>
          De afgelopen drie jaar heb ik mezelf geleerd om te programmeren en
          moderne websites te bouwen. Ik begon met de programmeertal Python en
          de MIT cursus 6.00
          <em> Introduction to computer science and programming</em>. Later
          leerde ik de basics van PHP en Laravel, Git en mySQL. Nu ligt mijn
          focus op TypeScript en het bouwen van Progressive Web Apps met Gatsby
          and Next.js. In een markt die nog steeds wordt gedomineerd door
          WordPress wil ik een impact maken door website te bouwen met een
          verbeterde gebruikerservaring en die aan te bieden tegen scherpe
          prijzen.
          <Styled.h4>Wat er nog meer is </Styled.h4>
          Ik woon en werk in het schitterende Groningen met mijn lieve vrouw en
          twee fantastische kinderen. Als muzikant verzamel ik LP’s in diverse
          genres zoals pop, jazz, funk, rock en klassieke muziek en speel ik
          gitaar, bas, banjo en mandoline en elk snaarinstrument dat u mij in de
          handen geeft. Daarnaast programmeer ik drums en synths en produceer ik
          de muziek van The Buzz. Verder houdt ik me fit met voetbal en fietsen
          en gezond door lekker te koken, vooral klassiekers uit de Italiaanse
          en Duitse keuken met af en toe een uitstapje naar bvb. India of
          Marocco.
        </Styled.p>
      </Box>
    </Layout>
  )
}
