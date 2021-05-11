import groq from 'groq'

export const configQuery = groq`
  *[_id == "global-config"][0] {
    ...
  }
`
