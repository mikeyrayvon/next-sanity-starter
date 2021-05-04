import groq from 'groq'

export const configQuery = groq`
  *[_id == "global-config"][0] {
    ...,
    headerNotice[]{
      ...,
      markDefs[]{
        ...,
        _type == 'internalLink' => {
          _key,
          'slug': @->slug.current,
          'type': @->_type
        },
        _type == 'actionLink' => {
          _key,
          'slug': @->slug.current,
          'type': @->_type
        },
      },
    },
    mainNav[] {
      ...,
      'title': reference->title,
      'slug': reference->slug.current,
      'docType': reference->_type
    },
    footerNav {
      action[] {
        ...,
        'title': reference->title,
        'slug': reference->slug.current,
        'docType': reference->_type
      },
      issues[] {
        ...,
        'title': reference->title,
        'slug': reference->slug.current,
        'docType': reference->_type
      },
      about[] {
        ...,
        'title': reference->title,
        'slug': reference->slug.current,
        'docType': reference->_type
      },
    }
  }
`
