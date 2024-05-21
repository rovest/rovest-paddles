import Container from "@/layouts/Container";

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xCO8IlTHKlq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GoogleMapsEmbed } from '@next/third-parties/google'
import MapComponent from "./map";


export default function MapTestPage() {
  return (
  
    <Container type="main" verticalAlign="middle" className="justify-center">
    <MapComponent lat={36} long={128} />
            
    </Container>
  )
}