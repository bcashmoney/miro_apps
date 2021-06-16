const SPREADSHEET_URL =
  'https://docs.google.com/spreadsheets/d/121-56BwZe8Cws0A8xE_cSGXc64YD_bBPfQM8o2YVnaM/edit?usp=sharing'

    miro.onReady(() => {
      miro.initialize({
        extensionPoints: {
          bottomBar: {
            title: 'Some title',
            svgIcon: '<circle cx="12" cy="12" r="9" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-width="2"/>',
            onClick: syncWithSheet
          }
        }
      })
    })

async function syncWithSheet() {
    alert('Hi!')
}
