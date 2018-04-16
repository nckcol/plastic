const fs = require('fs')
var tinycolor = require('tinycolor2')

const baseColour = '#070b11'

const colours = {
  blue: '#61afef', // Cornflower Blue
  cyan: '#56b6c2', // Fountain Blue
  green: '#98c379', // Olivine
  magenta: '#c678dd', // Lavender
  orange: '#d19a66', // Whiskey
  red: '#e06c75', // Sunglo
  yellow: '#e5c07b' // Harvest Gold
}

const scopes = {
  storage: colours.blue,
  primitive: colours.cyan,
  string: colours.green,
  function: colours.orange,
  tag: colours.yellow,
  keyword: colours.red
}

const isDark = tinycolor(baseColour).isDark()

const uiScopes = {
  variable: isDark
    ? tinycolor(baseColour).brighten(80).toString()
    : tinycolor(baseColour).brighten(-80).toString(),
  text: isDark
    ? tinycolor(baseColour).brighten(64).toString()
    : tinycolor(baseColour).brighten(-64).toString(),
  comment: isDark
    ? tinycolor(baseColour).brighten(33).toString()
    : tinycolor(baseColour).brighten(-33).toString(),
  uiForeground: isDark ? '#ffffff' : '#000000',
  ui4: isDark
    ? tinycolor(baseColour).brighten(20).toString()
    : tinycolor(baseColour).brighten(-20).toString(),
  ui3: isDark
    ? tinycolor(baseColour).brighten(10).toString()
    : tinycolor(baseColour).brighten(-10).toString(),
  ui2: isDark
    ? tinycolor(baseColour).brighten(6).toString()
    : tinycolor(baseColour).brighten(-6).toString(),
  ui1: baseColour,
  error: tinycolor(colours.red).brighten(-10).toString(),
  warning: tinycolor(colours.yellow).brighten(-6).toString(),
  info: tinycolor(colours.blue).brighten(-27).toString()
}

