/** @jsx jsx */
import { jsx, Styled, Flex, Input } from "theme-ui"
import React from "react"
import { useForm } from "react-hook-form"
import { SystemStyleObject } from "@styled-system/css"

const inputStyles: SystemStyleObject = {
  padding: "3",
  marginX: "4",
  marginTop: "4",
  maxWidth: ["280px", "400px"],
  borderRadius: "3",
  border: "1px solid #333",
  fontSize: ["2", "3"],
  fontWeight: "300",
  fontFamily: "Fira Sans",
  "&:focus": {
    outline: "none",
    boxShadow: "focus",
  },
}

function ErrorMessage({ children }) {
  return (
    <span sx={{ marginLeft: "4", marginTop: "1", color: "red" }}>
      {children}
    </span>
  )
}

export default function ContactForm() {
  const { register, handleSubmit, watch, errors } = useForm()
  function onSubmit(data) {
    console.log(data)
  }
  return (
    <React.Fragment>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <Flex sx={{ flexDirection: "column", marginTop: "6" }}>
          <input
            type="text"
            autoFocus
            name="Name"
            placeholder="Naam"
            ref={register({ required: true })}
            sx={inputStyles}
          />
          {errors.Name && (
            <ErrorMessage>Dit is een verplicht veld</ErrorMessage>
          )}
          <input
            type="email"
            name="email"
            placeholder="E-mail adres"
            ref={register({
              required: "Dit is een verplicht veld",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Ongeldige e-mail adres",
              },
            })}
            sx={inputStyles}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <textarea
            name="message"
            form="contact-form"
            ref={register({
              required: true,
              minLength: 12,
              maxLength: 2000,
            })}
            placeholder="Uw vraag of bericht"
            rows={6}
            sx={inputStyles}
          ></textarea>
          {errors.message && (
            <ErrorMessage>
              Het bericht moet tussen 12 en 2000 letters lang zijn
            </ErrorMessage>
          )}
          <button type="submit" sx={inputStyles}>
            Verstuur
          </button>
        </Flex>
      </form>
    </React.Fragment>
  )
}
