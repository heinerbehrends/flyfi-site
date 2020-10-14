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
  boxShadow: "big",
  "&:focus": {
    outline: "none",
    boxShadow: "focus",
  },
}

const buttonStyles: SystemStyleObject = {
  ...inputStyles,
  backgroundColor: "muted",
  color: "#fff",
  fontWeight: "700",
  fontSize: "4",
  textTransform: "uppercase",
}

function ErrorMessage({ children }) {
  return (
    <span sx={{ marginLeft: "4", marginTop: "1", color: "red" }}>
      {children}
    </span>
  )
}

export default function ContactForm(props) {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange",
    shouldFocusError: true,
  })
  function onSubmit(data) {
    alert(JSON.stringify(data))
  }
  console.log(formState)
  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)} {...props}>
      <Flex sx={{ flexDirection: "column" }}>
        <input
          type="text"
          autoFocus
          name="Name"
          placeholder="Naam"
          ref={register({ required: true })}
          sx={inputStyles}
        />
        {errors.Name && <ErrorMessage>Dit is een verplicht veld</ErrorMessage>}
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
          <ErrorMessage>Het bericht is te kort of te lang</ErrorMessage>
        )}
        <button type="submit" sx={buttonStyles}>
          Verstuur
        </button>
      </Flex>
    </form>
  )
}
