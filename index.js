const { app, BrowserWindow } = require('electron')
// const Path = require('path')
// const Url = require('url')

let win

const createWindow = () => {
  win = new BrowserWindow({ width: 1024, height: 768, center: true })

  // win.loadURL(url.format({
  //   pathname: Path.join(__dirname, 'index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }))

  win.loadURL('http://localhost:3000')

  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}


app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})