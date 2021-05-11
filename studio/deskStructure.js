import S from '@sanity/desk-tool/structure-builder'
import {
  MdDashboard,
  MdSettings
} from 'react-icons/md'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  ![
    'post',
    'site-config'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Posts')
        .icon(MdDashboard)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Posts')),

      S.listItem()
        .title('Site config')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('site-config')
            .documentId('global-config')
        ),

      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
