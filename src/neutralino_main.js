function setTray() {
  console.log('setTray')
  if (NL_MODE != 'window') {
    console.log('INFO: Tray menu is only available in the window mode.')
    return
  }
  let tray = {
    icon: '/resources/icons/trayIcon.png',
    menuItems: [
      { id: 'VERSION', text: 'Get version' },
      { id: 'SEP', text: '-' },
      { id: 'QUIT', text: 'Quit' }
    ]
  }
  Neutralino.os.setTray(tray)
}

function onTrayMenuItemClicked(event) {
  switch (event.detail.id) {
    case 'VERSION':
      Neutralino.os.showMessageBox(
        'Version information',
        `Neutralinojs server: v${NL_VERSION} | Neutralinojs client: v${NL_CVERSION}`
      )
      break
    case 'QUIT':
      Neutralino.app.exit()
      break
  }
}

export default function neutralino_main() {
  Neutralino.init()
  Neutralino.events.on('trayMenuItemClicked', onTrayMenuItemClicked)
  Neutralino.events.on('windowClose', () => {
    Neutralino.app.exit()
  })

  if (NL_OS != 'Darwin') {
    // TODO: Fix https://github.com/neutralinojs/neutralinojs/issues/615
    setTray()
  }
}
