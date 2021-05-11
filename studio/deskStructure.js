import S from '@sanity/desk-tool/structure-builder'
import {
  MdAssignment,
  MdChildCare,
  MdDashboard,
  MdDescription,
  MdGavel,
  MdHome,
  MdLocalLibrary,
  MdSettings,
  MdWork
} from "react-icons/md"

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = listItem =>
  ![
    'site-config'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title('Site config')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('config')
            .schemaType('site-config')
            .documentId('global-config')
        )
    ])