const template = {
  name: 'Plastic',
  colors: {
    'activityBar.background': uiScopes.ui3,
    'activityBar.dropBackground': uiScopes.ui3,
    'activityBar.foreground': uiScopes.uiForeground,
    'activityBarBadge.background': scopes.keyword,
    'activityBarBadge.foreground': uiScopes.uiForeground,
    'button.background': scopes.keyword,
    contrastBorder: uiScopes.ui1,
    'debugToolBar.background': uiScopes.ui2,
    'dropdown.background': uiScopes.ui2,
    'dropdown.border': uiScopes.ui1,
    'editor.background': uiScopes.ui3,
    'editor.findMatchBackground': '#42557B',
    'editor.findMatchHighlightBackground': '#314365',
    'editor.foreground': uiScopes.text,
    'editor.lineHighlightBackground': uiScopes.ui3,
    'editor.selectionBackground': uiScopes.ui4,
    'editor.wordHighlightBackground': '#00000000',
    'editor.wordHighlightBorder': scopes.storage,
    'editor.wordHighlightStrongBackground': '#00000000',
    'editor.wordHighlightStrongBorder': uiScopes.variable,
    'editorActiveLineNumber.foreground': uiScopes.text,
    'editorBracketMatch.border': scopes.storage,
    'editorCursor.foreground': uiScopes.text,
    'editorError.foreground': uiScopes.error,
    'editorGroup.background': uiScopes.ui2,
    'editorGroup.border': uiScopes.ui1,
    'editorGroupHeader.tabsBackground': uiScopes.ui2,
    'editorHoverWidget.background': uiScopes.ui2,
    'editorHoverWidget.border': scopes.storage,
    'editorIndentGuide.background': uiScopes.ui4,
    'editorInfo.foreground': uiScopes.info,
    'editorLineNumber.foreground': uiScopes.ui4,
    'editorOverviewRuler.border': uiScopes.ui1,
    'editorOverviewRuler.errorForeground': uiScopes.error,
    'editorOverviewRuler.infoForeground': uiScopes.info,
    'editorOverviewRuler.warningForeground': uiScopes.warning,
    'editorRuler.foreground': uiScopes.ui4,
    'editorSuggestWidget.background': uiScopes.ui2,
    'editorSuggestWidget.border': scopes.storage,
    'editorSuggestWidget.selectedBackground': uiScopes.ui3,
    'editorWarning.foreground': uiScopes.warning,
    'editorWhitespace.foreground': uiScopes.ui4,
    'editorWidget.background': uiScopes.ui3,
    focusBorder: scopes.storage,
    'input.background': uiScopes.ui1,
    'inputOption.activeBorder': scopes.storage,
    'inputValidation.errorBackground': uiScopes.error,
    'inputValidation.errorBorder': uiScopes.error,
    'inputValidation.infoBackground': uiScopes.info,
    'inputValidation.infoBorder': uiScopes.info,
    'inputValidation.warningBackground': uiScopes.warning,
    'inputValidation.warningBorder': uiScopes.warning,
    'list.activeSelectionBackground': uiScopes.ui3,
    'list.activeSelectionForeground': uiScopes.variable,
    'list.focusBackground': '#2c313a',
    'list.hoverBackground': '#292d35',
    'list.inactiveSelectionBackground': uiScopes.ui3,
    'notificationCenterHeader.background': uiScopes.ui2,
    'notifications.background': uiScopes.ui2,
    'panel.background': uiScopes.ui2,
    'panel.border': uiScopes.ui1,
    'peekView.border': scopes.storage,
    'peekViewEditor.background': uiScopes.ui2,
    'peekViewEditor.matchHighlightBackground': uiScopes.ui4,
    'peekViewResult.background': uiScopes.ui3,
    'peekViewResult.matchHighlightBackground': uiScopes.ui4,
    'peekViewResult.selectionBackground': uiScopes.ui3,
    'peekViewResult.selectionForeground': uiScopes.text,
    'peekViewTitle.background': uiScopes.ui3,
    'scrollbarSlider.activeBackground': uiScopes.variable + '77',
    'scrollbarSlider.background': uiScopes.ui4 + '99',
    'scrollbarSlider.hoverBackground': uiScopes.ui4 + 'aa',
    'sideBar.background': uiScopes.ui2,
    'sideBarSectionHeader.background': uiScopes.ui3,
    'statusBar.background': uiScopes.ui3,
    'statusBar.debuggingBackground': uiScopes.ui3,
    'statusBar.foreground': '#9da5b4',
    'statusBar.noFolderBackground': uiScopes.ui3,
    'statusBarItem.hoverBackground': uiScopes.ui3,
    'tab.activeBackground': uiScopes.ui3,
    'tab.activeForeground': uiScopes.text,
    'tab.border': uiScopes.ui1,
    'tab.inactiveBackground': uiScopes.ui2,
    'tab.inactiveForeground': uiScopes.comment,
    'terminal.ansiBlack': uiScopes.ui3,
    'terminal.ansiBlue': scopes.storage,
    'terminal.ansiBrightBlack': uiScopes.comment,
    'terminal.ansiBrightBlue': '#008cff',
    'terminal.ansiBrightCyan': '#00e1ff',
    'terminal.ansiBrightGreen': '#6aff00',
    'terminal.ansiBrightMagenta': '#c300ff',
    'terminal.ansiBrightRed': '#ff0015',
    'terminal.ansiBrightWhite': uiScopes.variable,
    'terminal.ansiBrightYellow': '#ffa600',
    'terminal.ansiCyan': scopes.primitive,
    'terminal.ansiGreen': scopes.string,
    'terminal.ansiMagenta': '#C678DD',
    'terminal.ansiRed': scopes.keyword,
    'terminal.ansiWhite': uiScopes.text,
    'terminal.ansiYellow': scopes.tag,
    'terminal.foreground': uiScopes.text,
    'titleBar.activeBackground': uiScopes.ui3,
    'titleBar.activeForeground': uiScopes.variable,
    'titleBar.inactiveBackground': uiScopes.ui3,
    'titleBar.inactiveForeground': uiScopes.text,
    'widget.shadow': uiScopes.ui1
  },
  tokenColors: [
    {
      name: 'Punctuation',
      scope: ['meta.brace', 'punctuation', 'string.quoted.docstring'],
      settings: {
        foreground: uiScopes.text
      }
    },
    {
      name: 'Variable',
      scope: ['support.type.property-name', 'support.variable', 'variable'],
      settings: {
        foreground: uiScopes.variable
      }
    },
    {
      name: 'Blue',
      scope: ['storage'],
      settings: {
        foreground: colours.blue
      }
    },
    {
      name: 'Primitive',
      scope: ['constant', 'keyword.other.unit'],
      settings: {
        foreground: colours.cyan
      }
    },
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        foreground: uiScopes.comment
      }
    },
    {
      name: 'Green',
      scope: ['string', 'markup.inline.raw'],
      settings: {
        foreground: colours.green
      }
    },
    {
      name: 'Orange',
      scope: ['entity', 'support.function', 'punctuation.definition.entity'],
      settings: {
        foreground: colours.orange
      }
    },
    {
      name: 'Yellow',
      scope: ['entity.name.tag'],
      settings: {
        foreground: colours.yellow
      }
    },
    {
      name: 'Red',
      scope: [
        'entity.name.section',
        'keyword',
        'punctuation.definition.heading',
        'punctuation.definition.keyword'
      ],
      settings: {
        foreground: colours.red
      }
    },
    {
      name: 'Magenta',
      scope: ['variable.language'],
      settings: {
        foreground: colours.magenta
      }
    },
    {
      name: 'Bold',
      scope: [
        'markup.bold',
        'punctuation.definition.bold',
        'entity.other.attribute-name.id'
      ],
      settings: {
        fontStyle: 'bold'
      }
    },
    {
      name: 'Italic',
      scope: ['comment', 'markup.italic', 'punctuation.definition.italic'],
      settings: {
        fontStyle: 'italic'
      }
    }
  ]
}

const json = JSON.stringify(template, null, 2)

fs.writeFile('themes/plastic-theme.json', json, 'utf8', () =>
  console.log('done')
)
