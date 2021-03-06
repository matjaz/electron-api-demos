const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const manageWindowBtn = document.getElementById('manage-window')

manageWindowBtn.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, '../../sections/windows/manage-modal.html')
  let win = new BrowserWindow({ width: 400, height: 275 })

  win.on('resize', updateReply)
  win.on('move', updateReply)
  win.on('closed', function () { win = null })
  win.loadURL(modalPath)
  win.show()

  function updateReply () {
    const mangageWindowReply = document.getElementById('manage-window-reply')
    const message = `Size: ${win.getSize()} Position: ${win.getPosition()}`

    mangageWindowReply.innerText = message
  }
})
