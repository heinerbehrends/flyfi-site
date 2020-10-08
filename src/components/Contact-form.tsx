/** @jsx jsx */
import { jsx, Styled, Flex, Input } from "theme-ui"
import React from "react"
import { useForm } from "react-hook-form"
import { SystemStyleObject } from "@theme-ui/core"

const inputStyles: SystemStyleObject = {
  padding: "3",
  marginX: "4",
  marginTop: "4",
  maxWidth: ["280px", "400px"],
  borderRadius: "3",
  border: "1px solid #333",
  fontSize: ["2", "3"],
  fontWeight: "200",
  fontFamily: "Fira Sans",
  "&:focus": {
    outline: "none",
    boxShadow: "focus",
  },
}

export default function ContactForm() {
  const { register, handleSubmit, watch, errors } = useForm()
  function onSubmit(data) {
    console.log(data)
  }
  return (
    <React.Fragment>
      <Styled.h1 sx={{ marginTop: "6", fontSize: "8vw", textAlign: "center" }}>
        Contact
      </Styled.h1>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <Flex sx={{ flexDirection: "column" }}>
          <input
            type="text"
            autoFocus
            name="Name"
            placeholder="Uw naam"
            ref={register({ required: true })}
            sx={inputStyles}
          />
          {errors.Name && <span>Dit is een verplicht veld</span>}
          <input
            type="email"
            name="email"
            placeholder="Uw e-mail adres"
            ref={register({
              required: "Dit is een verplicht veld",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Ongeldige e-mail adres",
              },
            })}
            sx={inputStyles}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <textarea
            name="message"
            form="contact-form"
            ref={register({
              required: true,
              minLength: 12,
              maxLength: 2000,
            })}
            placeholder="Uw vraag of bericht"
            rows={8}
            sx={inputStyles}
          ></textarea>
          {errors.message && (
            <span>Het bericht moet tussen 12 en 2000 letters lang zijn</span>
          )}
          <button type="submit" sx={inputStyles}>
            Verstuur
          </button>
        </Flex>
      </form>
    </React.Fragment>
  )
}
