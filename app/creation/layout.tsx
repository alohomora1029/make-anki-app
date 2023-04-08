import '../globals.css'
import { Provider } from '../provider'

export default function CreationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <Provider>
    <html lang="en">
      <body>{children}</body>
       {/* footer */}
    </html>
  </Provider>
  )
}
