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
import MapComponent from "./map-test/map";


export default function Component() {
  return (
  
    <Container type="main" verticalAlign="middle" className="justify-center">
    <Tabs className="w-full max-w-3xl" defaultValue="specs">
      <TabsList className="flex w-full justify-start border-b">
        <TabsTrigger value="specs">Robot Specifications</TabsTrigger>
        <TabsTrigger value="position">Robot Position</TabsTrigger>
        <TabsTrigger value="control">Robot Control</TabsTrigger>
      </TabsList>
      <TabsContent value="specs">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Robot Specifications</CardTitle>
            <CardDescription>Details about the technical specifications of the robot.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
              <span className="font-medium">Model:</span>
              <span>Acme Robotics X-5000</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
              <span className="font-medium">Dimensions:</span>
              <span>2m x 1m x 1.5m</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
              <span className="font-medium">Weight:</span>
              <span>250kg</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
              <span className="font-medium">Power Source:</span>
              <span>Lithium-ion battery, 12V</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
              <span className="font-medium">Sensors:</span>
              <span>3D camera, ultrasonic distance sensors, infrared proximity sensors</span>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="position">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Robot Position</CardTitle>
              <CardDescription>Information about the current position and orientation of the robot.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
                <span className="font-medium">Location:</span>
                <span>Warehouse A, Aisle 3</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
                <span className="font-medium">Coordinates:</span>
                <span>X: 12.45, Y: 7.89, Z: 1.2</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
                <span className="font-medium">Orientation:</span>
                <span>Heading: 45°, Pitch: 10°, Roll: 2°</span>
              </div>
              <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
                <span className="font-medium">Elevation:</span>
                <span>1.5m above ground</span>
              </div>
              <MapComponent lat={36} long={128} />
            </CardContent>
          </Card>
          <div className="h-[400px] rounded-lg overflow-hidden" />
        </div>
      </TabsContent>
      <TabsContent value="control">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Robot Control</CardTitle>
            <CardDescription>Options for controlling and managing the robot.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
              <span className="font-medium">Movement:</span>
              <div className="flex items-center gap-2">
                <Button size="sm">Forward</Button>
                <Button size="sm">Backward</Button>
                <Button size="sm">Left</Button>
                <Button size="sm">Right</Button>
              </div>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
              <span className="font-medium">Rotation:</span>
              <div className="flex items-center gap-2">
                <Button size="sm">Yaw Left</Button>
                <Button size="sm">Yaw Right</Button>
                <Button size="sm">Pitch Up</Button>
                <Button size="sm">Pitch Down</Button>
              </div>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
              <span className="font-medium">Gripper:</span>
              <div className="flex items-center gap-2">
                <Button size="sm">Open</Button>
                <Button size="sm">Close</Button>
              </div>
            </div>
            <div className="grid grid-cols-[120px_1fr] items-center gap-x-4 gap-y-2">
              <span className="font-medium">Power:</span>
              <div className="flex items-center gap-2">
                <Button size="sm">Start</Button>
                <Button size="sm">Stop</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
    </Container>
  )
}