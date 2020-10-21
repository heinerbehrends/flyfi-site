/** @jsx jsx */
import { jsx, Styled, Flex, Input } from "theme-ui"
import React from "react"
import { useForm } from "react-hook-form"
import { SystemStyleObject } from "@styled-system/css"

const inputStyles: SystemStyleObject = {
  padding: "3",
  maxWidth: ["280px", "400px"],
  borderRadius: "3",
  border: "1px solid #333",
  fontSize: ["2", "3"],
  fontWeight: "300",
  fontFamily: "Fira Sans",
  boxShadow: "big",
  transition: "background-color 1.5s ease-in",
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
  marginTop: "4",
  textTransform: "uppercase",
}

function ErrorMessage({ children }) {
  return (
    <span sx={{ marginLeft: "3", marginTop: "1", color: "red" }}>
      {children}
    </span>
  )
}

type labelProps = {
  for: string
  children: any
}

function Label(props: labelProps) {
  return (
    <label
      htmlFor={props.for}
      sx={{ marginLeft: "3", marginTop: "4", marginBottom: "1" }}
    >
      {props.children}
    </label>
  )
}

export default function ContactForm(props) {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onBlur",
    shouldFocusError: true,
  })
  function onSubmit(data) {
    alert(JSON.stringify(data))
  }
  const { dirtyFields, isSubmitting, isSubmitSuccessful } = formState

  return (
    <form
      data-netlify="true"
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Flex sx={{ flexDirection: "column" }}>
        <Label for="name">Naam</Label>
        <input
          type="text"
          autoFocus
          name="name"
          placeholder="Naam"
          ref={register({ required: true, minLength: 2, maxLength: 30 })}
          sx={{
            ...inputStyles,
            backgroundColor: `${
              dirtyFields.name && !errors.name ? "#dbffe4" : "inherit"
            }`,
          }}
        />
        {errors.name && <ErrorMessage>Dit is een verplicht veld</ErrorMessage>}
        <Label for="email">E-mail</Label>
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
          sx={{
            ...inputStyles,
            backgroundColor: `${
              dirtyFields.email && !errors.email ? "#dbffe4" : "#fff"
            }`,
          }}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Label for="message">Bericht</Label>
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
          sx={{
            ...inputStyles,
            backgroundColor: `${
              dirtyFields.message && !errors.message ? "#dbffe4" : "#fff"
            }`,
          }}
        ></textarea>
        {errors.message && (
          <ErrorMessage>Het bericht is te kort of te lang</ErrorMessage>
        )}
        <button type="submit" sx={buttonStyles}>
          Verstuur
        </button>
        {isSubmitSuccessful ? (
          <span sx={{ color: "green", marginLeft: "3", marginTop: "1" }}>
            U bericht is verstuurd
          </span>
        ) : null}
      </Flex>
    </form>
  )
}
